define(["cane/style/addClass"], function (addClass) {

    describe("style/addClass()", function() {

        it("should add a class to an element", function() {
            var node = document.createElement("div");

            addClass(node, "newClass");

            expect(node.className).to.be("newClass");
        });

        it("should add multiple classes to an element", function() {
            var node = document.createElement("div");

            addClass(node, "one two");

            expect(node.className).to.be("one two");
        });

        it("should merge classes with existing classes", function() {
            var node = document.createElement("div");
            node.className = "one two";
            addClass(node, "one three");

            expect(node.className).to.be("one two three");
        });

        it("should add classes to array of nodes", function() {
            var node1 = document.createElement("span"),
                node2 = document.createElement("h1");

            addClass([node1, node2], "one two");

            expect(node1.className).to.be("one two");
            expect(node2.className).to.be("one two");
        });

        it("should add classes to NodeList", function() {
            var body = document.body,
                node1 = document.createElement("h1"),
                node2 = document.createElement("h1");

            body.appendChild(node1);
            body.appendChild(node2);

            var list = document.getElementsByTagName("h1");
            addClass(list, "one two");

            expect(node1.className).to.be("one two");
            expect(node2.className).to.be("one two");

            body.removeChild(node1);
            body.removeChild(node2);
        });

    });

});