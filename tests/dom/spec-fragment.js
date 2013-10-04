define(["cane/dom/fragment"], function(fragment) {

    describe("dom/fragment", function() {

        it("should create empty DocumentFragment", function() {
            var f = fragment();
            expect(f.nodeType).to.be(Node.DOCUMENT_FRAGMENT_NODE);
            expect(f.childNodes.length).to.be(0);
        });

        it("should add nodes", function() {
            var first = document.createElement("div"),
                second = document.createTextNode("Test"),
                f = fragment(first, second);

            expect(f.childNodes.length).to.be(2);
            expect(f.firstChild).to.be(first);
            expect(f.lastChild).to.be(second);
        });

        it("should add nested arrays", function() {
            var one = document.createElement("div"),
                two = document.createElement("div"),
                three = document.createElement("div"),
                f = fragment(one, [two, [three]]);

            expect(f.childNodes.length).to.be(3);
            expect(f.childNodes[0]).to.be(one);
            expect(f.childNodes[1]).to.be(two);
            expect(f.childNodes[2]).to.be(three);
        });

    });

});