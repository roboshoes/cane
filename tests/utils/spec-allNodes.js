define(["cane/utils/allNodes"], function(allNodes) {

    describe("utils/allNodes", function() {

        it("should call callback for single node", function() {
            var node = document.createElement("span"),
                results = [];

            allNodes(node, function(n) { results.push(n); });

            expect(results).toEqual([node]);
        });

        it("should call callback for each node in array of nodes", function() {
            var nodes = [
                    document.createElement("span"),
                    document.createElement("span"),
                    document.createElement("span")
                ],
                results = [];

            allNodes(nodes, function(n) { results.push(n); });

            expect(results).toEqual(nodes);
        });

        it("should call callback for each node in NodeList", function() {
            var parent = document.createElement("div"),
                childOne = document.createElement("span"),
                childTwo = document.createElement("span"),
                results = [];
            parent.appendChild(childOne);
            parent.appendChild(childTwo);

            allNodes(parent.children, function(n) { results.push(n); });

            expect(results).toEqual([childOne, childTwo]);
        });

        it("should recurse into nested lists", function() {
            var parent = document.createElement("div"),
                child = document.createElement("span"),
                items = [
                    document.createElement("span"),
                    parent.children,
                    [
                        document.createElement("span"),
                        document.createElement("span")
                    ]
                ],
                results = [];
            parent.appendChild(child);

            allNodes(items, function(n) { results.push(n); });

            expect(results).toEqual([
                items[0],
                child,
                items[2][0],
                items[2][1]
            ]);
        });

    });

});