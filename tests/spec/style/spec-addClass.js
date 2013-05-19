define( [ "cane/style/addClass" ], function ( addClass ) {

	describe( "style/addClass()", function () {

		it( "it should add one ore more classes to an element", function () {

			var node = document.createElement( "div" );

			addClass( node, "one" );

			expect( node.className ).toBe( "one" );

			addClass( node, "two three" );

			expect( node.className ).toBe( "one two three" );

			addClass( node, "one" );
			addClass( node, "four" );

			expect( node.className ).toBe( "one two three four" );

		} );

		it( "it should add classes to array of nodes", function() {

			var node1 = document.createElement( "span" );
			var node2 = document.createElement( "h1" );
			var array = [ node1, node2 ];

			addClass( array, "one two" );

			expect( node1.className ).toBe( "one two" );
			expect( node2.className ).toBe( "one two" );

		} );

		it( "it should add classes to NodeList of nodes", function() {

			var node1 = document.createElement( "h1" );
			var node2 = document.createElement( "h1" );

			document.body.appendChild( node1 );
			document.body.appendChild( node2 );

			var nodes = document.getElementsByTagName( "h1" );

			addClass( nodes, "one two" );

			expect( node1.className ).toBe( "one two" );
			expect( node2.className ).toBe( "one two" );

			document.body.removeChild( node1 );
			document.body.removeChild( node2 );

		} );

	} );

} );