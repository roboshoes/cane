# DOM

Utilities for modifying and creating DOM structures.


## append(parent, items...)

Appends all the nodes in `items` to the `parent` node.

Each `items` argument can be a node or an array of nodes to append to `parent`.


## create(tag, [attributes,] [content...])

Creates a DOM element and sets the provided attributes and content.

`tag` specifies the HTML tag name for the element. `attributes` can be an object
where the key-value pairs specify the attributes to set on the new element.
`content` can be one or more DOM nodes that are appended to the new element, or
it can be a string that will be the text content of the element. When a string
is provided as `content`, it will be treated as text, *not* HTML.

Examples:

```js
// Element (<div></div>)
var div = create("div");

// Element (<div id="test"></div>)
var test = create("div", { "id": "test" });

// Element (<div><div></div><div id="test"></div></div>)
create("div", div, test);

// Element (<div>Hello World!</div>)
create("div", "Hello World!");

// Element (<div id="container"><div id="test"></div></div>)
create("div", { "id": "container" }, test);

// Element (<div class="test">Hello World!</div>)
create("div", { "class": "test" }, "Hello World!");
```


## fragment(items...)

Creates a [DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment)
that contains the specified items.

All arguments will be appended to the `DocumentFragment`. The arguments can be
DOM nodes or (optionally nested) arrays of DOM nodes. If an argument is an
array, all DOM nodes in the array will be added to the `DocumentFragment`.


## prepend(parent, items...)

Prepends `items` to the `parent` nodes.

Each `items` argument can be a node or an array of nodes to prepend to `parent`.
