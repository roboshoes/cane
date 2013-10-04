define(["cane/style/css"], function(css) {

    describe("style/css()", function() {

        it("should add one style in key value format", function() {
            var node = document.createElement("div");
            css(node, "overflow", "hidden");
            expect(node.style.overflow).to.be("hidden");
        });

        it("should add multiple style settings passed as object", function() {
            var node = document.createElement("div");

            css(node, {
                "overflow": "hidden",
                "height": "30px",
                "width": "20px",
                "lineHeight": "20px"
            });

            expect(node.style.overflow).to.be("hidden");
            expect(node.style.height).to.be("30px");
            expect(node.style.width).to.be("20px");
            expect(node.style.lineHeight).to.be("20px");
        });

        it("should normalize style", function() {
            var node = document.createElement("div");

            css(node, "line-height", "20px");
            css(node, {
                fontSize: "10em",
                "minWidth": "100px"
            });

            expect(node.style.lineHeight).to.be("20px");
            expect(node.style.fontSize).to.be("10em");
            expect(node.style.minWidth).to.be("100px");
        });

    });

});