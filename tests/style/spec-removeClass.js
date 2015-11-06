var test = require( "tape" );
var removeClass = require( "../../source/style/removeClass" );


test("should remove a class from an element", function( t ) {
    t.plan( 1 );

    var node = document.createElement("div");
    node.className = "one two";

    removeClass(node, "one");

    t.equal(node.className, "two");
});

test("should remove multiple classes from an element", function( t ) {
    t.plan( 1 );

    var node = document.createElement("div");
    node.className = "one two three";

    removeClass(node, "one three");

    t.equal(node.className, "two");
});

test("should remove classes to array of nodes", function( t ) {
    t.plan( 2 );

    var node1 = document.createElement("span"),
        node2 = document.createElement("h1");
    node1.className = "one two three";
    node2.className = "four two three five";

    removeClass([node1, node2], "three two");

    t.equal(node1.className, "one");
    t.equal(node2.className, "four five");
});

test("should add classes to NodeList", function( t ) {
    t.plan( 2 );

    var body = document.body,
        node1 = document.createElement("h1"),
        node2 = document.createElement("h1");
    node1.className = "one two three";
    node2.className = "four two three five";
    body.appendChild(node1);
    body.appendChild(node2);

    var nodes = document.getElementsByTagName("h1");

    removeClass(nodes, "three two");

    t.equal(node1.className, "one");
    t.equal(node2.className, "four five");

    body.removeChild(node1);
    body.removeChild(node2);
});
