define([
    "mout/lang/kindOf",
    "mout/array/forEach"
], function(kindOf, forEach) {

    function allNodes(nodes, callback) {
        var kind = kindOf(nodes);
        if (kind !== "NodeList" && kind !== "Array" &&
            kind !== "HTMLCollection") {

            nodes = [nodes];
        }

        forEach(nodes, callback);
    }

    return allNodes;

});