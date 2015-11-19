var listen = require("./listen");
var matches = require("../dom/matches");

function getTarget(event, selector, root) {
    var el = event.target;

    while (el) {
        if (el === root) {
            return;
        } else if (matches(selector, el)) {
            return el;
        } else {
            el = el.parentElement;
        }
    }
}

function delegate(root, selector, eventName, handler, context) {
    return listen(root, eventName, function(e) {
        var target = getTarget(e, selector, root);
        if (target) {
            handler.call(context ? context : target, e);
        }
    });
}

module.exports = delegate;



