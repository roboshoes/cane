var allNodes = require("../utils/allNodes");

function setText(nodes, text) {
    allNodes(nodes, function(node) {
        node.textContent = text;
    });
}

module.exports = setText;

