var test = require( "tape" );
var sinon = require( "sinon" );
var delegate = require( "../../source/events/delegate" );

test("should listen for events on elements that match", function( t ) {
    t.plan( 1 );

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

    t.ok(handler.calledOn(child));
});

test("should ignore events on elements that do not match", function( t ) {
    t.plan( 1 );

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

    t.notOk(handler.called);
});

test("should ignore events on main element", function( t ) {
    t.plan( 1 );

    var main = document.createElement("div"),
        event = document.createEvent("Event"),
        handler = sinon.spy();

    delegate(main, "div", "test", handler);

    event.initEvent("test", true, true);
    document.body.appendChild(main);
    main.dispatchEvent(event);
    document.body.removeChild(main);

    t.notOk(handler.called);
});

test("should return an object with .remove function", function( t ) {
    t.plan( 1 );

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
    document.body.removeChild(main);
    t.ok(handler.calledOnce);
});

test("should accept multiple elements", function( t ) {
    t.plan( 1 );

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

    document.body.removeChild( main1 );
    document.body.removeChild( main2 );

    t.ok(handler.calledTwice);
});

test("should call callback in context if specified", function( t ) {
    t.plan( 1 );

    var span = document.createElement("span"),
        el = document.createElement("div"),
        event = document.createEvent("Event"),
        callback = sinon.spy(),
        context = { foo: "bar" };
    event.initEvent("test", true, true);

    el.appendChild(span);
    document.body.appendChild(el);

    delegate(el, "span", "test", callback, context);
    span.dispatchEvent(event);

    document.body.removeChild(el);

    t.ok(callback.calledOn(context));
});