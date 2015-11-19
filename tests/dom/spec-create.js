var test = require( "tape" );
var create = require( "../../source/dom/create" );

test("should create element with tag name", function( t ) {
    t.plan( 2 );

    var el = create("div");

    t.equal(el.nodeType, Node.ELEMENT_NODE);
    t.equal(el.tagName, "DIV");
});

test("should set attributes on element", function( t ) {
    t.plan( 2 );

    var el = create("div", { "class": "test", "data-test": "value" });

    t.equal(el.className, "test");
    t.equal(el.getAttribute("data-test"), "value");
});

test("should add child nodes", function( t ) {
    t.plan( 3 );

    var one = document.createElement("span"),
        two = document.createElement("span"),
        el = create("div", one, two);

    var nodes = el.childNodes;
    t.equal(nodes.length, 2);
    t.equal(nodes[0], one);
    t.equal(nodes[1], two);
});

test("should add array of child nodes", function( t ) {
    t.plan( 4 );

    var one = document.createElement("span"),
        two = document.createElement("span"),
        three = document.createElement("span"),
        el = create("div", [one, two], three);

    var nodes = el.childNodes;
    t.equal(nodes.length, 3);
    t.equal(nodes[0], one);
    t.equal(nodes[1], two);
    t.equal(nodes[2], three);
});

test("should set attributes and add child nodes", function( t ) {
    t.plan( 4 );

    var one = document.createElement("span"),
        two = document.createElement("span"),
        el = create("div", { "class": "test" }, one, two);

    t.equal(el.className, "test");

    var nodes = el.childNodes;
    t.equal(nodes.length, 2);
    t.equal(nodes[0], one);
    t.equal(nodes[1], two);
});

test("should set text", function( t ) {
    t.plan( 1 );

    var text = "test <span>test</span>",
        el = create("div", text);

    t.equal(el.textContent, text);
});

test("should set attributes and text", function( t ) {
    t.plan( 2 );

    var text = "test content",
        el = create("div", { "class": "test" }, text);

    t.equal(el.className, "test");
    t.equal(el.textContent, text);
});

