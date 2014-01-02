# DOM

Utilities for modifying and creating DOM structures.


## append(parent, items...)

Appends all the nodes in `items` to the `parent` node.

Each `items` argument can be a node or an array of nodes to append to `parent`.


```js
var parent = document.getElementById("parent");

var first = document.createElement("div"),
    second = document.createElement("div");

append(parent, first, second);
```


## children(parent)

Returns a real array of the parent's child nodes excluding any `TextNode` or `CommentNode`.
Internally this methods uses `node.children`.

The `parent` argument can be a node or a array of nodes. If an array of nodes is specified all child nodes
of each parent will be returned within one array.

```html
<ul id="menu">
	<!-- this is a comment -->
	<li>First</li>
	<li>Second</li>
        <!-- here is white space -->
	<li>Third</li>
</ul>
```

```js
var menu = document.getElementById("menu");

children(menu).length // 3;
```


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


## empty(items...)

Removes all children from `items`.

Each `items` argument can be a node or an array of nodes.

## fragment(items...)

Creates a [DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment)
that contains the specified items.

All arguments will be appended to the `DocumentFragment`. The arguments can be
DOM nodes or (optionally nested) arrays of DOM nodes. If an argument is an
array, all DOM nodes in the array will be added to the `DocumentFragment`.

```js
var element = document.createElement("div");

var f = fragment(element);
```

## index(item)

Returns the index of the node within its list of siblings. If the node is not in the DOM it return `-1`

```html
<ul>
    <li>One</li>
    <li class="two">Two</li>
    <li>Three</li>
</ul>
```

```js
var node = document.querySelector(".two");

index(node); // 1
```


## matches(selector, items...)

Returns true if all items match the CSS selector.

If any of the items do not match the selector, it will return false. This uses
the browser's CSS selector matching, so support for some CSS selectors may vary.


```js
var element = document.createElement("div");
element.className = "foo";

matches("div.foo", element); // returns true
```


## prepend(parent, items...)

Prepends `items` to the `parent` nodes.

Each `items` argument can be a node or an array of nodes to prepend to `parent`.

See also: [`append`](#append)


## remove(nodes...)

Removes all `nodes` from their respective parent nodes.

If an node does not have a parent, it is ignored.


## setText(nodes, content)

Set the [`textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node.textContent) of every node to the given `content`.
