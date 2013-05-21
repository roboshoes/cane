(function() {

    var karma = window.__karma__,
        tests = Object.keys(karma.files).filter(function(f) {
            return /\/tests\/spec\//.test(f);
        });

    require({
        // Karma serves files from /base
        baseUrl: "/base",

        paths: {
            "cane": "source",
            "mout": "libs/mout"
        }
    }, tests, karma.start);

}());