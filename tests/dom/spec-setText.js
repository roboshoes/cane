var test = require( "tape" );
var setText = require( "../../source/dom/setText" );

test("should set text content of one node", function( t ) {
    t.plan( 1 );
    var el = document.createElement("div");

    setText(el, "foo bar");

    t.equal(el.textContent, "foo bar");
});

test("shold set text content of multiple nodes", function( t ) {
    t.plan( 2 );
    var first = document.createElement("div"),
        second = document.createElement("div");

    setText([first, second], "foo");

    t.equal(first.textContent, "foo");
    t.equal(second.textContent, "foo");
});
