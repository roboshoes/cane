define([
    "../dom/create",
    "../dom/append",
    "../dom/remove",
    "mout/queryString/encode",
    "mout/object/merge",
    "mout/array/remove"
], function(create, append, domRemove, encode, merge, arrayRemove) {

    var usedNames = [];

    function generateName() {
        var timestamp = Date.now();
        var name = "jsonp" + timestamp;

        while (usedNames.indexOf(name) > -1) {
            name = "jsonp" + (++timestamp);
        }

        usedNames.push(name);

        return name;
    }

    function jsonp(url, parameters, callback) {

        if (typeof parameters === "function") {
            callback = parameters;
            parameters = {};
        }

        var callbackName = generateName();
        var options = merge(parameters, { callback: callbackName });
        var script = create("script", { src: url + encode(options) });

        window[callbackName] = function(data) {
            delete window[callbackName];

            arrayRemove(usedNames, callbackName);
            domRemove(script);

            callback(data);
        };

        append(document.head, script);
    }

    return jsonp;

} );