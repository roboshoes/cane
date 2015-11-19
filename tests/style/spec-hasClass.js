var test = require( "tape" );
var hasClass = require( "../../source/style/hasClass" );

test("should check whether a node has a class", function( t ) {
    t.plan( 2 );

    var node = document.createElement("div");
    node.className = "foo";

    t.ok( hasClass(node, "foo") );
    t.notOk( hasClass(node, "bar") );
});

test("should check for multiple classes", function( t ) {
    t.plan( 2 );

    var first = document.createElement("div");
    var second = document.createElement("div");

    first.className = "foo bar woot";
    second.className = "one two three";

    t.ok( hasClass(first, "bar woot foo") );
    t.notOk( hasClass(second, "five three") );
});

test("should check on multiple elements", function( t ) {
    t.plan( 2 );

    var body = document.body,
        node1 = document.createElement("h1"),
        node2 = document.createElement("h1");
    node1.className = "one two three";
    node2.className = "four two three five";
    body.appendChild(node1);
    body.appendChild(node2);

    var nodes = document.getElementsByTagName("h1");

    t.ok( hasClass(nodes, "two three") );
    t.notOk( hasClass(nodes, "two five") );

    body.removeChild(node1);
    body.removeChild(node2);
});
