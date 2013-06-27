define([
	"../utils/allNodes"
], function(allNodes) {

	function empty() {
		allNodes(arguments, function(node) {
			node.textContent = "";
		});
	}

	return empty;
});
