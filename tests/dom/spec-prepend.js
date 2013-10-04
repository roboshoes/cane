define(["cane/dom/prepend"], function(prepend) {

    describe("dom/prepend", function() {

        it("should prepend nodes to parent", function() {
            var parent = document.createElement("div"),
                first = document.createElement("span"),
                last = document.createElement("span");

            parent.appendChild(last);
            prepend(parent, first);

            expect(parent.childNodes.length).to.be(2);
            expect(parent.firstChild).to.be(first);
            expect(parent.lastChild).to.be(last);
        });

        it("should add multiple nodes", function() {
            var parent = document.createElement("div"),
                one = document.createElement("span"),
                two = document.createElement("span"),
                three = document.createElement("span");

            prepend(parent, one, [two, three]);

            var nodes = parent.childNodes;
            expect(nodes[0]).to.be(one);
            expect(nodes[1]).to.be(two);
            expect(nodes[2]).to.be(three);
        });

    });

});