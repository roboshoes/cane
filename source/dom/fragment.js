var allNodes = require("../utils/allNodes");

function add(item) {
    this.appendChild(item);
}

function fragment() {
    var node = document.createDocumentFragment();
    allNodes(arguments, add, node);

    return node;
}

fragment.fromString = function(string) {
    var holder = document.createElement("div");
    var frag = document.createDocumentFragment();

    holder.innerHTML = string;

    while (holder.childNodes.length > 0) {
        frag.appendChild(holder.removeChild(holder.firstChild));
    }

    return frag;
};

module.exports = fragment;

