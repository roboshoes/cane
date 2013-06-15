define(["./fragment"], function(fragment) {

    var slice = Array.prototype.slice;

    function append(parent) {
        var items = fragment(slice.call(arguments, 1));
        parent.appendChild(items);
    }

    return append;

});