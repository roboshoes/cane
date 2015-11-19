var forEach = require("mout/array/forEach");
var isString = require("mout/lang/isString");
var isList = require("./isList");

function allNodes(nodes, callback, context) {
    function iterator(item) {
        if (isString(item)) {
            forEach(document.querySelectorAll(item), iterator);
        } else if (!isList(item)) {
            callback.call(context, item);
        } else {
            forEach(item, iterator);
        }
    }

    iterator(nodes);
}

module.exports = allNodes;

