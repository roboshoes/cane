define(["./fragment"], function(fragment) {

    var slice = Array.prototype.slice;

    function prepend(parent) {
        var items = fragment(slice.call(arguments, 1));
        parent.insertBefore(items, parent.firstChild);
    }

    return prepend;

});