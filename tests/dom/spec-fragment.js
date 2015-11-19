var test = require( "tape" );
var fragment = require( "../../source/dom/fragment" );

test("should create empty DocumentFragment", function( t ) {
    t.plan( 2 );

    var f = fragment();
    t.equal(f.nodeType, Node.DOCUMENT_FRAGMENT_NODE);
    t.equal(f.childNodes.length, 0);
});

test("should add nodes", function( t ) {
    t.plan( 3 );

    var first = document.createElement("div"),
        second = document.createTextNode("Test"),
        f = fragment(first, second);

    t.equal(f.childNodes.length, 2);
    t.equal(f.firstChild, first);
    t.equal(f.lastChild, second);
});

test("should add nested arrays", function( t ) {
    t.plan( 4 );

    var one = document.createElement("div"),
        two = document.createElement("div"),
        three = document.createElement("div"),
        f = fragment(one, [two, [three]]);

    t.equal(f.childNodes.length, 3);
    t.equal(f.childNodes[0], one);
    t.equal(f.childNodes[1], two);
    t.equal(f.childNodes[2], three);
});
