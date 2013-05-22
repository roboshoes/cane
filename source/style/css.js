define([
    "../utils/allNodes",
    "mout/object/forOwn"
], function(allNodes, forOwn) {

    function css(nodes, object, value) {
        if (typeof object === "string") {
            var temp = {};
            temp[object] = value;
            object = temp;
        }

        allNodes(nodes, function(node) {
            forOwn(object, function(value, key) {
                node.style[key] = value;
            });
        });
    }

    return css;

});