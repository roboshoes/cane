var test = require( "tape" );
var isNode = require( "../../source/utils/isNode" );


test("should return true for DOM elements", function( t ) {
    t.plan( 1 );
    var element = document.createElement("div");
    t.ok(isNode(element));
});

test("should return true for text nodes", function( t ) {
    t.plan( 1 );
    var node = document.createTextNode("test");
    t.ok(isNode(node));
});

test("should return true for document fragments", function( t ) {
    t.plan( 1 );
    var node = document.createDocumentFragment();
    t.ok(isNode(node));
});

test("should return false for strings", function( t ) {
    t.plan( 1 );
    t.notOk(isNode("<p>"));
});

test("should return false for normal object", function( t ) {
    t.plan( 1 );
    t.notOk(isNode({}));
});

test("should return false for RegExp", function( t ) {
    t.plan( 1 );
    t.notOk(isNode(/test/));
});

test("should return false for null", function( t ) {
    t.plan( 1 );
    t.notOk(isNode(null));
});
