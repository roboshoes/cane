define(["cane/dom/empty"], function(empty) {

    describe("dom/empty", function() {

        it("should empty a node", function() {

            var parent = document.createElement("div"),
                first = document.createElement("span"),
                second = document.createElement("span");

            parent.appendChild(first);
            parent.appendChild(second);

            empty(parent);

            expect(parent.childNodes.length).to.be(0);

        });

        it("should empty multiple nodes", function() {

            var parentOne = document.createElement("div"),
                parentTwo = document.createElement("div"),
                first = document.createElement("span"),
                second = document.createElement("span"),
                third = document.createElement("span"),
                forth = document.createElement("span");

            parentOne.appendChild(first);
            parentOne.appendChild(second);
            parentTwo.appendChild(third);
            parentTwo.appendChild(forth);

            empty(parentOne, parentTwo);

            expect(parentOne.childNodes.length).to.be(0);
            expect(parentTwo.childNodes.length).to.be(0);
        });
    });
});
