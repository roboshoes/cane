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

    });

});
