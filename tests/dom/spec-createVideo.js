define(["cane/dom/createVideo"], function(createVideo) {

    describe("dom/createVideo", function() {


        function testSource(element, source, type) {
            expect(element.getAttribute("src")).to.be(source);
            expect(element.getAttribute("type")).to.be(type);
        }

        it("should create empty video element", function() {
            var el = createVideo();

            expect(el.nodeType).to.be(Node.ELEMENT_NODE);
            expect(el.tagName).to.be("VIDEO");
            expect(el.childNodes.length).to.be(0);
        });

        it("should add source node", function() {
            var el = createVideo("path/video.mp4");

            expect(el.childNodes.length).to.be(1);

            testSource(el.childNodes[0], "path/video.mp4", "video/mp4");
        });

        it("should add multiple source nodes", function() {
            var el = createVideo([
                "path/video.mp4",
                "path/video.ogg",
                "path/video.webm"
            ]);

            expect(el.childNodes.length).to.be(3);

            testSource(el.childNodes[0], "path/video.mp4", "video/mp4");
            testSource(el.childNodes[1], "path/video.ogg", "video/ogg");
            testSource(el.childNodes[2], "path/video.webm", "video/webm");
        });

        it("should accept attributes as a single parameter", function() {
            var el = createVideo({
                controls: "controls",
                poster: "image.jpg",
            });

            expect(el.getAttribute("controls")).to.be("controls");
            expect(el.getAttribute("poster")).to.be("image.jpg");
        });

        it("should accept attributes as second argument", function() {

            // with a string being first argument
            var el = createVideo( "video.mp4", { poster: "image.jpg" });

            testSource(el.childNodes[0], "video.mp4", "video/mp4");
            expect(el.getAttribute("poster")).to.be("image.jpg");

            // with an array being second argument
            el = createVideo( [ "video.mp4" ], { poster: "image.jpg" });

            testSource(el.childNodes[0], "video.mp4", "video/mp4");
            expect(el.getAttribute("poster")).to.be("image.jpg");
        });

    });

});
