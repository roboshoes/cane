define([
    "../net/request"
], function(request) {

    function noop() {}

    function getJSON(url, success, error) {

        error = error || noop;

        function parse(data, status) {
            try {
                success.call(this, JSON.parse(data));
            } catch (exception) {
                error.call(this, data, status);
            }
        }

        request({
            url: url,
            headers: {
                "Accept": "application/json, text/javascript"
            },
            success: parse,
            error: error
        });
    }

    return getJSON;
});
