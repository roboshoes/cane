module.exports = function( config ) {
    config.set( {
        plugins: [
            require( "karma-browserify" ),
            require( "karma-tap" ),
            require( "karma-chrome-launcher" ),
            require( "karma-firefox-launcher" ),
            require( "karma-phantomjs-launcher" ),
            require( "karma-coverage" )
        ],

        basePath: "",
        frameworks: [ "browserify", "tap" ],
        files: [ "tests/**/*.js" ],

        preprocessors: {
            "tests/**/*.js": [ "browserify" ]
        },

        browserify: {
            debug: true
        },

        reporters: [
            "dots",
            "coverage"
        ],

        coverageReporter: {
            type: "text",
            dir: "coverage/"
        },

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: [ "Chrome", "PhantomJS", "Firefox" ],
        singleRun: false
    } );
};