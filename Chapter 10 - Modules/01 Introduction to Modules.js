//Programs grow organically. Pieces of functionality are added as the programmer identifies new needs. Keeping such a program well structured requires constant attention and work. This is work that will pay off only in the future, i.e., the next time someone works on the program. So it’s tempting to neglect it and allow the various parts of the program to become deeply entangled.
//The phrase “big ball of mud” is often used for such large, structureless programs. Everything sticks together, and when you try to pick out a piece, the whole thing comes apart, and you succeed only in making a mess.




//01. Module: Modules are an attempt to avoid these problems. A module is a piece of program that specifies which other pieces it relies on and which functionality it provides for other modules to use (its interface).

//02. Dependencies: A good module system also requires modules to specify which code they use from other modules. These relations are called "dependencies". If module A uses functionality from module B, it is said to "depend on" that module.

//03. Packages: It's a chunk of code that can be distributed (copied and installed). It may contain one or more modules and has information about which other packages it depends on. A package also usually comes with documentation explaining what it does so that people who didn’t write it might still be able to use it.
//When a problem is found in a package or a new feature is added, the package is updated. Now the programs that depend on it (which may also be packages) can copy the new version to get the improvements that were made to the code.
//Working in this way requires infrastructure. We need a place to store and find packages and a convenient way to install and upgrade them. In the JS world, this infrastructure is provided by "NPM" (https://npmjs.com).

//04. NPM: NPM is two things:
    //a) An online service where you can download (and upload) packages.
    //b) A program (bundled with Node.js) that helps you install and manage them.

//SOME STATE LAW ON NPM:
    //a) By default, you own the copyright to the code you write, and other people may use it only with your permission. But many packages are published under a license that explicitly allows other people to use it.
    //b) Some licenses require you to also publish code that you build on top of the package under the same license.
    //c) Others are less demanding, requiring only that you keep the license with the code as you distribute it.