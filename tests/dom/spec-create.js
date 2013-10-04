define(["cane/dom/create"], function(create) {

    describe("dom/create", function() {

        it("should create element with tag name", function() {
            var el = create("div");

            expect(el.nodeType).to.be(Node.ELEMENT_NODE);
            expect(el.tagName).to.be("DIV");
        });

        it("should set attributes on element", function() {
            var el = create("div", { "class": "test", "data-test": "value" });

            expect(el.className).to.be("test");
            expect(el.getAttribute("data-test")).to.be("value");
        });

        it("should add child nodes", function() {
            var one = document.createElement("span"),
                two = document.createElement("span"),
                el = create("div", one, two);

            var nodes = el.childNodes;
            expect(nodes.length).to.be(2);
            expect(nodes[0]).to.be(one);
            expect(nodes[1]).to.be(two);
        });

        it("should add array of child nodes", function() {
            var one = document.createElement("span"),
                two = document.createElement("span"),
                three = document.createElement("span"),
                el = create("div", [one, two], three);

            var nodes = el.childNodes;
            expect(nodes.length).to.be(3);
            expect(nodes[0]).to.be(one);
            expect(nodes[1]).to.be(two);
            expect(nodes[2]).to.be(three);
        });

        it("should set attributes and add child nodes", function() {
            var one = document.createElement("span"),
                two = document.createElement("span"),
                el = create("div", { "class": "test" }, one, two);

            expect(el.className).to.be("test");

            var nodes = el.childNodes;
            expect(nodes.length).to.be(2);
            expect(nodes[0]).to.be(one);
            expect(nodes[1]).to.be(two);
        });

        it("should set text", function() {
            var text = "test <span>test</span>",
                el = create("div", text);

            expect(el.textContent).to.be(text);
        });

        it("should set attributes and text", function() {
            var text = "test content",
                el = create("div", { "class": "test" }, text);

            expect(el.className).to.be("test");
            expect(el.textContent).to.be(text);
        });

    });

});