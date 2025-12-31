//01. "process": It's a global object in NodeJS that has several useful methods & properties. For instance:
    //a) exit(status): A method that exits/suspends the current JS program & tells the program that started node its exit status.
    //b) argv: Command-Line Arguments given to the script.
        //ba) Index 0 is the program that invoked the script. For Example: "/path/node".
        //bb) Index 1 is the JS file. For Example: "path/01 Process.js"
        //bc) Index 2-Infinity are actual CLAs.


//Try this:
    console.log(process.argv);