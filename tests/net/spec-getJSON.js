define(["cane/net/getJSON"], function(getJSON) {

    describe("net/getJSON", function() {

        it("should call success callback with JSON", function() {
            var completed = false,
                jsonContent = null;

            getJSON("base/tests/resources/test.json", function(data) {
                completed = true;
                jsonContent = data;
            });

            waitsFor(function() {
                return completed;
            }, "Request never completed", 10000);

            runs(function() {
                expect(jsonContent).toEqual({ "foo": "bar", "test": [1, 2, 3], "boolean": false });
            });
        });

        it("should call error callback when resource can't be loaded", function() {
            var completed = false,
                success = sinon.spy();

            function error() {
                completed = true;
            }

            getJSON("base/tests/resources/wrong.json", success, error);

            waitsFor(function() {
                return completed;
            }, "Request never completed", 10000);

            runs(function() {
                expect(success.called).toBe(false);
            });
        });

        it("should call error callback when resource is not valid JSON", function() {
            var completed = false,
                success = sinon.spy();

            function error() {
                completed = true;
            }

            getJSON("base/tests/resources/invalid.json", success, error);

            waitsFor(function() {
                return completed;
            }, "Request never completed", 10000);

            runs(function() {
                expect(success.called).toBe(false);
            });
        });
    });
});
