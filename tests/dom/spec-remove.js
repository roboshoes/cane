define(["cane/dom/remove"], function(remove) {

    describe("dom/remove", function() {

        it("should remove node from parent node", function() {
            var parent = document.createElement("div"),
                childOne = document.createElement("span"),
                childTwo = document.createElement("span");

            parent.appendChild(childOne);
            parent.appendChild(childTwo);

            remove(childOne);

            expect(parent.children.length).toBe(1);
            expect(parent.firstChild).toBe(childTwo);
        });

        it("should remove multiple nodes", function() {
            var parent = document.createElement("div"),
                children = [
                    document.createElement("span"),
                    document.createElement("span"),
                    document.createElement("span")
                ];
            parent.appendChild(children[0]);
            parent.appendChild(children[1]);
            parent.appendChild(children[2]);

            remove(children[0], [children[1], children[2]]);

            expect(parent.children.length).toBe(0);
        });

        it("should remove text nodes", function() {
            var parent = document.createElement("div"),
                text = document.createTextNode("test");
            parent.appendChild(text);

            remove(text);

            expect(parent.children.length).toBe(0);
        });

        it("should ignore nodes that do not have a parent", function() {
            var node = document.createElement("div"),
                text = document.createTextNode("Hello World!");

            remove(node, text);
        });

    });

});