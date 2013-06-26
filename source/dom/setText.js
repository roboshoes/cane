define([
	"../utils/allNodes"
], function(allNodes) {

	function setText(nodes, text) {
		allNodes(nodes, function(node) {
			node.textContent = text;
		});
	}

	return setText;
});
