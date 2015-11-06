var test = require( "tape" );
var matches = require( "../../source/dom/matches" );

test("should return true if node matches selector", function( t ) {
    t.plan( 1 );

    var node = document.createElement("div");
    node.className = "test";

    t.equal( matches("div.test", node), true);
});

test("should return false if node does not match selector", function( t ) {
    t.plan( 1 );

    var node = document.createElement("div");

    t.equal( matches(".bar", node), false);
});

test("should return true if all nodes match", function( t ) {
    t.plan( 1 );

    var first = document.createElement("div"),
        second = document.createElement("div");

    t.equal( matches("div", first, second), true);
});

test("should return false if any of the nodes do not match", function( t ) {
    t.plan( 1 );

    var first = document.createElement("div"),
        second = document.createElement("div");
    first.className = "foo";

    t.equal( matches(".foo", first, second), false);
});
