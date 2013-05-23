define([
    "mout/lang/isArray"
], function(isArray) {

    var NodeList = window.NodeList,
        HTMLCollection = window.HTMLCollection;

    function isNodeList(value) {
        return isArray(value) ||
            value instanceof NodeList ||
            value instanceof HTMLCollection;
    }

    return isNodeList;

});