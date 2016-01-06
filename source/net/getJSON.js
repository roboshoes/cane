var request = require("../net/request");

function noop() {}

function getJSON(url, success, error) {

    error = error || noop;

    function parse(data, status) {
        var json;

        try {
            json = JSON.parse(data);
        } catch (exception) {
            error.call(this, exception, data, status);
        }

        success.call(this, json);
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

module.exports = getJSON;

