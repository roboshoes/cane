define([
    "mout/lang/isArray",
    "mout/lang/isArguments"
], function(isArray, isArguments) {

    var NodeList = window.NodeList,
        HTMLCollection = window.HTMLCollection;

    function isList(value) {
        return isArray(value) ||
            isArguments(value) ||
            value instanceof NodeList ||
            value instanceof HTMLCollection;
    }

    return isList;

});