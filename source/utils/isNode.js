define(function() {

    var Node = window.Node;

    function isNode(value) {
        return value instanceof Node;
    }

    return isNode;

});