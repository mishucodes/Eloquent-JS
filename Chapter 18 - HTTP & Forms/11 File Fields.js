//File fields were originally designed as a way to upload files from the user’s machine through a form. In modern browsers, they also provide a way to read such files from JS programs.
//A file field usually looks like a button labeled with something like “choose file” or “browse”, with information about the chosen file next to it. For Example:
    /*
        <input type="file">
        <script>
            let input = document.querySelector("input");
            input.addEventListener("change", () =>
                {
                    if (input.files.length > 0)
                    {
                        let file = input.files[0];
                        console.log("You chose", file.name);
                        if (file.type)
                        console.log("It has type", file.type);
                    }
                });
        </script>
    */

//SOME NOTES:
    //a) The "files" property of a file field element is an array-like object containing the files chosen in the field.
    //b) The reason there isn’t simply a file property is that file fields also support a multiple attribute, which makes it possible to select multiple files at the same time.
    //c) Objects in the files object have properties such as:
        //ca) name: the filename.
        //cb) size: the file’s size in bytes.
        //cc) type: the media type of the file (text/plain/image/jpeg/etc.)
    //d) Since reading a file from disk can take time, the interface must be asynchronous to avoid freezing the main thread.




//READING A FILE IN JS: Reading a file is done by creating a "FileReader" object, registering a "load" event handler for it, and calling its "readAsText" method, giving it the file we want to read. Once loading finishes, the reader’s result property contains the file’s content.
    //For Example:
    /*
        <input type="file" multiple>
        <script>
            let input = document.querySelector("input");
            input.addEventListener("change", () =>
                {
                    for (let file of Array.from(input.files))
                    {
                        let reader = new FileReader();
                        reader.addEventListener("load", () =>
                            {
                                console.log("File", file.name, "starts with", reader.result.slice(0, 20));
                            });
                        reader.readAsText(file);
                    }
                });
        </script>
    */
//FileReaders also fire an "error" event when reading the file fails for any reason. The error object itself will end up in the reader’s error property. This interface was designed before promises became part of the language. You could wrap it in a promise like this:
    function readFileText(file)
    {
        return new Promise((resolve, reject) =>
            {
                let reader = new FileReader();
                reader.addEventListener("load", () => resolve(reader.result));
                reader.addEventListener("error", () => reject(reader.error));
                reader.readAsText(file);
            });
    }