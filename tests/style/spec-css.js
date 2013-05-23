define(["cane/style/css"], function(css) {

    describe("style/css()", function() {

        it("should add one style in key value format", function() {
            var node = document.createElement("div");
            css(node, "overflow", "hidden");
            expect(node.style.overflow).toBe("hidden");
        });

        it("should add multiple style settings passed as object", function() {
            var node = document.createElement("div");

            css(node, {
                "overflow": "hidden",
                "height": "30px",
                "width": "20px",
                "lineHeight": "20px"
            });

            expect(node.style.overflow).toBe("hidden");
            expect(node.style.height).toBe("30px");
            expect(node.style.width).toBe("20px");
            expect(node.style.lineHeight).toBe("20px");
        });

        it("should normalize style", function() {
            var node = document.createElement("div");

            css(node, "line-height", "20px");
            css(node, {
                fontSize: "10em",
                "minWidth": "100px"
            });

            expect(node.style.lineHeight).toBe("20px");
            expect(node.style.fontSize).toBe("10em");
            expect(node.style.minWidth).toBe("100px");
        });

    });

});