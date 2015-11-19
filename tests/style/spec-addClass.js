var test = require( "tape" );
var addClass = require( "../../source/style/addClass" );

test("should add a class to an element", function( t ) {
    t.plan( 1 );

    var node = document.createElement("div");

    addClass(node, "newClass");

    t.equal(node.className, "newClass");
});

test("should add multiple classes to an element", function( t ) {
    t.plan( 1 );

    var node = document.createElement("div");

    addClass(node, "one two");

    t.equal(node.className, "one two");
});

test("should merge classes with existing classes", function( t ) {
    t.plan( 1 );

    var node = document.createElement("div");
    node.className = "one two";
    addClass(node, "one three");

    t.equal(node.className, "one two three");
});

test("should add classes to array of nodes", function( t ) {
    t.plan( 2 );

    var node1 = document.createElement("span"),
        node2 = document.createElement("h1");

    addClass([node1, node2], "one two");

    t.equal(node1.className, "one two");
    t.equal(node2.className, "one two");
});

test("should add classes to NodeList", function( t ) {
    t.plan( 2 );

    var body = document.body,
        node1 = document.createElement("h1"),
        node2 = document.createElement("h1");

    body.appendChild(node1);
    body.appendChild(node2);

    var list = document.getElementsByTagName("h1");
    addClass(list, "one two");

    t.equal(node1.className, "one two");
    t.equal(node2.className, "one two");

    body.removeChild(node1);
    body.removeChild(node2);
});

