define([
    "mout/object/merge",
    "mout/object/forOwn"
], function(merge, forOwn) {

    function noop() {}

    function isSuccess(status) {
        return status >= 200 && status < 300 || status === 304;
    }

    function setHeader(value, key) {
        this.setRequestHeader(key, value);
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

    function request(options) {
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

        xhr.open(options.method, options.url, true);
        forOwn(options.headers, setHeader, xhr);
        xhr.send(options.data);

        return xhr;
    }

    return request;

});
