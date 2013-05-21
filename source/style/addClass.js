define( [

	"../utils/allNodes"

], function( allNodes ) {

	return function( nodes, string ) {

		var className, names;
		var classesToAdd = string.split( " " );
		var i, length = classesToAdd.length;
		var currentClass;

		allNodes( nodes, function( node ) {

			className = node.className;

			names = ( className === "" ) ? [] : node.className.split( " " );

			for ( i = 0; i < length; i++ ) {

				currentClass = classesToAdd[ i ];

				if ( names.indexOf( currentClass ) < 0 ) {
					names.push( currentClass );
				}

			}

			node.className = names.join( " " );

		} );

	};

} );