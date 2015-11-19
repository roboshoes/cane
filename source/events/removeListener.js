var allNodes = require("../utils/allNodes");
var isArray = require("mout/lang/isArray");
var forEach = require("mout/array/forEach");

function removeListener(nodes, eventNames, callback) {
    if (!isArray(eventNames)) {
        eventNames = eventNames.split(" ");
    }

    allNodes(nodes, function(node) {
        forEach(eventNames, function(name) {
            node.removeEventListener(name, callback, false);
        });
    });
}

module.exports = removeListener;


