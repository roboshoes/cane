# DOM

Utilities for modifying and creating DOM structures.


## append(parent, items...)

Appends all the nodes in `items` to the `parent` node.

Each `items` argument can be a node or an array of nodes to append to `parent`.


## fragment(items...)

Creates a [DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment)
that contains the specified items.

All arguments will be appended to the `DocumentFragment`. The arguments can be
DOM nodes or (optionally nested) arrays of DOM nodes. If an argument is an
array, all DOM nodes in the array will be added to the `DocumentFragment`.
