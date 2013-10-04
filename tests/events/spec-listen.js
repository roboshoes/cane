define(["cane/events/listen"], function(listen) {

    describe("events/listen", function() {

        it("should add event listener", function() {
            var el = document.createElement("div"),
                callback = sinon.spy(),
                event = document.createEvent("Event");
            event.initEvent("test", true, true);

            listen(el, "test", callback);
            el.dispatchEvent(event);

            expect(callback.calledOnce).to.be(true);
            expect(callback.calledWith(event)).to.be(true);
            expect(callback.calledOn(el)).to.be(true);
        });

        it("should listen on multiple nodes", function() {
            var first = document.createElement("div"),
                second = document.createElement("div"),
                callback = sinon.spy(),
                event = document.createEvent("Event");
            event.initEvent("test", true, true);

            listen([first, second], "test", callback);

            first.dispatchEvent(event);
            expect(callback.calledOnce).to.be(true);
            expect(callback.calledOn(first)).to.be(true);

            second.dispatchEvent(event);
            expect(callback.calledTwice).to.be(true);
            expect(callback.calledOn(first)).to.be(true);
        });

        it("should listen on multiple nodes", function() {
            var el = document.createElement("div"),
                fooEvent = document.createEvent("Event"),
                barEvent = document.createEvent("Event"),
                callback = sinon.spy();
            fooEvent.initEvent("foo", true, true);
            barEvent.initEvent("bar", true, true);

            listen(el, "foo bar", callback);

            el.dispatchEvent(fooEvent);
            expect(callback.calledWith(fooEvent)).to.be(true);

            el.dispatchEvent(barEvent);
            expect(callback.calledWith(barEvent)).to.be(true);
        });

        it("should return a remove function to remove listener", function() {
            var el = document.createElement("div"),
                event = document.createEvent("Event"),
                callback = sinon.spy();
            event.initEvent("test", true, true);

            var listener = listen(el, "test", callback);
            listener.remove();
            el.dispatchEvent(event);

            expect(callback.called).to.be(false);
        });

    });

});