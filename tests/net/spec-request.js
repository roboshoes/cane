var test = require( "tape" );
var sinon = require( "sinon" );
var request = require( "../../source/net/request" );

test("should trigger completed and success", function( t ) {
    t.plan( 3 );
    t.timeoutAfter( 10000 );

    request({
        url: "base/tests/resources/test.txt",
        completed: function(responseDate, status) {
            t.equal(responseDate, "Successfully loaded");
            t.equal(status, 200);
        },
        success: function() {
            t.equal( true, true );
        }
    });
});

test("should trigger error", function( t ) {
    t.plan( 1 );

    request({
        url: "base/tests/resources/wrong.txt",
        error: function(responseData, status) {
            t.equal(status, 404);
        }
    });
});

test("request methods and parameters", function(t) {
    t.plan( 4 );

    var server;

    function setup() {
        server = sinon.fakeServer.create();
    }

    function teardown() {
        server.restore();
    }

    t.test("should use POST method", function(st) {
        st.plan( 2 );

        setup();

        request({
            method: "POST",
            url: "/test"
        });

        var xhr = server.requests[0];
        st.eqaul(xhr.method, "POST");
        st.equal(xhr.url, "/test");

        teardown();
    });

    t.test("should use PUT method", function( st ) {
        setup();

        st.plan( 2 );

        request({
            method: "PUT",
            url: "/test"
        });

        var xhr = server.requests[0];
        st.equal(xhr.method, "PUT");
        st.equal(xhr.url, "/test");

        teardown();
    });

    t.test("should add header parameters", function( st ) {
        setup();

        st.plan( 1 );

        var headers = {
            Accept: "text/plain"
        };

        request({
            url: "base/test/resources/test.txt",
            headers: headers
        });

        var xhr = server.requests[0];
        st.deepEqual(xhr.requestHeaders, headers);

        teardown();
    });

    t.test("should send data", function( st ) {
        var data = "test data";

        st.plan( 1 );

        request({
            method: "POST",
            url: "/test",
            data: data
        });

        var xhr = server.requests[0];
        st.equal(xhr.requestBody, data);
    });

});

test("response codes", function( t ) {
    var server;

    t.plan( 4 );

    function setup() {
        server = sinon.fakeServer.create();
    }

    function teardown() {
        server.restore();
    }

    t.test("should call success on 200 response", function( st ) {
        st.plan( 1 );

        setup();

        var success = sinon.spy();

        request({
            url: "/test",
            success: success
        });

        var xhr = server.requests[0];
        xhr.respond(200, {}, "");
        st.ok(success.calledWith("", 200));

        teardown();
    });

    t.test("should call success on 304 response", function( st ) {
        setup();

        st.plan( 1 );

        var success = sinon.spy();

        request({
            url: "/test",
            success: success
        });

        var xhr = server.requests[0];
        xhr.respond(304, {}, "");
        st.ok(success.calledWith("", 304));

        teardown();
    });

    t.test("should call error on 400 response", function( st ) {
        st.plan( 1 );

        setup();

        var error = sinon.spy();

        request({
            url: "/test",
            error: error
        });

        var xhr = server.requests[0];
        xhr.respond(400, {}, "");
        st.ok(error.calledWith("", 400));

        teardown();
    });

    t.test("should call error on 500 response", function( st ) {
        st.plan( 1 );

        setup();

        var error = sinon.spy();

        request({
            url: "/test",
            error: error
        });

        var xhr = server.requests[0];
        xhr.respond(500, {}, "");
        st.ok(error.calledWith("", 500));

        teardown();
    });

});


