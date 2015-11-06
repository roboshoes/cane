var test = require( "tape" );
var append = require( "../../source/dom/append" );

test( "should append nodes to the parent element", function( t ) {
    t.plan( 3 );

    var parent = document.createElement("div");
    var first = document.createElement("span");
    var last = document.createElement("span");

    parent.appendChild( first );
    append( parent, last );

    t.isEqual( parent.childNodes.length, 2 );
    t.isEqual( parent.firstChild, first );
    t.isEqual( parent.lastChild, last );
});

test( "should append multiple nodes", function( t ) {
    t.plan( 4 );

    var parent = document.createElement( "div" );
    var one = document.createElement( "span" );
    var two = document.createElement( "span" );
    var three = document.createElement( "span" );

    append( parent, one, [ two, three ] );

    t.isEqual( parent.childNodes.length, 3 );
    t.isEqual( parent.childNodes[ 0 ], one );
    t.isEqual( parent.childNodes[ 1 ], two );
    t.isEqual( parent.childNodes[ 2 ], three );
});


