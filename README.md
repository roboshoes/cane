CANE.JS
=======

[![Build Status](https://travis-ci.org/MathiasPaumgarten/cane.png)](https://travis-ci.org/MathiasPaumgarten/cane)

A modular (AMD based) JavaScript DOM library.


Why?
----

There are too many dom, style, and ajax libraries out there. Many of them well
tested, highly maintained and fast growing (jQuery, MooTools, etc.). So why
create yet another one? __Modular__. All those libraries bundle everything up in
a nice 80K (or whatever) sized file and that's what you get. Sometimes a
developer doesn't need every method that comes with the library.
[AMD](http://requirejs.org/docs/whyamd.html) offers a dependency management
solution for any size of JavaScript project. That means that after optimization
your code includes only what you use. Even as more and more developers and
libraries jump on the band wagon, there is no AMD based alternative for DOM and
style manipulation. (I may be generalizing here, at least I did not find a
proper one).


Important
---------

This project is very early in development and at this point is more a proof of
concept than a full fledged framework.


Dependencies
------------

Cane.js uses [mout](http://moutjs.com) which has do be available under the path
`mout`.


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

Cane.js uses [Grunt](http://gruntjs.com/) to manage the development tasks. Tests
are ran by the [Karma test runner](http://karma-runner.github.io/). To install
all the development dependencies run `npm install`.

To start the Karma server, run `grunt` in the root of the repository (you can
also run `npm start` if you do not have Grunt installed globally). Then attach
all the browsers you want to test by navigating to `http://localhost:9876/`. The
tests will be automatically ran when a file changes.

To run the tests once, simply run `npm test` in the root of the repository. You
must have Chrome and Firefox installed. It will run JSHint on all the files and
then launch Chrome and Firefox and run all the tests.


License
-------

Released under the [MIT License](http://opensource.org/licenses/MIT)