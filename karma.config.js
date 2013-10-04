// Karma configuration
/*jshint undef: false */

basePath = ".";

files = [
    MOCHA,
    MOCHA_ADAPTER,
    REQUIRE,
    REQUIRE_ADAPTER,
    "node_modules/sinon/pkg/sinon.js",
    "node_modules/expect.js/expect.js",
    "tests/runner.js",
    { pattern: "source/**/*.js", included: false },
    { pattern: "tests/**/*.js", included: false },
    { pattern: "tests/resources/**", included: false },
    { pattern: "node_modules/mout/src/**/*.js", included: false }
];

reporters = ["progress"];

// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;

// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;
