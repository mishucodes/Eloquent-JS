//00. FS: One of the most commonly used built-in modules in Node is the "fs" module, which stands for file system. It exports functions for working with files and directories/folders. For example:
    //01. readFile: This function takes following arguments:
        //a) File name with path?.
        //b) The character encoding to be used to decode the file into a string. Please note that if we do not pass an encoding, Node will assume we're interested in the binary data, & it'll give us a "Buffer Object" instead of a string. This is an array-like object that contains numbers representing the bytes in the file.
        //c) Function to run with & once that file is decoded.
            let {readFile} = require("fs");
            readFile("06a file.txt", "utf8", (error, text) =>
                {
                    if (error)
                        throw error;
                    console.log("The file contains:", text);
                });

    //02. writeFile: This function takes following arguments:
        //a) File name with path?
        //b) Data to be written to the file.
        //c) Function to run with & once that file is written & created (if required).
            let {writeFile} = require("fs");
            writeFile("06b graffiti.txt", "Hello World", err =>
                {
                    if (err)
                        console.log(`Failed to write file: ${err}`);
                    else
                        console.log("File written.");
                });

    //03. readdir: This function will return the files in a directory as an array of strings.
    //04. stat: This function will retrieve information about a file.
    //05. rename: This function will rename a file.
    //06. unlink: This function will remove a file.



//IMPORTANT NOTES:
    //a) There is an object promises exported from the fs package since version 10.1 that contains most of the same functions as fs but uses promises rather than callback functions.
        let{readFile} = require("fs").promises;
        readFile("file.txt", "utf8").then(text => console.log("The file contains:", text));
    //b) Many of the functions in fs also have a synchronous variant, which has the same name with Sync added to the end. For example, the synchronous version of readFile is called readFileSync.
        const {readFileSync} = require("fs");
        console.log("The file contains:", readFileSync("file.txt", "utf8"));
        //NOTE: While such a synchronous operation is being performed, the program (main thread) is stopped entirely.