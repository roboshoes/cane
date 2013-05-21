define( [ "cane/style/removeClass" ], function( removeClass ) {

	describe( "style/removeClass()", function() {

		it( "it should remove one or more classes from an element", function () {

			var node = document.createElement( "div" );
			node.className = "one two three four";

			removeClass( node, "one" );

			expect( node.className ).toBe( "two three four" );

			removeClass( node, "two four" );

			expect( node.className ).toBe( "three" );

			removeClass( node, "one" );

			expect( node.className ).toBe( "three" );

		} );

		it( "it should remove classes to array of nodes", function() {

			var node1 = document.createElement( "span" );
			node1.className = "one two three";

			var node2 = document.createElement( "h1" );
			node2.className = "four two three five";

			var array = [ node1, node2 ];

			removeClass( array, "three two" );

			expect( node1.className ).toBe( "one" );
			expect( node2.className ).toBe( "four five" );

		} );

		it( "it should add classes to NodeList of nodes", function() {

			var node1 = document.createElement( "h1" );
			node1.className = "one two three";

			var node2 = document.createElement( "h1" );
			node2.className = "four two three five";

			document.body.appendChild( node1 );
			document.body.appendChild( node2 );

			var nodes = document.getElementsByTagName( "h1" );

			removeClass( nodes, "three two" );

			expect( node1.className ).toBe( "one" );
			expect( node2.className ).toBe( "four five" );

			document.body.removeChild( node1 );
			document.body.removeChild( node2 );

		} );


	} );

} );