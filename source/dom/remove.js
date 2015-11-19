var allNodes = require("../utils/allNodes");

function removeNode(node) {
    var parent = node.parentNode;
    if (parent) {
        parent.removeChild(node);
    }
}

function remove() {
    allNodes(arguments, removeNode);
}

module.exports = remove;

