var test = require( "tape" );
var empty = require( "../../source/dom/empty" );

test("should empty a node", function( t ) {

    t.plan( 1 );

    var parent = document.createElement("div"),
        first = document.createElement("span"),
        second = document.createElement("span");

    parent.appendChild(first);
    parent.appendChild(second);

    empty(parent);

    t.equal(parent.childNodes.length, 0);

});

test("should empty multiple nodes", function( t ) {
    t.plan( 2 );

    var parentOne = document.createElement("div"),
        parentTwo = document.createElement("div"),
        first = document.createElement("span"),
        second = document.createElement("span"),
        third = document.createElement("span"),
        forth = document.createElement("span");

    parentOne.appendChild(first);
    parentOne.appendChild(second);
    parentTwo.appendChild(third);
    parentTwo.appendChild(forth);

    empty(parentOne, parentTwo);

    t.equal(parentOne.childNodes.length, 0);
    t.equal(parentTwo.childNodes.length, 0);
});
