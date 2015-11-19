var test = require( "tape" );
var css = require( "../../source/style/css" );

test("should add one style in key value format", function( t ) {
    t.plan( 1 );

    var node = document.createElement("div");
    css(node, "overflow", "hidden");

    t.equal(node.style.overflow, "hidden");
});

test("should add multiple style settings passed as object", function( t ) {
    t.plan( 4 );

    var node = document.createElement("div");

    css(node, {
        "overflow": "hidden",
        "height": "30px",
        "width": "20px",
        "lineHeight": "20px"
    });

    t.equal(node.style.overflow, "hidden");
    t.equal(node.style.height, "30px");
    t.equal(node.style.width, "20px");
    t.equal(node.style.lineHeight, "20px");
});

test("should normalize style", function( t ) {
    t.plan( 3 );

    var node = document.createElement("div");

    css(node, "line-height", "20px");
    css(node, {
        fontSize: "10em",
        "minWidth": "100px"
    });

    t.equal(node.style.lineHeight, "20px");
    t.equal(node.style.fontSize, "10em");
    t.equal(node.style.minWidth, "100px");
});
