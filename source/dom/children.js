define([
    "mout/array/forEach",
    "../utils/allNodes"
], function(forEach, allNodes) {

    function children(nodes) {
        var array = [];

        allNodes(nodes, function(node) {
            forEach(node.children, function(child) {
                array.push(child);
            });
        });

        return array;
    }

    return children;

});
