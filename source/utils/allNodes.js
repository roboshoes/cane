define( [

    "mout/lang/kindOf"

], function( kindOf ) {

    return function( array, closure ) {

        var kind = kindOf( array );

        if ( kind !== "NodeList" && kind !== "Array" &&
             kind !== "HTMLCollection" ) {

            array = [ array ];
        }

        var length = array.length;

        for ( var i = 0; i < length; i++ ) {
            closure( array[ i ] );
        }

    };

} );