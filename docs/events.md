# Events

Utilities for manipulating and observing DOM events.


## delegate(root, selector, eventNames, callback)

Adds `callback` as an event listener that will listen for events that bubble
from elements that match `selector`.

`root` can be a single DOM node or a list of nodes. `selector` is string
containing a CSS selector that filters the nodes that the event can be triggered
on. `eventNames` is an array or space-separated string that contains the event
names that the listener will be attached to.

`callback` will only be called when an event that is included in `eventNames` is
triggered on an element that is a child of `root` and matches the specified CSS
selector. It will not be called when an event is triggered directly on `root`.
The first argument to `callback` will be the `Event` object and the context will
be the child node that matches `selector`.

The return value is an object that contains a `.remove` function that when
called will remove the event listener. You cannot remove the listener with
[`removeListener`](#removeListener).

Example:
```js
delegate(container, "button.action", "click", function() {
    // Called only when a button contained in `container` with a class of
    // `action` is clicked.
    // `this` is the DOM element for the button that was clicked.
});
```

See also: [`listen`](#listen)


## listen(nodes, eventNames, callback):Object

Adds `callback` as an event listener to all the nodes for the specified events.

`nodes` can be a single DOM node or a list of nodes. `eventNames` is an array or
space-seperated string that contains the event names that the listener will be
attached to.

`callback` will be called whenever the event is triggered on any of the provided
nodes. The first argument to `callback` will be the `Event` object and the
context will be the node that triggered the event.

The return value is an object that contains a `remove` method that will remove
the listener that was added. You can also use
[`removeListener`](#removeListener) to remove the listener.

Example:

```js
listen(myElement, "click", function() {
    // Called when myElement is clicked
});

var buttons = document.querySelectorAll("button");
var listener = listen(buttons, "click", function(event) {
    // Called when any buttons are clicked
    // `this` is the DOM element of the button that was clicked
    // `event` is the DOM Event object
});

// Remove the event listener that was added above
listener.remove();
```

See also: [`delegate`](#delegate), [`removeListener`](#removeListener)


## removeListener(nodes, eventNames, callback)

Removes the event listener `callback` from all nodes for the specified events.

`nodes` can be a single DOM node or a list of nodes. `eventNames` is an array or
space-seperated string containing the names of the events to remove the listener
from. `callback` is the listener function to remove.

See also: [`listen`](#listen)
