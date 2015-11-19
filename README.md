CANE
====

[![Build Status](https://travis-ci.org/MathiasPaumgarten/cane.svg?branch=master)](https://travis-ci.org/MathiasPaumgarten/cane)
[![Dependencies Status](https://david-dm.org/MathiasPaumgarten/cane.svg)](https://david-dm.org/MathiasPaumgarten/cane)
[![Coverage](https://coveralls.io/repos/MathiasPaumgarten/cane/badge.svg?branch=coverage&service=github)](https://coveralls.io/github/MathiasPaumgarten/cane)

A modular (CommonJS based) JavaScript DOM library.


What
----

A completely modular collection of dom and ajax based utils for the browser,
writting in node-style commonJS. This allows minifiers to pull only necessery
code while giving the developer a variety of handy tools.


Goals
-----

* __Modularity__
* No global namespace
* No wrapper object
* Independent modules
* Well tested modules
* Play well with other libraries


Development
-----------

Cane uses [Grunt](http://gruntjs.com/) to manage the development tasks. Tests
are ran by the [Karma test runner](http://karma-runner.github.io/). To install
all the development dependencies run `npm install`.

To run the tests once, simply run `npm test` in the root of the repository. You
must have Chrome and Firefox installed. It will run JSHint on all the files and
then launch Chrome and Firefox and run all the tests.

The documentation is generated from the Markdown files in the `docs` directory.
To generate the docs run `grunt docs`. The docs are also automatically generated
when you are running `grunt` (or `npm start`) and a file in the `docs` directory
changes. The generated HTML files are stored in the `docs_html` directory.


License
-------

Released under the [MIT License](http://opensource.org/licenses/MIT)


Authors
-------

* [@conradz](https://github.com/conradz)
* [@MathiasPaumgarten](https://github.com/MathiasPaumgarten)
