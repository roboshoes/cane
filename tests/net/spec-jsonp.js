define(["cane/net/jsonp"], function(jsonp) {

    describe("net/jsonp()", function() {

        var url = window.location.protocol + "//" + window.location.hostname + ":9000/jsonp/";
        var mirrorURL = url + "mirror";
        var staticURL = url + "static";

        it("should call resource using jsonp", function() {
            var completed = false;
            var content = null;

            jsonp(staticURL, function(data) {
                completed = true;
                content = data;
            });

            waitsFor(function() {
                return completed;
            }, "Request never completed", 10000);

            runs(function() {
                expect(content).toEqual({ "foo": "bar" });
            });
        });

        it("should send data", function() {
            var completed = false;
            var content = null;
            var parameters = {
                foo: "complex string & characters like %^*",
                bar: "another value"
            };

            function onComplete(data) {
                completed = true;
                content = data;
            }

            jsonp(mirrorURL, parameters, onComplete);

            waitsFor(function() {
                return completed;
            }, "Request never completed", 10000);

            runs(function() {
                expect(content).toEqual(parameters);
            });
        });

        it("should manage multiple requests parallel", function() {

            var complete = [false, false, false];
            var content = [];

            function onComplete(index) {
                return function(data) {
                    complete[index] = true;
                    content[index] = data;
                };
            }

            jsonp(mirrorURL, { value: "one" }, onComplete(0) );
            jsonp(mirrorURL, { value: "two" }, onComplete(1) );
            jsonp(mirrorURL, { value: "three" }, onComplete(2) );

            waitsFor(function() {
                return complete[0] && complete[1] && complete[2];
            }, "Request never completed", 10000 );

            runs(function() {
                expect(content[0]).toEqual({ value: "one" });
                expect(content[1]).toEqual({ value: "two" });
                expect(content[2]).toEqual({ value: "three" });
            });
        });

    });

});