define([
    "mout/array/forEach",
    "mout/lang/isString",
    "./isList"
], function(forEach, isString, isList) {

    function allNodes(nodes, callback, context) {
        function iterator(item) {
            if (isString(item)) {
                forEach(document.querySelectorAll(item), iterator);
            } else if (!isList(item)) {
                callback.call(context, item);
            } else {
                forEach(item, iterator);
            }
        }

        iterator(nodes);
    }

    return allNodes;

});