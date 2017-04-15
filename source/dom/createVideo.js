define( [
    "./create",
    "mout/array/map",
    "mout/string/lowerCase",
    "mout/lang/isString",
    "mout/lang/isArray"
], function(create, map, lowerCase, isString, isArray) {

    var types = {
        mp4: "video/mp4",
        ogg: "video/ogg",
        webm: "video/webm"
    };

    function getType(path) {
        var extension = lowerCase( path.split(".").pop() );
        return types[extension] || "";
    }

    function buildSource(path) {
        return create("source", { src: path, type: getType(path) });
    }

    function createVideo(sources, attributes) {
        if (isString(sources)) {
            sources = [sources];
        } else if ( !isArray(sources) ) {
            attributes = sources || {};
            sources = [];
        }

        var children = map(sources, buildSource);

        return create("video", attributes, children);
    }

    return createVideo;
});
