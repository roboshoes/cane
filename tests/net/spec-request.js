define(["cane/net/request"], function(request) {

    describe("net/request()", function() {

        it("should trigger completed and success", function(done) {
            request({
                url: "base/tests/resources/test.txt",
                completed: function(responseDate, status) {
                    expect(responseDate).to.be("Successfully loaded");
                    expect(status).to.be(200);
                },
                success: function() {
                    done();
                }
            });
        });

        it("should trigger error", function(done) {

            request({
                url: "base/tests/resources/wrong.txt",
                error: function(responseData, status) {
                    expect(status).to.be(404);
                    done();
                }
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
                expect(xhr.method).to.equal("POST");
                expect(xhr.url).to.equal("/test");
            });

            it("should use PUT method", function() {
                request({
                    method: "PUT",
                    url: "/test"
                });

                var xhr = server.requests[0];
                expect(xhr.method).to.equal("PUT");
                expect(xhr.url).to.equal("/test");
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
                expect(xhr.requestHeaders).to.eql(headers);
            });

            it("should send data", function() {
                var data = "test data";

                request({
                    method: "POST",
                    url: "/test",
                    data: data
                });

                var xhr = server.requests[0];
                expect(xhr.requestBody).to.equal(data);
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
                expect(success.calledWith("", 200)).to.be(true);
            });

            it("should call success on 304 response", function() {
                var success = sinon.spy();

                request({
                    url: "/test",
                    success: success
                });

                var xhr = server.requests[0];
                xhr.respond(304, {}, "");
                expect(success.calledWith("", 304)).to.be(true);
            });

            it("should call error on 400 response", function() {
                var error = sinon.spy();

                request({
                    url: "/test",
                    error: error
                });

                var xhr = server.requests[0];
                xhr.respond(400, {}, "");
                expect(error.calledWith("", 400)).to.be(true);
            });

            it("should call error on 500 response", function() {
                var error = sinon.spy();

                request({
                    url: "/test",
                    error: error
                });

                var xhr = server.requests[0];
                xhr.respond(500, {}, "");
                expect(error.calledWith("", 500)).to.be(true);
            });

        });

    });

});
