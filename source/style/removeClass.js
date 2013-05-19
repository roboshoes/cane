define( [

	"../utils/allNodes"

], function( allNodes ) {

	return function( nodes, string ) {

		var className, names, index;
		var classes = string.split( " " );
		var i, length = classes.length;

		allNodes( nodes, function( node ) {

			className = node.className;

			if ( className === "" ) names = [];
			else names = node.className.split( " " );

			for ( i = 0; i < length; i++ ) {
				index = names.indexOf( classes[ i ] );

				if ( index > -1 ) {
					names.splice( index, 1 );
				}
			}

			node.className = names.join( " " );

		} );

	}

} );