// If you type "worldofmishu.in/index.html" into your browser’s address bar, the browser first looks up the address of the server associated with "worldofmishu.in" and tries to open a TCP connection to it on port 80 (the default port for HTTP traffic).
//If the server exists & accepts the connection, the browser might send something like this:
/*
    GET /index.html HTTP/1.1
    Host: worldofmishu.in
    User-Agent: The browser's name
*/

// Then the server responds, through that same connection:
/*
    HTTP/1.1 200 OK
    Content-Length: 12345 [bytes]
    Content-Type: text/html
    Last-Modified: Mon, 01 Jan 2010 09:41:00 GMT
    <!doctype html>
    ...the rest of the document
*/






//IMPORTANT KEYWORDS:
//01. REQUEST: The information sent by the client is called the "request". It starts with this line:
    //GET /index.html HTTP/1.1

//02. METHOD: The first word is the method of the request.
    //02A. "GET" means that we want to get the specified resource.
    //02B. "DELETE" means delete a resource.
    //02C. "PUT" means create or replace it.
    //02D. "POST" means send information to it.

//NOTE: The server is not obliged to carry out every request it gets. If you walk up to a random website and tell it to DELETE its main page, it’ll probably refuse.


//03. RESOURCE: The part after the method name is the path of the resource the request applies to. In the simplest case, a resource is simply a file on the server, but the protocol doesn’t require it to be. A resource may be anything that can be transferred as if it is a file.

//04. PROTOCOL'S [HTTP] VERSION: After the resource path, the first line of the request mentions "HTTP/1.1" to indicate the version of the HTTP protocol it is using.
    //NOTE: The server’s response will start with a version as well, followed by the status of the response, first as a three-digit status code and then as a human-readable string.
        //HTTP/1.1 200 OK
        //Status codes starting with a:
            //2: indicate that the request succeeded.
            //4: mean there was something wrong with the request.
            //5: mean an error happened on the server and the request is not to blame.


//05. HEADERS: The first line of a request or response may be followed by any number of "headers". These are lines in the form name: value that specify extra information about the request or response. For Example:
/*
    Content-Length: 12345 [bytes]
    Content-Type: text/html
    Last-Modified: Mon, 01 Jan 2010 09:41:00 GMT
*/
//NOTE: Most headers are optional, but a few are required. For example, "Host".


//06. BODY: After the headers, both requests and responses may include a blank line followed by a "body", which contains the data being sent.
//NOTE: GET and DELETE requests don’t send along any data, but PUT and POST requests do. Similarly, some response types, such as error responses, do not require a body.