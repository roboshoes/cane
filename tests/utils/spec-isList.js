define(["cane/utils/isList"], function(isList) {

    describe("utils/isList", function() {

        it("should return true for NodeList", function() {
            var list = document.getElementsByTagName("div");
            expect(isList(list)).to.be(true);
        });

        it("should return true for array", function() {
            expect(isList([])).to.be(true);
        });

        it("should return true for arguments", function() {
            expect(isList(arguments)).to.be(true);
        });

        it("should return false for Node", function() {
            var element = document.createElement("div");
            expect(isList(element)).to.be(false);
        });

        it("should return false for object", function() {
            expect(isList({})).to.be(false);
        });

        it("should return false for null", function() {
            expect(isList(null)).to.be(false);
        });

    });

});