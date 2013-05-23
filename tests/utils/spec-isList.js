define(["cane/utils/isList"], function(isList) {

    describe("utils/isList", function() {

        it("should return true for NodeList", function() {
            var list = document.getElementsByTagName("div");
            expect(isList(list)).toBe(true);
        });

        it("should return true for array", function() {
            expect(isList([])).toBe(true);
        });

        it("should return false for Node", function() {
            var element = document.createElement("div");
            expect(isList(element)).toBe(false);
        });

        it("should return false for object", function() {
            expect(isList({})).toBe(false);
        });

        it("should return false for null", function() {
            expect(isList(null)).toBe(false);
        });

    });

});