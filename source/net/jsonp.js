define([
    "../dom/create",
    "../dom/append",
    "../dom/remove",
    "mout/queryString/encode",
    "mout/object/merge"
], function(create, append, remove, encode, merge) {

    var usedName = [];

    function generateName() {
        var timestamp = Date.now();
        var name = "jsonp" + timestamp;

        while (usedName.indexOf(name) > -1) {
            name = "jsonp" + (++timestamp);
        }

        usedName.push(name);

        return name;
    }

    function freeName(name) {
        var index = usedName.indexOf( name );

        if ( index > -1 ) {
            usedName.splice(index, 1);
        }
    }

    function jsonp(url, callback, parameters) {

        parameters = parameters || {};

        var callbackName = generateName();
        var options = merge(parameters, { callback: callbackName });
        var script = create("script", { src: url + encode(options) });

        window[callbackName] = function(data) {
            delete window[callbackName];

            freeName(callbackName);
            remove(script);

            callback(data);
        };

        append(document.head, script);
    }

    return jsonp;

} );