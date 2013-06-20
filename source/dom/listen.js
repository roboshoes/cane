define([
    "../utils/allNodes",
    "./removeListener"
], function(allNodes, removeListener) {

    function listen(nodes, eventName, callback) {
        allNodes(nodes, function(node) {
            node.addEventListener(eventName, callback, false);
        });

        return {
            remove: function() {
                removeListener(nodes, eventName, callback);
            }
        };
    }

    return listen;

});