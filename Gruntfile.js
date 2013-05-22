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
                maxlen: 80
            },

            source: {
                options: {
                    browser: true,
                    globals: { require: false, define: false }
                },
                files: {
                    src: ['source/**/*.js']
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
                        it: false
                    }
                },
                files: {
                    src: ['tests/**/*.js', '!tests/runner.js']
                }
            },

            grunt: {
                options: {
                    node: true
                },
                files: {
                    src: ['Gruntfile.js']
                }
            }
        },

        karma: {
            test: {
                configFile: 'karma.config.js',
                singleRun: true,
                browsers:
                    (process.env.KARMA_BROWSERS || "Chrome,Firefox").split(",")
            },

            dev: {
                configFile: 'karma.config.js',
                background: true
            }
        },

        watch: {
            source: {
                files: ['source/**/*.js'],
                tasks: ['jshint:source', 'karma:dev:run']
            },

            tests: {
                files: ['tests/**/*.js', '!tests/runner.js'],
                tasks: ['jshint:tests', 'karma:dev:run']
            },

            grunt: {
                files: ['Gruntfile.js'],
                tasks: ['jshint:grunt']
            }
        }
    });

    [
        'grunt-contrib-jshint',
        'grunt-contrib-watch',
        'grunt-karma'
    ].forEach(grunt.loadNpmTasks);

    grunt.registerTask('default', ['karma:dev', 'watch']);
    grunt.registerTask('test', ['jshint', 'karma:test']);

};