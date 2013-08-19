define([
    "mout/array/forEach",
    "../utils/allNodes"
], function(forEach, allNodes) {

    var TEXT_NODE = window.Node.TEXT_NODE;
    var COMMENT_NODE = window.Node.COMMENT_NODE;

    function children(nodes) {
        var array = [];

        allNodes(nodes, function(node) {
            forEach(node.childNodes, function(child) {
                if (child.nodeType !== TEXT_NODE &&
                    child.nodeType !== COMMENT_NODE) {
                    array.push(child);
                }
            });
        });

        return array;
    }

    return children;

});
