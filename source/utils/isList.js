var isArray = require("mout/lang/isArray");
var isArguments = require("mout/lang/isArguments");

function isList(value) {
    return isArray(value) ||
        isArguments(value) ||
        value instanceof window.NodeList ||
        value instanceof window.HTMLCollection;
}

module.exports = isList;

