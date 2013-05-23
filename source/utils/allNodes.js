define([
    "mout/array/forEach",
    "./isList"
], function(forEach, isList) {

    function allNodes(nodes, callback) {
        if (!isList(nodes)) {
            nodes = [nodes];
        }

        forEach(nodes, callback);
    }

    return allNodes;

});