define([
    "./append",
    "./fragment"
], function(append, fragment) {

    function insertAt(parent, nodes, index) {

        if (index < 0) {
            index = parent.children.length + index;
        }

        if (index >= parent.children.length) {
            append(parent, nodes);
        } else {
            var sibling = parent.children[ index ];
            parent.insertBefore(fragment(nodes), sibling);
        }
    }

    return insertAt;
});
