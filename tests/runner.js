
// Setup Jasmine for browser
var env = jasmine.getEnv();
var reporter = new jasmine.HtmlReporter();

env.addReporter( reporter );

env.specFilter = function( spec ) {
    return reporter.specFilter( spec );
}

var options = {
    urlArgs: "cache=" + Date.now(),
    paths: {
        cane: "../source",
    }
};

var specs = [
    "spec/spec-style"
];


// Let's get the party started
requirejs( options, specs, function() {
    env.execute();
} );

