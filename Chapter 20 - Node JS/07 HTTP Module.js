//00. HTTP: This module provides functionality for running HTTP servers and making HTTP requests.

//01. This is all it takes to start an HTTP server:
    const {createServer} = require("http");
    let server = createServer((request, response) =>
        {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(`<h1>Hello!</h1> <p>You asked for <code>${request.url}</code></p>`);
            response.end();
        });
    server.listen(8000);
    console.log("Listening at port 8000!");
    //NOTE: You may run this script on your own machine, you can point your web browser at http://localhost:8000/anythingYouWannaWrite to make a request to your server.

    //SOME NOTES:
        //a) The function passed as argument to createServer is called every time a client connects to the server.
        //b) The "request" & "response" bindings are objects representing the incoming and outgoing data.
        //c) To send something back, you call methods on the response object. For Instance:
            //ca) writeHead: It will write out the response headers.
            //cb) response.write: The actual response body (the document itself) is sent with this function. You are allowed to call this method multiple times if you want to send the response piece by piece.
            //cc) response.end: signals the end of the response.
        //d) The call to "server.listen" causes the server to start waiting for connections on the given port.



//02. To act as an HTTP client (i.e., to make requests), we can use the "request" function in the http module:
    const {request} = require("http");
    let requestStream = request
        (
            {
                hostname: "eloquentjavascript.net",
                path: "/20_node.html",
                method: "GET",
                headers: {Accept: "text/html"}
            },
            (response) => {console.log("Server responded with status code", response.statusCode);}
        );
    requestStream.end();

    //SOME NOTES:
        //a) The first argument to request configures the request.
        //b) The second argument is the function that should be called when a response comes in.
        //c) The "request" function returns an object that allows us to stream data into the request with the "write" method, & finish the request with the "end" method.
        //d) There’s a similar "request" function in the "https" module that can be used to make requests to https: URLs.
        //e) There are much more convenient alternatives available on NPM. For example, "node-fetch" provides the promise-based "fetch" interface that we know from the browser.