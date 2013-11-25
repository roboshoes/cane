define([
    "mout/array/forEach",
    "mout/lang/isString",
    "./isList"
], function(forEach, isString, isList) {

    function allNodes(nodes, callback, context) {
        function iterator(item) {
            if (!isList(item)) {
                callback.call(context, item);
            } else {
                forEach(item, iterator);
            }
        }

        if (isString(nodes)) {
            nodes = document.querySelector(nodes);
        }

        iterator(nodes);
    }

    return allNodes;

});