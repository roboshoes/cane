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

        describe("request methods and parameters", function() {
            var server;

            beforeEach(function() {
                server = sinon.fakeServer.create();
            });

            afterEach(function() {
                server.restore();
            });

            it("should use POST method", function() {
                request({
                    method: "POST",
                    url: "/test"
                });

                var xhr = server.requests[0];
                expect(xhr.method).toEqual("POST");
                expect(xhr.url).toEqual("/test");
            });

            it("should use PUT method", function() {
                request({
                    method: "PUT",
                    url: "/test"
                });

                var xhr = server.requests[0];
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

                var xhr = server.requests[0];
                expect(xhr.requestHeaders).toEqual(headers);
            });

            it("should send data", function() {
                var data = "test data";

                request({
                    method: "POST",
                    url: "/test",
                    data: data
                });

                var xhr = server.requests[0];
                expect(xhr.requestBody).toEqual(data);
            });

        });

        describe("response codes", function() {
            var server;

            beforeEach(function() {
                server = sinon.fakeServer.create();
            });

            afterEach(function() {
                server.restore();
            });

            it("should call success on 200 response", function() {
                var success = sinon.spy();

                request({
                    url: "/test",
                    success: success
                });

                var xhr = server.requests[0];
                xhr.respond(200, {}, "");
                expect(success.calledWith("", 200));
            });

            it("should call success on 304 response", function() {
                var success = sinon.spy();

                request({
                    url: "/test",
                    success: success
                });

                var xhr = server.requests[0];
                xhr.respond(304, {}, "");
                expect(success.calledWith("", 304)).toBe(true);
            });

            it("should call error on 400 response", function() {
                var error = sinon.spy();

                request({
                    url: "/test",
                    error: error
                });

                var xhr = server.requests[0];
                xhr.respond(400, {}, "");
                expect(error.calledWith("", 400)).toBe(true);
            });

            it("should call error on 500 response", function() {
                var error = sinon.spy();

                request({
                    url: "/test",
                    error: error
                });

                var xhr = server.requests[0];
                xhr.respond(500, {}, "");
                expect(error.calledWith("", 500)).toBe(true);
            });

        });

    });

});
