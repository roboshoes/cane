define([
    "../utils/allNodes"
], function(allNodes) {

    function add(item) {
        this.appendChild(item);
    }

    function fragment() {
        var node = document.createDocumentFragment();
        allNodes(arguments, add, node);

        return node;
    }

    return fragment;

});