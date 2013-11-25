define(["cane/utils/allNodes"], function(allNodes) {

    describe("utils/allNodes", function() {

        it("should call callback for single node", function() {
            var node = document.createElement("span"),
                results = [];

            allNodes(node, function(n) { results.push(n); });

            expect(results).to.eql([node]);
        });

        it("should call callback for each node in array of nodes", function() {
            var nodes = [
                    document.createElement("span"),
                    document.createElement("span"),
                    document.createElement("span")
                ],
                results = [];

            allNodes(nodes, function(n) { results.push(n); });

            expect(results).to.eql(nodes);
        });

        it("should call callback for each node in NodeList", function() {
            var parent = document.createElement("div"),
                childOne = document.createElement("span"),
                childTwo = document.createElement("span"),
                results = [];
            parent.appendChild(childOne);
            parent.appendChild(childTwo);

            allNodes(parent.children, function(n) { results.push(n); });

            expect(results).to.eql([childOne, childTwo]);
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

            expect(results).to.eql([
                items[0],
                child,
                items[2][0],
                items[2][1]
            ]);
        });

        it("should pass context to callback", function() {
            var context = {},
                node = document.createElement("span"),
                nodes = [
                    document.createElement("span"),
                    document.createElement("span")
                ];

            allNodes(node, function() {
                expect(this).to.be(context);
            }, context);

            allNodes(nodes, function() {
                expect(this).to.be(context);
            }, context);
        });

        it("should perform querySlectorAll on string", function() {
            var div = document.createElement("div");
            div.className = "foo";
            document.body.appendChild(div);

            allNodes(".foo", function(node) {
                node.className = "";
            });

            expect(div.className).to.be("");
        });

    });

});