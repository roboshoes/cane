# Events

Utilities for manipulating and observing DOM events.


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

See also: [`removeListener`](#removeListener)


## removeListener(nodes, eventNames, callback)

Removes the event listener `callback` from all nodes for the specified events.

`nodes` can be a single DOM node or a list of nodes. `eventNames` is an array or
space-seperated string containing the names of the events to remove the listener
from. `callback` is the listener function to remove.

See also: [`listen`](#listen)
