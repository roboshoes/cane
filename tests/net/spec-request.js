define(["cane/net/request", "mout/queryString/decode"], function(request, decode) {

    describe("net/request()", function() {

        it("should trigger completed and success", function() {

            var completed = false;
            var success = false;
            var response = {};

            request({
                url: "base/tests/resources/test.txt",
                completed: function(responseDate, status) {
                    response.text = responseDate;
                    response.status = status;
                    completed = true;
                },
                success: function() {
                    success = true;
                }
            });

            waitsFor(function(){
                return completed && success;
            }, "Request never completed", 10000);

            runs(function(){
                expect(response.text).toBe("Successfully loaded");
                expect(response.status).toBe(200);
            });

        });

        it("should trigger completed and error", function() {

            var completed = false;
            var error = false;
            var response = {};

            request({
                url: "base/tests/resources/wrong.txt",
                completed: function() {
                    completed = true;
                },
                error: function(responseData, status) {
                    response.status = status;
                    error = true;
                }
            });

            waitsFor(function(){
                return completed && error;
            }, "Request never completed", 10000);

            runs(function(){
                expect(response.status).toBe(404);
            });

        });

        describe("additional parameters and headers", function() {

            beforeEach(function(){
                this.xhr = sinon.useFakeXMLHttpRequest();
                var requests = this.requests = [];

                this.xhr.onCreate = function (xhr) {
                    requests.push(xhr);
                };
            });

            afterEach(function(){
                this.xhr.restore();
            });

            it("should add header paramters", function() {
                var headers = {
                    Accept: "text/plain"
                };

                request({
                    url: "base/test/resources/test.txt",
                    headers: headers
                });

                var xhr = this.requests[ 0 ];

                expect(xhr.requestHeaders).toEqual(headers);
            });

            it("should send additional parameters in GET request", function() {

                var data = {
                    foo: "hello",
                    bar: "world"
                };

                request({
                    url: "base/test/resources/test.txt",
                    data: data
                });

                var xhr = this.requests[ 0 ];
                var parameter = decode( xhr.url.split("?")[1] );

                expect(parameter).toEqual(data);
                expect(xhr.method).toBe("GET");

            });

            it("should send additional parameters in POST request", function() {
                var data = {
                    foo: "hello",
                    bar: "world"
                };

                request({
                    url: "base/test/resources/test.txt",
                    data: data,
                    method: "POST"
                });

                var xhr = this.requests[ 0 ];

                expect(xhr.url).toEqual("base/test/resources/test.txt");
                expect(xhr.method).toBe("POST");
                expect(decode(xhr.requestBody)).toEqual(data);
            });

        });

    });

});
