define(["cane/dom/insertAt"], function(insertAt) {

    describe("dom/insertAt", function() {

        it("should insert node at index", function() {
            var parent = document.createElement("div"),
                first = document.createElement("span"),
                second = document.createElement("span"),
                third = document.createElement("span"),
                div = document.createElement("div");

            parent.appendChild(first);
            parent.appendChild(second);
            parent.appendChild(third);

            insertAt(parent, div, 1);

            expect(parent.children[1]).to.be(div);
        });

        it("should append if index is higher then children", function() {
            var parent = document.createElement("div"),
                first = document.createElement("span"),
                second = document.createElement("span"),
                third = document.createElement("span"),
                div = document.createElement("div");

            parent.appendChild(first);
            parent.appendChild(second);
            parent.appendChild(third);

            insertAt(parent, div, 10);

            expect(parent.children[3]).to.be(div);
        });

        it("should determin index from the end of array if index is negative", function() {
            var parent = document.createElement("div"),
                first = document.createElement("span"),
                second = document.createElement("span"),
                third = document.createElement("span"),
                foo = document.createElement("div");


            parent.appendChild(first);
            parent.appendChild(second);
            parent.appendChild(third);

            insertAt(parent, foo, -1);

            expect(parent.children[0]).to.be(first);
            expect(parent.children[1]).to.be(second);
            expect(parent.children[2]).to.be(foo);
            expect(parent.children[3]).to.be(third);

            parent.removeChild(foo);

            insertAt(parent, foo, -2);

            expect(parent.children[1]).to.be(foo);

            parent.removeChild(foo);

            insertAt(parent, foo, -7);

            expect(parent.children[0]).to.be(foo);
        });

        it("should insert multiple nodes", function() {
            var parent = document.createElement("div"),
                first = document.createElement("span"),
                second = document.createElement("span"),
                third = document.createElement("span"),
                foo = document.createElement("div"),
                bar = document.createElement("div");

            parent.appendChild(first);
            parent.appendChild(second);
            parent.appendChild(third);

            insertAt(parent, [foo, bar], 1);

            expect(parent.children[1]).to.be(foo);
            expect(parent.children[2]).to.be(bar);
        });

    });

});