define(["cane/net/getJSON"], function(getJSON) {

    describe("net/getJSON", function() {

        it("should call success callback with JSON", function(done) {
            getJSON("base/tests/resources/test.json", function(data) {
                expect(data).to.eql({ "foo": "bar", "test": [1, 2, 3], "boolean": false });
                done();
            });
        });

        it("should call error callback when resource can't be loaded", function(done) {
            var success = sinon.spy();

            getJSON("base/tests/resources/wrong.json", success, function() {
                expect(success.called).to.be(false);
                done();
            });
        });

        it("should call error callback when resource is not valid JSON", function(done) {
            var success = sinon.spy();

            getJSON("base/tests/resources/invalid.json", success, function() {
                expect(success.called).to.be(false);
                done();
            });
        });
    });
});
