define([
    "../utils/allNodes"
], function(allNodes) {

    function removeNode(node) {
        var parent = node.parentNode;
        if (parent) {
            parent.removeChild(node);
        }
    }

    function remove() {
        allNodes(arguments, removeNode);
    }

    return remove;

});