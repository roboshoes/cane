var append = require("./append");
var fragment = require("./fragment");

function insertAt(parent, nodes, index) {

    if (index < 0) {
        index = Math.max(0, parent.children.length + index);
    }

    if (index >= parent.children.length) {
        append(parent, nodes);
    } else {
        var sibling = parent.children[index];
        parent.insertBefore(fragment(nodes), sibling);
    }
}

module.exports = insertAt;

