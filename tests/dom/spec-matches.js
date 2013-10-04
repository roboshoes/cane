define(["cane/dom/matches"], function(matches) {

    describe("dom/matches", function() {

        it("should return true if node matches selector", function() {
            var node = document.createElement("div");
            node.className = "test";

            expect( matches("div.test", node) ).to.be(true);
        });

        it("should return false if node does not match selector", function() {
            var node = document.createElement("div");

            expect( matches(".bar", node) ).to.be(false);
        });

        it("should return true if all nodes match", function() {
            var first = document.createElement("div"),
                second = document.createElement("div");

            expect( matches("div", first, second) ).to.be(true);
        });

        it("should return false if any of the nodes do not match", function() {
            var first = document.createElement("div"),
                second = document.createElement("div");
            first.className = "foo";

            expect( matches(".foo", first, second) ).to.be(false);
        });

    });

});