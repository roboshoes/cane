module.exports = function(grunt) {

    grunt.initConfig({
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
                maxlen: 80,
                quotmark: "double"
            },

            source: {
                options: {
                    browser: true,
                    globals: { require: false, define: false }
                },
                files: {
                    src: ["source/**/*.js"]
                }
            },

            tests: {
                options: {
                    browser: true,
                    maxlen: 120,
                    globals: {
                        require: false,
                        define: false,
                        expect: false,
                        describe: false,
                        it: false,
                        beforeEach: false,
                        afterEach: false,
                        runs: false,
                        waitsFor: false,
                        sinon: false
                    }
                },
                files: {
                    src: ["tests/**/*.js", "karma.config.js"]
                }
            },

            grunt: {
                options: {
                    node: true
                },
                files: {
                    src: ["Gruntfile.js"]
                }
            }
        },

        karma: {
            test: {
                configFile: "karma.config.js",
                singleRun: true,
                browsers:
                    (process.env.KARMA_BROWSERS || "Chrome,Firefox").split(",")
            },

            dev: {
                configFile: "karma.config.js",
                background: true
            }
        },

        watch: {
            source: {
                files: ["source/**/*.js"],
                tasks: ["jshint:source", "karma:dev:run"]
            },

            tests: {
                files: ["tests/**/*.js", "!tests/runner.js"],
                tasks: ["jshint:tests", "karma:dev:run"]
            },

            grunt: {
                files: ["Gruntfile.js"],
                tasks: ["jshint:grunt"]
            },

            docs: {
                files: ["docs/**/*.md"],
                tasks: ["docs"]
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
        }
    });

    [
        "grunt-contrib-jshint",
        "grunt-contrib-watch",
        "grunt-karma"
    ].forEach(grunt.loadNpmTasks);

    grunt.registerTask("default", ["karma:dev", "watch"]);
    grunt.registerTask("docs", ["mdoc"]);
    grunt.registerTask("test", ["jshint", "karma:test"]);

    grunt.registerMultiTask("mdoc", function() {
        var opts = this.options(),
            mdoc = require("mdoc");

        this.files.forEach(function(file) {
            opts.inputDir = file.src[0];
            opts.outputDir = file.dest;

            mdoc.run(opts);
        });
    });

};