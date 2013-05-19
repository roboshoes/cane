define( [

	"./kindOf"

], function( kindOf ) {

	return function( array, closure ) {

		var i, length;
		var kind = kindOf( array );

		if ( kind != "NodeList" && kind != "Array" ) {
			array = [ array ];
		}

		length = array.length;

		for ( i = 0; i < length; i++ ) {
			closure( array[ i ] );
		}

	}

} );