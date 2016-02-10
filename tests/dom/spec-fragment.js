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

test("should create fragment from string", function( t ) {
    t.plan( 6 );

    var html =
        "<div>" +
            "<span id='some-id'>foo</span>" +
            "<span id='other-id'>foo</span>" +
        "</div>" +
        "some text" +
        "<h1 class='' data-attribute='data'>Title</h1>";

    var f = fragment.fromString(html);

    t.equal(f.childNodes.length, 3);
    t.equal(f.childNodes[0].nodeType, 1);
    t.equal(f.childNodes[0].firstChild.innerHTML, "foo");
    t.equal(f.childNodes[0].firstChild.getAttribute("id"), "some-id");
    t.equal(f.childNodes[0].childNodes.length, 2);
    t.equal(f.childNodes[1].nodeType, 3);

});
