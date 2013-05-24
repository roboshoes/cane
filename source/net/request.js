define([
    "mout/object/merge",
    "mout/object/forOwn",
    "mout/queryString/encode"
], function(merge, forOwn, encode) {

    function noop() {}

    function isSuccess(status) {
        return status >= 200 && status < 300 || status === 304;
    }

    var defaults = {
        url: "",
        method: "GET",
        data: {},
        completed: noop,
        success: noop,
        error: noop
    };

    return function(options) {

        options = merge(defaults, options);

        var url = options.url + encode(options.data),
            xhr = new window.XMLHttpRequest();

        forOwn(options.headers, function(key, value) {
            xhr.setRequestHeader(key, value);
        });

        xhr.onreadystatechange = function() {
            if (xhr.readyState >= 4) {
                var success = isSuccess(xhr.status),
                    callback = success ? options.success : options.error;

                options.completed.call(xhr, xhr.responseText, xhr.status);
                callback.call(xhr, xhr.responseText, xhr.status);
            }
        };

        xhr.open(options.method, url, true);
        xhr.send("");

        return xhr;
    };
});
