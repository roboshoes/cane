var express = require( "express" );
var cors = require( "cors" );
var clone = require( "mout/lang/clone" );

var app = express();

app.use( cors() );

app.get( "/jsonp/static", function( request, response ) {
	response.jsonp( {
		foo: "bar"
	} );
} );

app.get( "/jsonp/mirror", function( request, response ) {
	var params = clone( request.query );
	delete params.callback;

	response.jsonp( params );
} );

app.use( "/resources", express.static( "tests/resources" ) );

app.get( "/", function( request, response ) {
    response.send( "<!DOCTYPE html><html><body><script src='bundle.js'></script></body></html>" );
} );

app.use( express.static( "tests" ) );

app.listen( 9000 );
