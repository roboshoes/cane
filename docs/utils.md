# Utils

Collection of general utilities, mostly used by other functions in the library.


## allNodes(nodes, callback, [context])

Handles enumerating over a list of nodes, or handling a single node.

If `nodes` is a list of nodes, it will call `callback` for each item in the
list, recursing into nested lists. If `nodes` is a single node, it will call
`callback` with that node. It will pass the current node as the first parameter
to `callback`. If `context` is provided, `this` will be set to `context` in the
callback.


## isList(value)

Returns true if `value` is a list.

A list is defined as an array,
[NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList),
[HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection),
or [arguments object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments).


## isNode(value)

Returns true if `value` is a Node.
