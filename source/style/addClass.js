define( [

	"../utils/allNodes"

], function( allNodes ) {

	return function( nodes, string ) {

		var className, names;
		var classesToAdd = string.split( " " );
		var i, length = classesToAdd.length;

		allNodes( nodes, function( node ) {

			className = node.className;

			if ( className === "" ) names = [];
			else names = node.className.split( " " );

			for ( i = 0; i < length; i++ ) {

				currentClass = classesToAdd[ i ];

				if ( names.indexOf( currentClass ) < 0 ) {
					names.push( currentClass );
				}

			}

			node.className = names.join( " " );

		} );

	}

} );