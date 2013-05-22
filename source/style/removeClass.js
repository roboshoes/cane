define([
    "../utils/allNodes",
    "mout/array/removeAll",
    "mout/array/forEach"
], function(allNodes, removeAll, forEach) {

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

    return removeClass;

});