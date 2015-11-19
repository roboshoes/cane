var allNodes = require("../utils/allNodes");
var insert = require("mout/array/insert");
var forEach = require("mout/array/forEach");

function addClass(nodes, classes) {
    classes = classes.split(" ");

    allNodes(nodes, function(node) {
        var className = node.className,
            names = (className === "") ? [] : className.split(" ");

        forEach(classes, function(newClass) {
            insert(names, newClass);
        });

        node.className = names.join(" ");
    });
}

module.exports = addClass;
