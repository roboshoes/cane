define(["cane/dom/children"], function(children) {

    describe("dom/children", function() {

        it("should return an array of only nodes", function() {
            var parent = document.createElement("div");
            parent.innerHTML = "<div>First DIV</div><div>\n\n </div>  <div>Third DIV</div>\n\n <!-- comment -->";

            var nodes = children(parent);

            expect(nodes.length).toBe(3);
            expect(nodes[0].nodeType).toBe(1);
            expect(nodes[1].nodeType).toBe(1);
            expect(nodes[2].nodeType).toBe(1);
        });

        it("should return the children of several nodes", function() {
            var parentOne = document.createElement("div");
            var parentTwo = document.createElement("div");

            parentOne.innerHTML = "<div>First DIV</div><div>\n\n   Second DIV</div>  <div>Third DIV</div>\n\n    ";
            parentTwo.innerHTML = "<span>foo</span>   \n  <span>bar</span>";

            var nodes = children( [parentOne, parentTwo] );

            expect(nodes.length).toBe(5);
        });

    });

});
