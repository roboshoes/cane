define([
    "../utils/allNodes",
    "mout/lang/isArray",
    "mout/array/forEach"
], function(allNodes, isArray, forEach) {

    function removeListener(nodes, eventNames, callback) {
        if (!isArray(eventNames)) {
            eventNames = eventNames.split(" ");
        }

        allNodes(nodes, function(node) {
            forEach(eventNames, function(name) {
                node.removeEventListener(name, callback, false);
            });
        });
    }

    return removeListener;

});
