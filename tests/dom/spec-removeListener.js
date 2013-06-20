define(["cane/dom/removeListener"], function(removeListener) {

    describe("dom/removeListener", function() {

        it("should remove event listener", function() {
            var el = document.createElement("div"),
                event = document.createEvent("Event"),
                callback = sinon.spy();
            event.initEvent("test", true, true);

            el.addEventListener("test", callback, false);
            removeListener(el, "test", callback);
            el.dispatchEvent(event);

            expect(callback.called).toBe(false);
        });

        it("should remove event listener from multiple nodes", function() {
            var first = document.createElement("div"),
                second = document.createElement("div"),
                event = document.createEvent("Event"),
                callback = sinon.spy();
            event.initEvent("test", true, true);

            first.addEventListener("test", callback, false);
            second.addEventListener("test", callback, false);
            removeListener([first, second], "test", callback);
            first.dispatchEvent(event);
            second.dispatchEvent(event);

            expect(callback.called).toBe(false);
        });

        it("should ignore if listener has not been added", function() {
            var el = document.createElement("div"),
                callback = sinon.spy();

            removeListener(el, "test", callback);
        });

        it("should remove listener from multiple events", function() {
            var el = document.createElement("div"),
                fooEvent = document.createEvent("Event"),
                barEvent = document.createEvent("Event"),
                callback = sinon.spy();
            fooEvent.initEvent("foo", true, true);
            barEvent.initEvent("bar", true, true);

            el.addEventListener("foo", callback, false);
            el.addEventListener("bar", callback, false);

            removeListener(el, "foo bar", callback);

            el.dispatchEvent(fooEvent);
            el.dispatchEvent(barEvent);

            expect(callback.called).toBe(false);
        });

    });

});
