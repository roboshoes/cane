define(["cane/dom/index"], function(index) {

    describe("dom/index", function() {

        it("should return index of node", function() {
            var parent = document.createElement("div"),
                first = document.createElement("span"),
                second = document.createElement("span"),
                third = document.createElement("span");

            parent.appendChild(first);
            parent.appendChild(second);
            parent.appendChild(third);

            expect(index(first)).to.be(0);
            expect(index(second)).to.be(1);
            expect(index(third)).to.be(2);
        });

        it("should return -1 if node is not in DOM", function() {
            var node = document.createElement("div");

            expect(index(node)).to.be(-1);
        });

    });

});