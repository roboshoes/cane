define(["../utils/isList", "mout/array/forEach"], function(isList, forEach) {

    function add(item) {
        if (isList(item)) {
            forEach(item, add, this);
        } else {
            this.appendChild(item);
        }
    }

    function fragment() {
        var node = document.createDocumentFragment();
        forEach(arguments, add, node);

        return node;
    }

    return fragment;

});