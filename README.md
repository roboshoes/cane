CANE.JS
=======

A modular (AMD based) JavaScript DOM library.


Why?
----

There are too many dom, style, ajax libraries out there. Many of them well tested, highly maintained and fast growing (jQuery, MooTools, etc.). So why creating yet another one.
__Modular__. All those libraries bundle everything up in a nice 80K (or whatever) sized file and that's what you get. Sometimes a developer doesn't need every method that comes with the library.
AMD ([What and Why](http://requirejs.org/docs/whyamd.html)) offers a dependency management method for every size JavaScript project. That means, in the end your code includes only what you use. As more and more developers and libraries jump on the band wagon, there is yet no AMD based alternative for DOM and style manipulation. (I might be generalizing here, at least I found no proper one).


Important
---------

This Project is very early in development and at this point more a proof of concept than a full fledged framework.


Dependencies
------------

Cane.js is built upon [mout](http://moutjs.com) which has do be available under the path `mout`.


Goals
-----

* __Be modular__
* No global name space
* No wrapper object
* Independent modules
* Well tested modules
* Play well with others


License
-------

Released under the [MIT License](http://opensource.org/licenses/MIT)