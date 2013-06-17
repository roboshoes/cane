(function() {
    /*jshint sub: true */

    var karma = window["__karma__"],
        tests = Object.keys(karma.files).filter(function(f) {
            return (/\/tests\//).test(f) &&
                  !(/\/tests\/runner.js/.test(f)) &&
                  !(/\/tests\/resources/).test(f);
        });

    require({
        // Karma serves files from /base
        baseUrl: "/base",

        paths: {
            "mout": "node_modules/mout/src",
            "cane": "source"
        }
    }, tests, karma.start);

}());