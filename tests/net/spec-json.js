define(["cane/net/json"], function(json) {

    describe("net/json", function() {

        it("should call success callback with JSON", function() {
            var completed = false,
                jsonContent = null;

            json("base/tests/resources/test.json", function(data) {
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

        it("should call error callback", function() {
            var completed = false,
                success = sinon.spy();

            function error() {
                completed = true;
            }

            json("base/tests/resources/wrong.json", success, error);

            waitsFor(function() {
                return completed;
            }, "Request never completed", 10000);

            runs(function() {
                expect(success.called).toBe(false);
            });
        });
    });
});
