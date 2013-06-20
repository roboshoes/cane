define(["cane/dom/listen"], function(listen) {

    describe("dom/listen", function() {

        it("should add event listener", function() {
            var el = document.createElement("div"),
                callback = sinon.spy(),
                event = document.createEvent("Event");
            event.initEvent("test", true, true);

            listen(el, "test", callback);
            el.dispatchEvent(event);

            expect(callback.calledOnce).toBe(true);
            expect(callback.calledWith(event)).toBe(true);
            expect(callback.calledOn(el)).toBe(true);
        });

        it("should listen on multiple nodes", function() {
            var first = document.createElement("div"),
                second = document.createElement("div"),
                callback = sinon.spy(),
                event = document.createEvent("Event");
            event.initEvent("test", true, true);

            listen([first, second], "test", callback);

            first.dispatchEvent(event);
            expect(callback.calledOnce).toBe(true);
            expect(callback.calledOn(first)).toBe(true);

            second.dispatchEvent(event);
            expect(callback.calledTwice).toBe(true);
            expect(callback.calledOn(first)).toBe(true);
        });

    });

});