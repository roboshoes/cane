var allNodes = require("../utils/allNodes");
var removeAll = require("mout/array/removeAll");
var forEach = require("mout/array/forEach");

function removeClass(nodes, classes) {
    classes = classes.split(" ");

    allNodes(nodes, function(node) {
        var className = node.className,
            names = (className === "") ? [] : className.split(" ");

        forEach(classes, function(oldClass) {
            removeAll(names, oldClass);
        });

        node.className = names.join(" ");
    });
}

module.exports = removeClass;

