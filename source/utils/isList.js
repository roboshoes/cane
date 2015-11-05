var isArray = require("mout/lang/isArray");
var isArguments = require("mout/lang/isArguments");

var NodeList = window.NodeList,
    HTMLCollection = window.HTMLCollection;

function isList(value) {
    return isArray(value) ||
        isArguments(value) ||
        value instanceof NodeList ||
        value instanceof HTMLCollection;
}

module.exports = isList;

