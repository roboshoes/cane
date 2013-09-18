# Net

Utilities for leoding and handling external resources


## getJSON(url, success, [error])

This is a short hand for [`request`](#request). It loads and parses a json file. If loading
is successful `success` will be called in the context of the `xhr` request and with the parsed
JSON as argument.
`error`, if provided, is called when the call either fails or the recieved JSON is not parsable.

See also: [`request`](#request)

## jsonp(url, [parameters], callback)

This module helps loading JSON content using JSON-P methods. For more insight on JSON-P check out: [JSON-P](http://en.wikipedia.org/wiki/JSONP).

* `url`: representing the path to the resource (without parameters).
* `parameters`: Optional set of parameters. The content of this will be url encoded using `mout/queryString/encode`.
* `callback`: Function called with the json from the backend as it's only parameter.

```js
var parameters = {
	first_name: "Mathias",
	last_name: "Paumgarten"
}

jsonp("http://some.url/api/info", parameters, onComplete);

function onComplete(json) { ... }
```

## request(options)

This module is used to send AJAX requests. It takes one object as argument. `options` can
contain:

* `url`: representing the path to the resource to be loaded
* `method`: The request method such as: `"GET"`, `"POST"`, etc.
* `data`: A string representation of the body sent along with the request. e.g.: Used for parameters in `"POST"` requests.
* `headers`: An object with additional headers.
* `completed`: A callback that is called in the context of the `xhr` request with two arguments: `responseText` and `status` of `xhr`. The `completed` callback is called both times. success and error.
* `success`: same as `completed` but only called when the request succeeded
* `error`: same as `completed` but only called when the request failed
