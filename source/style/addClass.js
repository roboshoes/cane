define([
    "../utils/allNodes",
    "mout/array/insert",
    "mout/array/forEach"
], function(allNodes, insert, forEach) {

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

    return addClass;
    
});