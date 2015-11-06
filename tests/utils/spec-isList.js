var test = require( "tape" );
var isList = require( "../../source/utils/isList" );

test("should return true for NodeList", function( t ) {
    t.plan( 1 );
    var list = document.getElementsByTagName("div");
    t.ok(isList(list));
});

test("should return true for array", function( t ) {
    t.plan( 1 );
    t.ok(isList([]));
});

test("should return true for arguments", function( t ) {
    t.plan( 1 );
    t.ok(isList(arguments));
});

test("should return false for Node", function( t ) {
    t.plan( 1 );
    var element = document.createElement("div");
    t.notOk(isList(element));
});

test("should return false for object", function( t ) {
    t.plan( 1 );
    t.notOk(isList({}));
});

test("should return false for null", function( t ) {
    t.plan( 1 );
    t.notOk(isList(null));
});
