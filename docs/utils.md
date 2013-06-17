# Utils

Collection of general utilities, mostly used by other functions in the library.


## allNodes(nodes, callback)

Handles enumerating over a list of nodes, or handling a single node.

If `nodes` is not a list of nodes, it will convert it into a single-item array.
Calls `callback` for each node in `nodes`, passing in the current node as the
first parameter.


## isList(value)

Returns true if `value` is a list.

A list is defined as an array,
[NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList),
[HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection),
or [arguments object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments).


## isNode(value)

Returns true if `value` is a Node.
