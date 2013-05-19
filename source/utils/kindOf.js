define( function() {

	var _rKind = /^\[object (.*)\]$/,
	    _toString = Object.prototype.toString,
	    UNDEF;

	/**
	* Gets the "kind" of value. (e.g. "String", "Number", etc)
	*/
	function kindOf( value ) {
		if ( value === null ) {
			return "Null";
		} else if ( value === UNDEF ) {
			return "Undefined";
		} else {
			return _rKind.exec( _toString.call( value ) )[ 1 ];
		}
	}

	return kindOf;
} );