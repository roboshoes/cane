module.exports = function( grunt ) {

    grunt.initConfig( {
        jshint: {
            options: {
                camelcase: true,
                curly: true,
                eqeqeq: true,
                forin: true,
                indent: 4,
                latedef: true,
                newcap: true,
                noarg: true,
                undef: true,
                unused: true,
                trailing: true,
                maxlen: 120,
                quotmark: "double",
                node: true,
                browser: true
            },

            all: {
                files: {
                    src: [
                        "source/**/*.js",
                        "server/**/*.js",
                        "tests/**/*.js",
                        "karma.config.js",
                        "Gruntfile.js"
                    ]
                }
            }
        },

        watch: {
            source: {
                files: [ "source/**/*.js" ],
                tasks: [ "jshint", "karma:dev:run" ]
            },

            server: {
                files: [ "server/**/*.js" ],
                tasks: [ "jshint" ]
            },

            tests: {
                files: [ "tests/**/*.js" ],
                tasks: [ "jshint" ]
            },

            grunt: {
                files: [ "Gruntfile.js" ],
                tasks: [ "jshint" ]
            },

            docs: {
                files: [ "docs/**/*.md" ],
                tasks: [ "docs" ]
            }
        },

        mdoc: {
            options: {
                baseTitle: "Cane",
                indexContentPath: "README.md"
            },
            docs: {
                files: {
                    "docs_html": "docs"
                }
            }
        },

        karma: {
            test: {
                configFile: "karma.conf.js",
                singleRun: true,
                browsers: ( process.env.KARMA_BROWSERS || "Chrome,PhantomJS" ).split( "," )
            }
        }
    } );

    [
        "grunt-contrib-jshint",
        "grunt-contrib-watch",
        "grunt-karma"
    ].forEach(grunt.loadNpmTasks);

    grunt.registerTask( "docs", [ "mdoc" ] );

    grunt.registerMultiTask( "mdoc", function() {
        var opts = this.options(),
            mdoc = require( "mdoc" );

        this.files.forEach(function(file) {
            opts.inputDir = file.src[0];
            opts.outputDir = file.dest;

            mdoc.run(opts);
        });
    });

};