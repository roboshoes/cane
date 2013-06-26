define(["cane/dom/setText"], function(setText) {

    describe("dom/setText", function() {

        it("should set text content of one node", function() {
            var el = document.createElement("div");

            setText(el, "foo bar");

            expect(el.textContent).toBe("foo bar");
        });

        it("shold set text content of multiple nodes", function() {
            var first = document.createElement("div"),
                second = document.createElement("div");

            setText([first, second], "foo");

            expect(first.textContent).toBe("foo");
            expect(second.textContent).toBe("foo");
        });
    });
});
