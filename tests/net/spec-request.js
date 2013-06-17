define(["cane/net/request"], function(request) {

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

            waitsFor(function() {
                return completed && success;
            }, "Request never completed", 10000);

            runs(function() {
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

            waitsFor(function() {
                return completed && error;
            }, "Request never completed", 10000);

            runs(function() {
                expect(response.status).toBe(404);
            });

        });

        describe("additional parameters and headers", function() {

            beforeEach(function() {
                this.xhr = sinon.useFakeXMLHttpRequest();
                var requests = this.requests = [];

                this.xhr.onCreate = function (xhr) {
                    requests.push(xhr);
                };
            });

            afterEach(function() {
                this.xhr.restore();
            });

            it("should use POST method", function() {
                request({
                    method: "POST",
                    url: "/test"
                });

                var xhr = this.requests[0];
                expect(xhr.method).toEqual("POST");
                expect(xhr.url).toEqual("/test");
            });

            it("should use PUT method", function() {
                request({
                    method: "PUT",
                    url: "/test"
                });

                var xhr = this.requests[0];
                expect(xhr.method).toEqual("PUT");
                expect(xhr.url).toEqual("/test");
            });

            it("should add header parameters", function() {
                var headers = {
                    Accept: "text/plain"
                };

                request({
                    url: "base/test/resources/test.txt",
                    headers: headers
                });

                var xhr = this.requests[0];
                expect(xhr.requestHeaders).toEqual(headers);
            });

            it("should send data", function() {
                var data = "test data";

                request({
                    method: "POST",
                    url: "/test",
                    data: data
                });

                var xhr = this.requests[0];
                expect(xhr.requestBody).toEqual(data);
            });

        });

    });

});
