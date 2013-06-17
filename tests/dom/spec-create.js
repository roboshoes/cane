define(["cane/dom/create"], function(create) {

    describe("dom/create", function() {

        it("should create element with tag name", function() {
            var el = create("div");

            expect(el.nodeType).toBe(Node.ELEMENT_NODE);
            expect(el.tagName).toBe("DIV");
        });

        it("should set attributes on element", function() {
            var el = create("div", { "class": "test", "data-test": "value" });

            expect(el.className).toBe("test");
            expect(el.getAttribute("data-test")).toBe("value");
        });

        it("should add child nodes", function() {
            var one = document.createElement("span"),
                two = document.createElement("span"),
                el = create("div", one, two);

            var nodes = el.childNodes;
            expect(nodes.length).toBe(2);
            expect(nodes[0]).toBe(one);
            expect(nodes[1]).toBe(two);
        });

        it("should add array of child nodes", function() {
            var one = document.createElement("span"),
                two = document.createElement("span"),
                three = document.createElement("span"),
                el = create("div", [one, two], three);

            var nodes = el.childNodes;
            expect(nodes.length).toBe(3);
            expect(nodes[0]).toBe(one);
            expect(nodes[1]).toBe(two);
            expect(nodes[2]).toBe(three);
        });

        it("should set attributes and add child nodes", function() {
            var one = document.createElement("span"),
                two = document.createElement("span"),
                el = create("div", { "class": "test" }, one, two);

            expect(el.className).toBe("test");

            var nodes = el.childNodes;
            expect(nodes.length).toBe(2);
            expect(nodes[0]).toBe(one);
            expect(nodes[1]).toBe(two);
        });

        it("should set text", function() {
            var text = "test <span>test</span>",
                el = create("div", text);

            expect(el.textContent).toBe(text);
        });

        it("should set attributes and text", function() {
            var text = "test content",
                el = create("div", { "class": "test" }, text);

            expect(el.className).toBe("test");
            expect(el.textContent).toBe(text);
        });

    });

});