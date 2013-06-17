define([
    "mout/array/forEach",
    "./isList"
], function(forEach, isList) {

    function allNodes(nodes, callback, context) {
        function iterator(item) {
            if (!isList(item)) {
                callback.call(context, item);
            } else {
                forEach(item, iterator);
            }
        }

        iterator(nodes);
    }

    return allNodes;

});