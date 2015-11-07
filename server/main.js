var express = require( "express" );
var clone = require( "mout/lang/clone" );

var app = express();

app.get( "/jsonp/static", function( request, response ) {
	response.jsonp( {
		foo: "bar"
	} );
} );

app.get( "/jsonp/mirror", function( request, response ) {
	var params = clone( request.query );
	delete params.callback;

	response.jsonp( params );
});

app.get( "/resources/:name", function( request, response ) {

    var options = {
        root: __dirname + "/../tests/resources",
        dotfiles: "deny",
        headers: {
            "x-timestamp": Date.now(),
            "x-sent": true
        }
    };

    var fileName = request.params.name;

    response.sendFile( fileName, options, function( error ) {

        if ( error ) {
            response.status( error.status ).end();
        }

    } );
} );

app.get( "/", function( request, response ) {
    response.send( "<!DOCTYPE html><html><body><script type='text/javascript' src='bundle.js'></script></body></html>" );
} );

app.get( "/bundle.js", function( request, response ) {
    response.sendFile( __dirname + "/bundle.js" );
} );

app.listen( 9000 );

module.exports = app;

