var allNodes = require("../utils/allNodes");
var removeListener = require("./removeListener");
var isArray = require("mout/lang/isArray");
var forEach = require("mout/array/forEach");
var bind = require("mout/function/bind");

function listen(nodes, eventNames, callback, context) {
    if (!isArray(eventNames)) {
        eventNames = eventNames.split(" ");
    }

    if (context) {
        callback = bind(callback, context);
    }

    allNodes(nodes, function(node) {
        forEach(eventNames, function(name) {
            node.addEventListener(name, callback, false);
        });
    });

    return {
        remove: function() {
            removeListener(nodes, eventNames, callback);
        }
    };
}

module.exports = listen;

