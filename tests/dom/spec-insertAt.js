var test = require( "tape" );
var insertAt = require( "../../source/dom/insertAt" );

test("should insert node at index", function( t ) {
    t.plan( 1 );

    var parent = document.createElement("div"),
        first = document.createElement("span"),
        second = document.createElement("span"),
        third = document.createElement("span"),
        div = document.createElement("div");

    parent.appendChild(first);
    parent.appendChild(second);
    parent.appendChild(third);

    insertAt(parent, div, 1);

    t.equal(parent.children[1], div);
});

test("should append if index is higher then children", function( t ) {
    t.plan( 1 );

    var parent = document.createElement("div"),
        first = document.createElement("span"),
        second = document.createElement("span"),
        third = document.createElement("span"),
        div = document.createElement("div");

    parent.appendChild(first);
    parent.appendChild(second);
    parent.appendChild(third);

    insertAt(parent, div, 10);

    t.equal(parent.children[3], div);
});

test("should determin index from the end of array if index is negative", function( t ) {
    t.plan( 6 );

    var parent = document.createElement("div"),
        first = document.createElement("span"),
        second = document.createElement("span"),
        third = document.createElement("span"),
        foo = document.createElement("div");


    parent.appendChild(first);
    parent.appendChild(second);
    parent.appendChild(third);

    insertAt(parent, foo, -1);

    t.equal(parent.children[0], first);
    t.equal(parent.children[1], second);
    t.equal(parent.children[2], foo);
    t.equal(parent.children[3], third);

    parent.removeChild(foo);

    insertAt(parent, foo, -2);

    t.equal(parent.children[1], foo);

    parent.removeChild(foo);

    insertAt(parent, foo, -7);

    t.equal(parent.children[0], foo);
});

test("should insert multiple nodes", function( t ) {
    t.plan( 2 );

    var parent = document.createElement("div"),
        first = document.createElement("span"),
        second = document.createElement("span"),
        third = document.createElement("span"),
        foo = document.createElement("div"),
        bar = document.createElement("div");

    parent.appendChild(first);
    parent.appendChild(second);
    parent.appendChild(third);

    insertAt(parent, [foo, bar], 1);

    t.equal(parent.children[1], foo);
    t.equal(parent.children[2], bar);
});
