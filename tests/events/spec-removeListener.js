var test = require( "tape" );
var sinon = require( "sinon" );
var removeListener = require( "../../source/events/removeListener" );

test("should remove event listener", function( t ) {
    t.plan( 1 );

    var el = document.createElement("div"),
        event = document.createEvent("Event"),
        callback = sinon.spy();
    event.initEvent("test", true, true);

    el.addEventListener("test", callback, false);
    removeListener(el, "test", callback);
    el.dispatchEvent(event);

    t.notOk(callback.called);
});

test("should remove event listener from multiple nodes", function( t ) {
    t.plan( 1 );

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

    t.notOk(callback.called);
});

test("should ignore if listener has not been added", function( t ) {
    t.plan( 1 );

    var el = document.createElement("div"),
        callback = sinon.spy();

    t.doesNotThrow( function() {
        removeListener(el, "test", callback);
    } );
});

test("should remove listener from multiple events", function( t ) {
    t.plan( 1 );

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

    t.notOk(callback.called);
});
