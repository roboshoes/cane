define(function() {

    function index(node) {
        if (!node.parentNode) {
            return -1;
        }

        var count = 0;

        while (!!(node = node.previousSibling)) {
            count++;
        }

        return count;
    }

    return index;
});
