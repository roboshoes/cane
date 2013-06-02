define([
    "mout/object/merge",
    "mout/object/forOwn",
    "mout/queryString/encode"
], function(merge, forOwn, encode) {

    function noop() {}

    function isSuccess(status) {
        return status >= 200 && status < 300 || status === 304;
    }

    function setHeaders(headers, xhr) {
        forOwn(headers, function(value, key) {
            xhr.setRequestHeader(key, value);
        });
    }

    var defaults = {
        url: "",
        method: "GET",
        data: {},
        headers: {},
        completed: noop,
        success: noop,
        error: noop
    };

    return function(options) {

        options = merge(defaults, options);
        options.method = options.method.toUpperCase();

        var xhr = new window.XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (xhr.readyState >= 4) {
                var success = isSuccess(xhr.status),
                    callback = success ? options.success : options.error;

                options.completed.call(xhr, xhr.responseText, xhr.status);
                callback.call(xhr, xhr.responseText, xhr.status);
            }
        };

        var data = encode(options.data);

        if (options.method === "GET") {

            xhr.open("GET", options.url + data, true);
            setHeaders(options.headers, xhr);
            xhr.send();

        } else {

            xhr.open(options.method, options.url, true);
            setHeaders(options.headers, xhr);
            xhr.send( data );

        }

        return xhr;
    };
});
