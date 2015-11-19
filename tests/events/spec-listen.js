var test = require( "tape" );
var sinon = require( "sinon" );
var listen = require( "../../source/events/listen" );

test("should add event listener", function( t ) {
    t.plan( 3 );

    var el = document.createElement("div"),
        callback = sinon.spy(),
        event = document.createEvent("Event");
    event.initEvent("test", true, true);

    listen(el, "test", callback);
    el.dispatchEvent(event);

    t.ok(callback.calledOnce);
    t.ok(callback.calledWith(event));
    t.ok(callback.calledOn(el));
});

test("should listen on multiple nodes", function( t ) {
    t.plan( 4 );

    var first = document.createElement("div"),
        second = document.createElement("div"),
        callback = sinon.spy(),
        event = document.createEvent("Event");
    event.initEvent("test", true, true);

    listen([first, second], "test", callback);

    first.dispatchEvent(event);
    t.ok(callback.calledOnce);
    t.ok(callback.calledOn(first));

    second.dispatchEvent(event);
    t.ok(callback.calledTwice);
    t.ok(callback.calledOn(first));
});

test("should listen on multiple nodes", function( t ) {
    t.plan( 2 );

    var el = document.createElement("div"),
        fooEvent = document.createEvent("Event"),
        barEvent = document.createEvent("Event"),
        callback = sinon.spy();
    fooEvent.initEvent("foo", true, true);
    barEvent.initEvent("bar", true, true);

    listen(el, "foo bar", callback);

    el.dispatchEvent(fooEvent);
    t.ok(callback.calledWith(fooEvent));

    el.dispatchEvent(barEvent);
    t.ok(callback.calledWith(barEvent));
});

test("should return a remove function to remove listener", function( t ) {
    t.plan( 1 );

    var el = document.createElement("div"),
        event = document.createEvent("Event"),
        callback = sinon.spy();
    event.initEvent("test", true, true);

    var listener = listen(el, "test", callback);
    listener.remove();
    el.dispatchEvent(event);

    t.notOk(callback.called);
});

test("should call callback in context if specified", function( t ) {
    t.plan( 1 );

    var context = { a: 1 },
        el = document.createElement("div"),
        event = document.createEvent("Event"),
        callback = sinon.spy();
    event.initEvent("test", true, true);

    listen(el, "test", callback, context);
    el.dispatchEvent(event);

    t.ok(callback.calledOn(context));
});
