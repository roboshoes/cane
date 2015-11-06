var test = require( "tape" );
var sinon = require( "sinon" );
var getJSON = require( "../../source/net/getJSON" );

test("should call success callback with JSON", function( t ) {
    t.plan( 1 );
    t.timeoutAfter( 10000 );

    getJSON("base/tests/resources/test.json", function(data) {
        t.deepEqual(data, { "foo": "bar", "test": [1, 2, 3], "boolean": false });
    });
});

test("should call error callback when resource can't be loaded", function( t ) {
    t.plan( 1 );
    t.timeoutAfter( 10000 );

    var success = sinon.spy();

    getJSON("base/tests/resources/wrong.json", success, function() {
        t.notOk(success.called);
    });
});

test("should call error callback when resource is not valid JSON", function( t ) {
    t.plan( 1 );
    t.timeoutAfter( 10000 );

    var success = sinon.spy();

    getJSON("base/tests/resources/invalid.json", success, function() {
        t.notOk(success.called);
    });
});
