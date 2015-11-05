var forEach = require("mout/array/forEach");
var allNodes = require("../utils/allNodes");

function children(nodes) {
    var array = [];

    allNodes(nodes, function(node) {
        forEach(node.children, function(child) {
            array.push(child);
        });
    });

    return array;
}

module.exports = children;


