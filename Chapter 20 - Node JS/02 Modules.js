//NodeJS does not provide us with standard browser bindings like document, prompt, etc.
//But it does provide us with a lot more non-browser bindings.


//01. Modules: The extra bindings that we might import inside our program. These bindings might be one of several Node's in-built modules, or might one from the Internet (NPM).
    //Some in-built Bindings: fs, http, https, etc...


//02. Require: We can import these extra bindings using the "require" keyword. Let's understand:
    //a) Node's "require" takes a string & it has to resolve it to an actual file that it can load.
    //b) Names that start with the following are resolved as files, relative to the current module’s path:
        //ba) /: stands for the root of the filesystem. 
        //bb) ./: stands for the current directory.
        //bc) ../: stands for one directory up.
        //bd) Nothing: Node's in-built modules/"node_modules" folder.
        //Some Examples:
            //a) If we ask for "/graph" from the file /tmp/robot/robot.js, Node will try to load the file "/graph.js"
            //b) If we ask for "./graph" from the file /tmp/robot/robot.js, Node will try to load the file "/tmp/robot/graph.js"
            //c) If we ask for "../graph" from the file /tmp/robot/robot.js, Node will try to load the file "/tmp/graph.js"
            //d) If we ask for "graph" from the file /tmp/robot/robot.js, Node will try to load the some module called "graph" from its in-built modules (if it exists), or from this folder called "node_modules".
    //SOME NOTES:
        //a) We may choose to include/exclude ".js" from the end of the filename. If the file is found, a ".js" is applied automatically by Node, but if it's a folder, Node will try to load a file named "index.js" inside the same.