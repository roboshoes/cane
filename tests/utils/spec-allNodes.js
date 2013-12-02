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

        describe("using strings as querys", function() {
            beforeEach(function() {
                this.build = function(name) {
                    var element = document.createElement("div");
                    element.className = name;
                    document.body.appendChild(element);
                    return element;
                };

                this.foo = this.build("foo");
                this.bar = this.build("bar");
            });

            afterEach(function() {
                document.body.removeChild(this.foo);
                document.body.removeChild(this.bar);
            });

            it("should perform querySelectorAll on string", function() {
                allNodes(".foo", function(node) {
                    node.className = "";
                });

                expect(this.foo.className).to.be("");
            });

            it("should perform querySelectorAll on an array of strings", function() {

                var div = this.build("baz");

                allNodes(
                    [
                        ".foo",
                        ".bar",
                        [ div ]
                    ],
                    function(node) {
                        node.className = "";
                    }
                );

                expect(this.foo.className).to.be("");
                expect(this.bar.className).to.be("");
                expect(div.className).to.be("");

                document.body.removeChild(div);
            });

        });

    });

});
