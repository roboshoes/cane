define([
    "mout/math/clamp",
    "./append",
    "../utils/allNodes"
], function(clamp, append, allNodes) {

    function insertAt(parent, nodes, index) {

        index = Math.max(index, 0);

        if (index >= parent.children.length) {
            append(parent, nodes);
        } else {
            var sibling;
            allNodes(nodes, function(node) {
                sibling = parent.children[ index ];
                parent.insertBefore(node, sibling);
                index++;
            });
        }
    }

    return insertAt;
});
