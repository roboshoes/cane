define(["cane/dom/fragment"], function(fragment) {

    describe("dom/fragment", function() {

        it("should create empty DocumentFragment", function() {
            var f = fragment();
            expect(f.nodeType).toBe(Node.DOCUMENT_FRAGMENT_NODE);
            expect(f.childNodes.length).toBe(0);
        });

        it("should add nodes", function() {
            var first = document.createElement("div"),
                second = document.createTextNode("Test"),
                f = fragment(first, second);

            expect(f.childNodes.length).toBe(2);
            expect(f.firstChild).toBe(first);
            expect(f.lastChild).toBe(second);
        });

        it("should add nested arrays", function() {
            var one = document.createElement("div"),
                two = document.createElement("div"),
                three = document.createElement("div"),
                f = fragment(one, [two, [three]]);

            expect(f.childNodes.length).toBe(3);
            expect(f.childNodes[0]).toBe(one);
            expect(f.childNodes[1]).toBe(two);
            expect(f.childNodes[2]).toBe(three);
        });

    });

});