define(["cane/net/jsonp"], function(jsonp) {

    describe("net/jsonp()", function() {

        var url = window.location.protocol + "//" + window.location.hostname + ":9000/jsonp/";
        var mirrorURL = url + "mirror";
        var staticURL = url + "static";

        it("should call resource using jsonp", function(done) {
            jsonp(staticURL, function(data) {
                expect(data).to.eql({ "foo": "bar" });
                done();
            });
        });

        it("should send data", function(done) {
            var parameters = {
                foo: "complex string & characters like %^*",
                bar: "another value"
            };

            jsonp(mirrorURL, parameters, function(data) {
                expect(data).to.eql(parameters);
                done();
            });
        });

        it("should manage multiple requests parallel", function( done ) {

            var complete = [false, false, false];
            var content = [];

            function validate() {
                if (complete[0] && complete[1] && complete[2]) {

                    expect(content[0]).to.eql({ value: "one" });
                    expect(content[1]).to.eql({ value: "two" });
                    expect(content[2]).to.eql({ value: "three" });

                    done();
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

    });

});