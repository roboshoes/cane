define([
    "../utils/allNodes",
    "./removeListener",
    "mout/lang/isArray",
    "mout/array/forEach",
    "mout/function/bind"
], function(allNodes, removeListener, isArray, forEach, bind) {

    function listen(nodes, eventNames, callback, context) {
        if (!isArray(eventNames)) {
            eventNames = eventNames.split(" ");
        }

        if (context) {
            callback = bind(callback, context);
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