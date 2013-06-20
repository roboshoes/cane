define([
    "../utils/allNodes",
    "./removeListener",
    "mout/lang/isArray",
    "mout/array/forEach"
], function(allNodes, removeListener, isArray, forEach) {

    function listen(nodes, eventNames, callback) {
        if (!isArray(eventNames)) {
            eventNames = eventNames.split(" ");
        }

        allNodes(nodes, function(node) {
            forEach(eventNames, function(name) {
                node.addEventListener(name, callback, false);
            });
        });

        return {
            remove: function() {
                removeListener(nodes, eventNames, callback);
            }
        };
    }

    return listen;

});