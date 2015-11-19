var test = require( "tape" );
var prepend = require( "../../source/dom/prepend" );

test("should prepend nodes to parent", function( t ) {
    t.plan( 3 );

    var parent = document.createElement("div"),
        first = document.createElement("span"),
        last = document.createElement("span");

    parent.appendChild(last);
    prepend(parent, first);

    t.equal(parent.childNodes.length, 2);
    t.equal(parent.firstChild, first);
    t.equal(parent.lastChild, last);
});

test("should add multiple nodes", function( t ) {
    t.plan( 3 );

    var parent = document.createElement("div"),
        one = document.createElement("span"),
        two = document.createElement("span"),
        three = document.createElement("span");

    prepend(parent, one, [two, three]);

    var nodes = parent.childNodes;
    t.equal(nodes[0], one);
    t.equal(nodes[1], two);
    t.equal(nodes[2], three);
});
