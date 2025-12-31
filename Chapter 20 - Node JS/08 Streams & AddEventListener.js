//01. Writable Streams: These are a widely used concept in Node. Such objects have a "write" method that can be passed a string or a Buffer object to write something to the stream. Their "end" method closes the stream and optionally takes a value to write to the stream before closing. Both of these methods can also be given a callback as an additional argument, which they will call when the writing or closing has finished.
//We have seen two instances of writable streams in the HTTP examples: the response object that the server could write to and the "request" object that was returned from request.


//02. createWriteStream: It is possible to create a writable stream that points at a file with the createWriteStream function from the 'fs' module. Then you can use the write method on the resulting object to write the file one piece at a time, rather than in one shot as with "writeFile".


//03. Readable Streams: These are a little more involved. Both the "request" binding that was passed to the HTTP server’s callback and the "response" binding passed to the HTTP client’s callback are readable streams. A server reads requests and then writes responses, whereas a client first writes a request and then reads a response. Reading from a stream is done using event handlers, rather than methods.


//04. AddEventListener/on: Objects that emit events in Node have a method called "on" that is similar to the addEventListener method in the browser. You give it an event name and then a function, and it will register that function to be called whenever the given event occurs.
    //SOME NOTES:
        //a) Readable streams have "data" and "end" events. The first is fired every time data comes in, and the second is called whenever the stream is at its end.
        //b) A file can be read as a readable stream by using the createReadStream function from fs.
    //For Example: This code creates a server that reads request bodies and streams them back to the client as uppercase text:
        const {createServer} = require("http");
        createServer((request, response) =>
            {
                response.writeHead(200, {"Content-Type": "text/plain"});
                request.on("data", chunk => response.write(chunk.toString().toUpperCase()));
                request.on("end", () => response.end());
            }).listen(8000);
    //The following piece of code, when run with the above-mentioned server active, will send a request to that server and write out the response it gets:
        const {request} = require("http");
        request
        (
            {hostname: "localhost", port: 8000, method: "POST"},
            response =>
                {
                    response.on("data", chunk => process.stdout.write(chunk.toString()));
                }
        ).end("Hello server");
        //-> HELLO SERVER