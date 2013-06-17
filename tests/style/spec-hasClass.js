define(["cane/style/hasClass"], function (hasClass) {

    describe("style/hasClass()", function() {

        it("should check whether a node has a class", function() {
            var node = document.createElement("div");
            node.className = "foo";

            expect( hasClass(node, "foo") ).toBe(true);
            expect( hasClass(node, "bar") ).toBe(false);
        });

        it("should check for multiple classes", function() {
            var first = document.createElement("div");
            var second = document.createElement("div");

            first.className = "foo bar woot";
            second.className = "one two three";

            expect( hasClass(first, "bar woot foo") ).toBe(true);
            expect( hasClass(second, "five three") ).toBe(false);
        });

        it("should check on multiple elements", function() {
            var body = document.body,
                node1 = document.createElement("h1"),
                node2 = document.createElement("h1");
            node1.className = "one two three";
            node2.className = "four two three five";
            body.appendChild(node1);
            body.appendChild(node2);

            var nodes = document.getElementsByTagName("h1");

            expect( hasClass(nodes, "two three") ).toBe(true);
            expect( hasClass(nodes, "two five") ).toBe(false);
        });

    });

});
