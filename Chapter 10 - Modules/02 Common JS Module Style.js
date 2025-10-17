//Before 2015, ECMA did not support "Modules" in JS. So, people discovered certain hacks to get them. Here's a behind the scenes explanation of the same:

//Before getting into CommonJS Modules, we have to understand how do we run a string as code in JS:
    //a) eval(): A function that takes a string as an argument, & executes it then & there. This is obviously bad because of name-clashing b/w bindings. For Example:
        const x = 1;
        function evalAndReturnX(code)
        {
            eval(code);
            return x;
        }
        console.log(evalAndReturnX("var x = 2")); //2
        console.log(x); //1
    //b) Function(): This is a constructor, & it takes two arguments: a string containing a comma-separated list of argument names and a string containing the code. It wraps the code in a function value so that it gets its own scope and won’t do odd things with other scopes.
        let plusOne = Function("n", "return n + 1;");
        console.log(plusOne(4)); //5
        //NOTE: This is precisely what we need for a module system. We can wrap the module’s code in a function and use that function’s scope as module scope.



//Now let's talk about CommonJS Modules. Here's an Example of us creating our own 'package' that is dependant upon two other such packages:
    //a) Dependencies:
        const ordinal = require("ordinal");
        const {days, months} = require("date-names");
    //b) Our Package:
        exports.formatDate = function(date, format)
        {
            return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag =>
                {
                    if (tag == "YYYY")
                        return date.getFullYear();
                    if (tag == "M")
                        return date.getMonth();
                    if (tag == "MMMM")
                        return months[date.getMonth()];
                    if (tag == "D")
                        return date.getDate();
                    if (tag == "Do")
                        return ordinal(date.getDate());
                    if (tag == "dddd")
                        return days[date.getDay()];
                });
        };

//01. require(): The main concept in CommonJS modules is a function called "require". When you call this with the module name of a dependency, it makes sure the module is loaded and returns its interface. This is how you can imagine require():
    require.cache = Object.create(null);
    function require(name)
    {
        if (!(name in require.cache))
        {
            let code = readFile(name);
            let module = {exports: {}};
            require.cache[name] = module;
            let wrapper = Function("require, exports, module", code);
            wrapper(require, module.exports, module);
        }
        return require.cache[name].exports;
    }
    //NOTE: Imagine that "readFile()" is a function that reads a file and returns its contents as a string.

//EXPLANATION OF REQUIRE():
    //a) To avoid loading the same module multiple times, "require()" keeps a store (cache) of already loaded modules. When called, it first checks if the requested module has been loaded and, if not, loads it. This involves reading the module’s code, wrapping it in a function, and calling it.
    //b) The interface of the 'ordinal' package we saw before is not an object but a function. A quirk of the CommonJS modules is that, though the module system will create an empty interface object for you (bound to exports), you can replace that with any value by overwriting "module.exports". This is done by many modules to export a single value instead of an interface object.
    //c) By defining 'require', 'exports', and 'module' as parameters for the generated wrapper function (and passing the appropriate values when calling it), the loader makes sure that these bindings are available in the module’s scope.
    //d) The way the string given to require is translated to an actual filename or web address differs in different systems:
        //da) When it starts with "./" or "../", it is generally interpreted as relative to the current module’s filename. So, "./format-date" would be the file named "format-date.js" in the same directory.
        //db) When the name isn’t relative, NodeJS will look for an installed package by that name.