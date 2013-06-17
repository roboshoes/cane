define([
    "../utils/allNodes",
    "mout/array/contains",
    "mout/array/every"
], function(allNodes, contains, every) {

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

    return hasClass;

});
