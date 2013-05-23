define(["cane/style/removeClass"], function(removeClass) {

    describe("style/removeClass()", function() {

        it("should remove a class from an element", function() {
            var node = document.createElement("div");
            node.className = "one two";

            removeClass(node, "one");

            expect(node.className).toBe("two");
        });

        it("should remove multiple classes from an element", function() {
            var node = document.createElement("div");
            node.className = "one two three";

            removeClass(node, "one three");

            expect(node.className).toBe("two");
        });

        it("should remove classes to array of nodes", function() {
            var node1 = document.createElement("span"),
                node2 = document.createElement("h1");
            node1.className = "one two three";
            node2.className = "four two three five";

            removeClass([node1, node2], "three two");

            expect(node1.className).toBe("one");
            expect(node2.className).toBe("four five");
        });

        it("should add classes to NodeList", function() {
            var body = document.body,
                node1 = document.createElement("h1"),
                node2 = document.createElement("h1");
            node1.className = "one two three";
            node2.className = "four two three five";
            body.appendChild(node1);
            body.appendChild(node2);

            var nodes = document.getElementsByTagName("h1");

            removeClass(nodes, "three two");

            expect(node1.className).toBe("one");
            expect(node2.className).toBe("four five");

            body.removeChild(node1);
            body.removeChild(node2);
        });

    });

});