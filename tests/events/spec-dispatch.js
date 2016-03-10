var test = require( "tape" );
var sinon = require( "sinon" );
var dispatch = require( "../../source/events/dispatch" );


test( "should fire event on element", function( t ) {

    t.plan( 2 );

    var handler = sinon.spy();
    var element = document.createElement( "div" );

    document.body.appendChild( element );

    element.addEventListener( "click", handler );

    dispatch( element, "click" );

    document.body.removeChild( element );

    t.ok( handler.called, true, "The event was triggered" );
    t.ok( handler.args.length, 1, "The handler was called with one argument" );

} );

test( "should fire event that is passed in", function( t ) {

    t.plan( 2 );

    var handler = sinon.spy();
    var element = document.createElement( "div" );

    var event;

    event = document.createEvent( "Event" );
    event.initEvent( "foo", true, true );

    document.body.appendChild( element );

    element.addEventListener( "foo", handler );

    dispatch( element, event );

    document.body.removeChild( element );

    t.ok( handler.called, true, "The event was triggered" );
    t.ok( handler.args[ 0 ], event, "The handler was called with the specific event" );

} );
