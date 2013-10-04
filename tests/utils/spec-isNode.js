define(["cane/utils/isNode"], function(isNode) {

    describe("utils/isNode", function() {

        it("should return true for DOM elements", function() {
            var element = document.createElement("div");
            expect(isNode(element)).to.be(true);
        });

        it("should return true for text nodes", function() {
            var node = document.createTextNode("test");
            expect(isNode(node)).to.be(true);
        });

        it("should return true for document fragments", function() {
            var node = document.createDocumentFragment();
            expect(isNode(node)).to.be(true);
        });

        it("should return false for strings", function() {
            expect(isNode("<p>")).to.be(false);
        });

        it("should return false for normal object", function() {
            expect(isNode({})).to.be(false);
        });

        it("should return false for RegExp", function() {
            expect(isNode(/test/)).to.be(false);
        });

        it("should return false for null", function() {
            expect(isNode(null)).to.be(false);
        });

    });

});