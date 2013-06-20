define(["../utils/allNodes"], function(allNodes) {

    function listen(nodes, eventName, callback) {
        allNodes(nodes, function(node) {
            node.addEventListener(eventName, callback, false);
        });
    }

    return listen;

});