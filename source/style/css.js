define([
    "../utils/allNodes",
    "mout/object/forOwn",
    "mout/string/camelCase"
], function(allNodes, forOwn, camelCase) {

    function css(nodes, object, value) {
        if (typeof object === "string") {
            var temp = {};
            temp[object] = value;
            object = temp;
        }

        allNodes(nodes, function(node) {
            forOwn(object, function(value, key) {
                node.style[camelCase(key)] = value;
            });
        });
    }

    return css;

});