var fragment = require("./fragment");

var slice = Array.prototype.slice;

function prepend(parent) {
    var items = fragment(slice.call(arguments, 1));
    parent.insertBefore(items, parent.firstChild);
}

module.exports = prepend;

