Contributing
============

Patches and new features is what makes Cane great. Use the issues section to propose
new features or even better, form a Pull Request. Before you do so please take a
look at a few guides described below.
We try to keep the code and the style in this repository as consistent as possible.


Build a Pull Request
--------------------

* Every PR should only include one feature or patch. If you have multiple
contributions, make it multiple PRs.
* Make sure the code is well tested. While you're at it, make sure it's not
breaking any existing tests.
* Proper commit messages and try to keep the commit history clean.
* Make sure the code is JSHinted. To do this automatically, check out the
_Development_ section

__Note__: If you are proposing a major change, please open an issues before you
open the PR so it can be discussed.


Develpment
----------

Cane uses [Grunt](http://gruntjs.com/) to manage the development tasks. Tests
are ran by the [Karma test runner](http://karma-runner.github.io/). To install
all the development dependencies run `npm install`.

To start the Karma server, run `grunt` in the root of the repository (you can
also run `npm start` if you do not have Grunt installed globally). Then attach
all the browsers you want to test by navigating to `http://localhost:9876/`. The
tests will be automatically ran when a file changes.

To run the tests once, simply run `npm test` in the root of the repository. You
must have Chrome and Firefox installed. It will run JSHint on all the files and
then launch Chrome and Firefox and run all the tests.


Style guide
-----------

The style guide is partly enforced through JSHint.

* 4 spaces tabs
* double quotes
* named functions if possible (`function foo() {}` over `var foo = function() {}`)

Example:

```js
function named(a, b, c) {
}

call("a", "b");
if (condition) {
    call(function() { });
}

call({ a: 1, b: 2 });
a = [1, 2, 3];

test = {
    my: "style",
    foo: "bar"
};
```
