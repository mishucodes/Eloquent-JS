let {stat, readdir, readFile} = require("fs").promises;
let {resolve, sep} = require("path");
let baseDirectory = process.cwd();

let regEx = process.argv[2];
if(!regEx)
{
    console.log("This program expects command-line arguments. RegEx + File Name(s)");
    process.exit(0);
}
searchRegExInMultipleFiles(regEx, process.argv);



//Helper Functions:
    //a) Search RegEx in Multiple Files:
        function searchRegExInMultipleFiles(regEx, arrayOfFiles, prependPathWith = "")
        {
            let startFrom = arrayOfFiles == process.argv? 3: 0;
            for(let i = startFrom; i < arrayOfFiles.length; i++)
            {
                searchRegExInFile(regEx, prependPathWith + arrayOfFiles[i])
                    .then(resolve =>
                        {
                            if(typeof resolve === "object" && resolve?.type === "directory")
                                searchRegExInMultipleFiles(regEx, resolve.namesOfFiles, resolve.dirPath + sep);
                            else if(resolve)
                                console.log(resolve);
                        })
                    .catch(error => console.log(error));
            }
        }
    //b) Search RegEx in a Single File:
        async function searchRegExInFile(regEx, fileNameWithPath)
        {
            regEx = new RegExp(regEx);
            let fileContent = await readThisFile(fileNameWithPath);
            if(fileContent === null)
                return null;
            if(typeof fileContent === "object" && fileContent.type === "directory")
                return fileContent;
            if(regEx.test(fileContent))
                return fileNameWithPath;
        }
    //c) Read File:
        async function readThisFile(fileNameWithPath)
        {
            let path = urlPath(fileNameWithPath);
            if(!path)
            {
                console.log(`access to file: ${fileNameWithPath} is forbidden`);
                return null;
            }
            let stats;
            try {stats = await stat(path)}
            catch(error)
            {
                if(error.code != "ENOENT")
                {
                    console.log(error.message);
                    return null;
                }
                else
                {
                    console.log("file not found");
                    return null;
                }
            }
            if(stats.isDirectory())
            {
                return {type: "directory", namesOfFiles: await readdir(fileNameWithPath), dirPath: fileNameWithPath};
            }
            else
                return await readFile(path, "utf8");
        }


//Common Helper Functions to All Functions:
    //a) URL_PATH:
        function urlPath(url)
        {
            let pathType = "";
            let fileName = url;
            for(let i = 0; ; i++)
            {
                if(url[i] === sep)
                {
                    pathType += url[i];
                    fileName = url.slice(i);
                    break;
                }
                else
                    pathType += url[i];
            }
            let fullPath = resolve(pathType);
            if(fullPath != baseDirectory)
                return false; //outside base directory...
            return fullPath + fileName;
        }