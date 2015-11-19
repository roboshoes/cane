var allNodes = require("../utils/allNodes");
var forOwn = require("mout/object/forOwn");
var camelCase = require("mout/string/camelCase");

function css(nodes, object, value) {
    if (typeof object === "string") {
        var temp = {};
        temp[object] = value;
        object = temp;
    }

    allNodes(nodes, function(node) {
        forOwn(object, function(value, key) {
            node.style[camelCase(key)] = value;
        });
    });
}

module.exports = css;

