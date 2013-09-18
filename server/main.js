var express = require("express");
var clone = require("mout/lang/clone");
var app = express();

app.get("/jsonp/static", function(request, result) {
	result.jsonp({
		foo: "bar"
	});
});

app.get("/jsonp/mirror", function(request, result) {
	var params = clone(request.query);
	delete params.callback;

	result.jsonp(params);
});

app.listen(9000);

module.exports = app;