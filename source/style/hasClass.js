var allNodes = require("../utils/allNodes");
var contains = require("mout/array/contains");
var every = require("mout/array/every");

function hasClass(nodes, classes) {
    classes = classes.split(" ");
    var passed = true;

    allNodes(nodes, function(node) {
        var className = node.className,
            names = (className === "") ? [] : className.split(" ");

        var check = every(classes, function(checkClass) {
            return contains(names, checkClass);
        });

        if (!check) {
            passed = false;
            return false;
        }
    });

    return passed;
}

module.exports = hasClass;


