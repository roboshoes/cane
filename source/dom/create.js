define([
    "mout/object/forOwn",
    "../utils/isNode",
    "../utils/isList",
    "./fragment"
], function(forOwn, isNode, isList, fragment) {

    var slice = Array.prototype.slice;

    function setAttribute(value, name) {
        this.setAttribute(name, value);
    }

    function create(tagName, attributes) {
        var el = document.createElement(tagName),
            contentStart = 2; // Content starts at arguments[2]

        if (attributes) {
            if (isNode(attributes) ||
                isList(attributes) ||
                typeof attributes === "string") {
                // No attributes specified, start content at arguments[1]
                contentStart = 1;
            } else {
                // Attributes object specified, set attributes on the element
                forOwn(attributes, setAttribute, el);
            }
        }

        var content = arguments[contentStart];
        if (typeof content === "string") {
            // Set the text content
            el.textContent = content;
        } else {
            // Append provided DOM nodes
            content = fragment(slice.call(arguments, contentStart));
            el.appendChild(content);
        }

        return el;
    }

    return create;

});