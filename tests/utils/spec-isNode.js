define(["cane/utils/isNode"], function(isNode) {

    describe("utils/isNode", function() {

        it("should return true for DOM elements", function() {
            var element = document.createElement("div");
            expect(isNode(element)).toBe(true);
        });

        it("should return true for text nodes", function() {
            var node = document.createTextNode("test");
            expect(isNode(node)).toBe(true);
        });

        it("should return true for document fragments", function() {
            var node = document.createDocumentFragment();
            expect(isNode(node)).toBe(true);
        });

        it("should return false for strings", function() {
            expect(isNode("<p>")).toBe(false);
        });

        it("should return false for normal object", function() {
            expect(isNode({})).toBe(false);
        });

        it("should return false for RegExp", function() {
            expect(isNode(/test/)).toBe(false);
        });

        it("should return false for null", function() {
            expect(isNode(null)).toBe(false);
        });

    });

});