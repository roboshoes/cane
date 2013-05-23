# Style

Utilities for managing CSS styles and classes.

All functions that take DOM nodes as an argument can be used with a single DOM
node, an array of DOM nodes, or a `NodeList`.


## addClass(nodes, string)

Adds a CSS class to the nodes.

`string` is a space-separated string that contains the CSS classes to add.

If a class is already specified for the node, it will not add a duplicate class.


## css(nodes, object, [value])

Sets the specified CSS properties on the nodes.

`object` can be an object containing the keys and values of the CSS properties
to change. If it is a string, it is the name of a single CSS property to set to
the value specified by `value`.


## removeClass(nodes, string)

Removes a CSS class from the nodes.

`string` is a space-separated string that contains the CSS classes to remove
from the nodes.
