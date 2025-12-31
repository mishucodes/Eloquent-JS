//01. Package.json:  This file contains some information about the project, such as its name and version, & it also lists its dependencies. It is recommended to have such a file for each project. We can create it either manually or by running "npm init".
//The "robot" from Chapter 07 & 10, might have a package.json file like this:
/*
    {
        "author": "Marijn Haverbeke",
        "name": "eloquent-javascript-robot",
        "description": "Simulation of a package-delivery robot",
        "version": "1.0.0",
        "main": "run.js",
        "dependencies":
        {
            "dijkstrajs": "^1.0.1",
            "random-item": "^1.0.0"
        },
        "license": "ISC"
    }
*/

//SOME NOTES:
    //a) When you run "npm install", NPM will install all the dependencies listed in "package.json".
    //b) When you install a specific package that is not already listed as a dependency, NPM will add it to "package.json".


//02. Versions: A package.json file lists both the program’s own version and versions for its dependencies. Versions are a way to deal with the fact that packages evolve separately, and code written to work with a package as it existed at one point may not work with a later, modified version of the package.

//03. "Semantic Versioning" NPM demands that its packages follow a schema called "Semantic Versioning", which encodes some information about which versions are compatible. A semantic version consists of three numbers, separated by periods:
    //For Example: ^2.3.0.
        //a) Every time compatibility is broken the first number has to be incremented.
        //b) Every time new functionality is added, the middle number has to be incremented.
        //c) The last number is incremented to signal bug-fixes, performance enhancements, etc.
        //d) A caret character (^) in front of the version number for a dependency indicates that any version compatible with the given number may be installed. For Example: "^2.3.0" would mean that any version greater than or equal to 2.3.0 and less than but not 3.0.0 is allowed.