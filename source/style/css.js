define( [

	"../utils/allNodes",
	"mout/lang/kindOf"

], function( allNodes, kindOf ) {

	return function( nodes, object, value ) {

		var key, temp;

		/*
		 * converts params to object if passed as key-value-pair of strings.
		 */

		if ( kindOf( object ) === "String" ) {
			temp = {};
			temp[ object ] = value;
			object = temp;
		}


		allNodes( nodes, function( node ) {

			for ( key in object ) {
				node.style[ key ] = object[ key ];
			}

		} );

	}

} );