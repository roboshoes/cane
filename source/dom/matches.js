var find = require("mout/array/find");
var allNodes = require("../utils/allNodes");

var el = document.createElement("div"),
    matchesFunc = find([
        "matches",
        "matchesSelector",
        "webkitMatchesSelector",
        "mozMatchesSelector",
        "msMatchesSelector",
        "oMatchesSelector"
    ], function(n) { return typeof el[n] === "function"; });

if (!matchesFunc) {
    return null;
}

var slice = Array.prototype.slice;

function matches(selector) {
    var isMatch = true;
    allNodes(slice.call(arguments, 1), function(element) {
        isMatch = isMatch && element[matchesFunc](selector);
    });

    return isMatch;
}

module.exports = matches;

