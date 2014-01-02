define(["mout/array/indexOf"], function(indexOf) {

    function index(node) {
        if (!node.parentNode) {
            return -1;
        }

        return indexOf(node.parentNode.children, node);
    }

    return index;
});
