define([
    "mout/array/forEach",
    "./isList"
], function(forEach, isList) {

    function allNodes(nodes, callback) {
        var iterator = function(item) {
            if (!isList(item)) {
                callback(item);
            } else {
                forEach(item, iterator);
            }
        };

        iterator(nodes);
    }

    return allNodes;

});