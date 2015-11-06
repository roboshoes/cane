var test = require( "tape" );
var children = require( "../../source/dom/children" );

test("should return an array of only nodes", function( t ) {
    t.plan( 4 );

    var parent = document.createElement("div");
    parent.innerHTML = "<div>First DIV</div><div>\n\n </div>  <div>Third DIV</div>\n\n <!-- comment -->";

    var nodes = children(parent);

    t.equal(nodes.length, 3);
    t.equal(nodes[0].nodeType, 1);
    t.equal(nodes[1].nodeType, 1);
    t.equal(nodes[2].nodeType, 1);
});

test("should return the children of several nodes", function( t ) {
    t.plan( 1 );

    var parentOne = document.createElement("div");
    var parentTwo = document.createElement("div");

    parentOne.innerHTML = "<div>First DIV</div><div>\n\n   Second DIV</div>  <div>Third DIV</div>\n\n    ";
    parentTwo.innerHTML = "<span>foo</span>   \n  <span>bar</span>";

    var nodes = children( [parentOne, parentTwo] );

    t.equal(nodes.length, 5);
});

