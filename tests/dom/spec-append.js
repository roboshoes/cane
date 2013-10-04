define(["cane/dom/append"], function(append) {

    describe("dom/append", function() {

        it("should append nodes to the parent element", function() {
            var parent = document.createElement("div"),
                first = document.createElement("span"),
                last = document.createElement("span");

            parent.appendChild(first);
            append(parent, last);

            expect(parent.childNodes.length).to.be(2);
            expect(parent.firstChild).to.be(first);
            expect(parent.lastChild).to.be(last);
        });

        it("should append multiple nodes", function() {
            var parent = document.createElement("div"),
                one = document.createElement("span"),
                two = document.createElement("span"),
                three = document.createElement("span");

            append(parent, one, [two, three]);

            expect(parent.childNodes.length).to.be(3);
            expect(parent.childNodes[0]).to.be(one);
            expect(parent.childNodes[1]).to.be(two);
            expect(parent.childNodes[2]).to.be(three);
        });

    });

});