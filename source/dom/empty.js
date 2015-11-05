var allNodes = require("../utils/allNodes");

function empty() {
    allNodes(arguments, function(node) {
        node.textContent = "";
    });
}

module.exports = empty;

