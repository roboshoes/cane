define(["cane/events/delegate"], function(delegate) {

    describe("events/delegate", function() {

        it("should listen for events on elements that match", function() {
            var main = document.createElement("div"),
                child = document.createElement("span"),
                event = document.createEvent("Event"),
                handler = sinon.spy();

            delegate(main, ".child", "test", handler);

            event.initEvent("test", true, true);
            child.className = "child";
            main.appendChild(child);
            // See https://code.google.com/p/chromium/issues/detail?id=120494
            // Element must be attached to body in Chrome/Webkit
            document.body.appendChild(main);
            child.dispatchEvent(event);
            document.body.removeChild(main);

            expect(handler.calledOn(child)).toBe(true);
        });

        it("should ignore events on elements that do not match", function() {
            var main = document.createElement("div"),
                child = document.createElement("span"),
                event = document.createEvent("Event"),
                handler = sinon.spy();

            delegate(main, ".ignore", "test", handler);

            event.initEvent("test", true, true);
            main.appendChild(child);
            document.body.appendChild(main);
            child.dispatchEvent(event);
            document.body.removeChild(main);

            expect(handler.called).toBe(false);
        });

        it("should ignore events on main element", function() {
            var main = document.createElement("div"),
                event = document.createEvent("Event"),
                handler = sinon.spy();

            delegate(main, "div", "test", handler);

            event.initEvent("test", true, true);
            document.body.appendChild(main);
            main.dispatchEvent(event);
            document.body.removeChild(main);

            expect(handler.called).toBe(false);
        });

        it("should return an object with .remove function", function() {
            var main = document.createElement("div"),
                child = document.createElement("span"),
                event = document.createEvent("Event"),
                handler = sinon.spy();

            var listener = delegate(main, "span", "test", handler);

            event.initEvent("test", true, true);
            main.appendChild(child);
            document.body.appendChild(main);
            child.dispatchEvent(event);
            listener.remove();
            child.dispatchEvent(event);

            expect(handler.calledOnce).toBe(true);
        });

        it("should accept multiple elements", function() {
            var main1 = document.createElement("div"),
                main2 = document.createElement("div"),
                child1 = document.createElement("span"),
                child2 = document.createElement("span"),
                event = document.createEvent("Event"),
                handler = sinon.spy();

            delegate([main1, main2], "span", "test", handler);

            event.initEvent("test", true, true);
            main1.appendChild(child1);
            main2.appendChild(child2);
            document.body.appendChild(main1);
            document.body.appendChild(main2);

            child1.dispatchEvent(event);
            child2.dispatchEvent(event);

            expect(handler.calledTwice).toBe(true);
        });

    });

});
