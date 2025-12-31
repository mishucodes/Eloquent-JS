//This is an HTTP server that allows remote access to a file system.
const {createServer} = require("http");
const methods = Object.create(null);
createServer((request, response) =>
    {
        let handler = methods[request.method] || notAllowed;
        handler(request)
            .catch(error =>
                {
                    if(error.status != null)
                        return error;
                    return {body: String(error), status: 500};
                })
            .then(({body, status = 200, type = "text/plain"}) =>
                {
                    response.writeHead(status, {"Content-Type": type});
                    if(body && body.pipe)
                        body.pipe(response);
                    else
                        response.end(body);
                });
    }).listen(8000);


//Definitions for Methods:
    //a) NOT ALLOWED:
        async function notAllowed(request)
        {
            return {status: 405, body: `Method ${request.method} not allowed.`};
        }
    //b) GET:
        const {createReadStream} = require("fs");
        const {stat, readdir} = require("fs").promises;
        const mime = require("mime");
        methods.GET = async function(request)
        {
            let path = urlPath(request.url);
            let stats;
            try
            {
                stats = await stat(path);
            }
            catch(error)
            {
                if(error.code != "ENOENT")
                    throw error;
                else
                    return {status: 404, body: "File not found"};
            }
            if(stats.isDirectory())
            {
                return {body: (await readdir(path)).join("\n")};
            }
            else
            {
                return {body: createReadStream(path),
                type: mime.getType(path)};
            }
        };
    //c) DELETE:
        const {rmdir, unlink} = require("fs").promises;
        methods.DELETE = async function(request)
        {
            let path = urlPath(request.url);
            let stats;
            try
            {
                stats = await stat(path);
            }
            catch(error)
            {
                if (error.code != "ENOENT")
                    throw error;
                else
                    return {status: 204};
            }
            if(stats.isDirectory())
                await rmdir(path);
            else
                await unlink(path);
            return {status: 204};
        };
    //d) PUT:
        const {createWriteStream} = require("fs");
        methods.PUT = async function(request)
        {
            let path = urlPath(request.url);
            await pipeStream(request, createWriteStream(path));
            return {status: 204};
        };
        //Helper Function:
            function pipeStream(from, to)
            {
                return new Promise((resolve, reject) =>
                    {
                        from.on("error", reject);
                        to.on("error", reject);
                        to.on("finish", resolve);
                        from.pipe(to);
                    });
            }
    //e) MKCOL:
        const { mkdir } = require("fs").promises;
        methods.MKCOL = async function (request)
        {
            let path = urlPath(request.url);
            try
            {
                let stats = await stat(path);
                if (stats.isDirectory())
                    return {status: 204};
                else
                    return {status: 400, body: "A File with the same name already exists."};
            }
            catch(error)
            {
                if (error.code !== "ENOENT")
                    throw error;
                await mkdir(path);
                return {status: 204};
            }
        };

//Common Helper Functions to All Methods:
    //a) URL_PATH:
        const {parse} = require("url");
        const {resolve, sep} = require("path");
        const baseDirectory = process.cwd();
        function urlPath(url)
        {
            let {pathname} = parse(url);
            let path = resolve(decodeURIComponent(pathname).slice(1));
            if(path != baseDirectory && !path.startsWith(baseDirectory + sep))
                throw {status: 403, body: "Forbidden"};
            return path;
        }