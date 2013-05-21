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
                    src: ['tests/spec/**/*.js']
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
        }
    });

    [
        'grunt-contrib-jshint'
    ].forEach(grunt.loadNpmTasks);

    grunt.registerTask('default', ['jshint']);

};