define(["../utils/allNodes"], function(allNodes) {

    function removeListener(nodes, eventName, callback) {
        allNodes(nodes, function(node) {
            node.removeEventListener(eventName, callback, false);
        });
    }

    return removeListener;

});
