var test = require( "tape" );
var allNodes = require( "../../source/utils/allNodes" );


test("should call callback for single node", function( t ) {
    t.plan( 1 );

    var node = document.createElement("span"),
        results = [];

    allNodes(node, function(n) { results.push(n); });

    t.deepEqual(results, [node]);
});

test("should call callback for each node in array of nodes", function( t ) {
    t.plan( 1 );

    var nodes = [
            document.createElement("span"),
            document.createElement("span"),
            document.createElement("span")
        ],
        results = [];

    allNodes(nodes, function(n) { results.push(n); });

    t.deepEqual(results, nodes);
});

test("should call callback for each node in NodeList", function( t ) {
    t.plan( 1 );

    var parent = document.createElement("div"),
        childOne = document.createElement("span"),
        childTwo = document.createElement("span"),
        results = [];
    parent.appendChild(childOne);
    parent.appendChild(childTwo);

    allNodes(parent.children, function(n) { results.push(n); });

    t.deepEqual(results, [childOne, childTwo]);
});

test("should recurse into nested lists", function( t ) {
    t.plan( 1 );

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

    t.deepEqual(results, [
        items[0],
        child,
        items[2][0],
        items[2][1]
    ]);
});

test("should pass context to callback", function( t ) {
    t.plan( 2 );

    var context = {},
        node = document.createElement("span"),
        nodes = [
            document.createElement("span"),
            document.createElement("span")
        ];

    allNodes(node, function() {
        t.equal(this, context);
    }, context);

    allNodes(nodes, function() {
        t.equal(this, context);
    }, context);
});

test("using strings as querys", function( t ) {
    t.plan( 2 );

    var context = {};

    function setup() {
        context.build = function(name) {
            var element = document.createElement("div");
            element.className = name;
            document.body.appendChild(element);
            return element;
        };

        context.foo = context.build("foo");
        context.bar = context.build("bar");
    }

    function teardown() {
        document.body.removeChild(context.foo);
        document.body.removeChild(context.bar);
    }

    t.test("should perform querySelectorAll on string", function( st ) {
        st.plan( 1 );

        setup();

        allNodes(".foo", function(node) {
            node.className = "";
        });

        st.equal(context.foo.className, "");

        teardown();
    });

    t.test("should perform querySelectorAll on an array of strings", function( st ) {
        st.plan( 3 );

        setup();

        var div = context.build("baz");

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

        st.equal(context.foo.className, "");
        st.equal(context.bar.className, "");
        st.equal(div.className, "");

        document.body.removeChild(div);

        teardown();
    });

});

