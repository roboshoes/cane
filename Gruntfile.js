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

            server: {
                options: {
                    node: true
                },
                files: {
                    src: ["server/**/*.js"]
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

        watch: {
            source: {
                files: ["source/**/*.js"],
                tasks: ["jshint:source", "karma:dev:run"]
            },

            server: {
                files: ["server/**/*.js"],
                tasks: ["jshint:server"]
            },

            tests: {
                files: ["tests/**/*.js", "!tests/runner.js"],
                tasks: ["jshint:tests"]
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
    ].forEach(grunt.loadNpmTasks);

    grunt.registerTask("docs", ["mdoc"]);
    grunt.registerTask("test", ["jshint"]);

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