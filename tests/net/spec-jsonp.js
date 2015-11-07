var test = require( "tape" );
var jsonp = require( "../../source/net/jsonp" );

var url = "/jsonp/";
var mirrorURL = url + "mirror";
var staticURL = url + "static";

test("should call resource using jsonp", function( t ) {
    t.plan( 1 );
    t.timeoutAfter( 10000 );

    jsonp(staticURL, function(data) {
        t.deepEqual(data, { "foo": "bar" });
    });
});

test("should send data", function( t ) {
    t.plan( 1 );
    t.timeoutAfter( 10000 );

    var parameters = {
        foo: "complex string & characters like %^*",
        bar: "another value"
    };

    jsonp(mirrorURL, parameters, function(data) {
        t.deepEqual(data, parameters);
    });
});

test("should manage multiple requests parallel", function( t ) {
    t.plan( 3 );
    t.timeoutAfter( 10000 );

    var complete = [false, false, false];
    var content = [];

    function validate() {
        if (complete[0] && complete[1] && complete[2]) {

            t.deepEqual(content[0], { value: "one" });
            t.deepEqual(content[1], { value: "two" });
            t.deepEqual(content[2], { value: "three" });

        }
    }

    function onComplete(index) {
        return function(data) {
            complete[index] = true;
            content[index] = data;
            validate();
        };
    }

    jsonp(mirrorURL, { value: "one" }, onComplete(0) );
    jsonp(mirrorURL, { value: "two" }, onComplete(1) );
    jsonp(mirrorURL, { value: "three" }, onComplete(2) );
});
