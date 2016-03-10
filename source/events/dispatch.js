var allNodes = require( "../utils/allNodes" );

function dispatch( nodes, eventName ) {

    allNodes( nodes, function( node ) {

        var event;

        if ( typeof eventName === "string" ) {

            event = document.createEvent( "Event" );
            event.initEvent( eventName, true, true );

        } else {

            event = eventName;

        }

        node.dispatchEvent( event );

    } );
}

module.exports = dispatch;