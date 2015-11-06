var test = require( "tape" );
var remove = require( "../../source/dom/remove" );

test("should remove node from parent node", function( t ) {
    t.plan( 2 );

    var parent = document.createElement("div"),
        childOne = document.createElement("span"),
        childTwo = document.createElement("span");

    parent.appendChild(childOne);
    parent.appendChild(childTwo);

    remove(childOne);

    t.equal(parent.children.length, 1);
    t.equal(parent.firstChild, childTwo);
});

test("should remove multiple nodes", function( t ) {
    t.plan( 1 );

    var parent = document.createElement("div"),
        children = [
            document.createElement("span"),
            document.createElement("span"),
            document.createElement("span")
        ];
    parent.appendChild(children[0]);
    parent.appendChild(children[1]);
    parent.appendChild(children[2]);

    remove(children[0], [children[1], children[2]]);

    t.equal(parent.children.length, 0);
});

test("should remove text nodes", function( t ) {
    t.plan( 1 );

    var parent = document.createElement("div"),
        text = document.createTextNode("test");
    parent.appendChild(text);

    remove(text);

    t.equal(parent.children.length, 0);
});

test("should ignore nodes that do not have a parent", function( t ) {
    t.plan( 1 );

    var node = document.createElement("div"),
        text = document.createTextNode("Hello World!");

    t.doesNotThrow( function() {
        remove(node, text);
    });
});
