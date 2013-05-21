define( [

	"../utils/allNodes",
	"mout/lang/kindOf",
	"mout/object/forOwn"

], function( allNodes, kindOf, forOwn ) {

	return function( nodes, object, value ) {

		var temp;

		/*
		 * converts params to object if passed as key-value-pair of strings.
		 */

		if ( kindOf( object ) === "String" ) {
			temp = {};
			temp[ object ] = value;
			object = temp;
		}


		allNodes( nodes, function( node ) {

			forOwn( object, function( value, key ) {
				node.style[ key ] = value;
			} );

		} );

	};

} );