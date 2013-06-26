define([
    "../net/request"
], function(request) {

    function noop() {}

    function json(url, success, error) {

        error = error || noop;

        function parse(data) {
            success.call(this, JSON.parse(data));
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

    return json;
});
