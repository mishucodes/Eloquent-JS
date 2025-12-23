//01 FETCH: It's a new interface through which browser JS can make HTTP requests. Since it is relatively new, it conveniently uses promises (which is rare for browser interfaces). For Example:
/*
    fetch("example/data.txt")
    .then(response =>
        {
            console.log(response.status); //200
            console.log(response.headers.get("Content-Type")); //text/plain
        });
*/

//IMPORTANT NOTES:
    //a) Calling fetch returns a promise that resolves to a "Response" object holding information about the server’s response, such as its status code and its headers.
    //b) The headers are wrapped in a Map-like object that treats its keys (the header names) as case insensitive.
    //c) The promise returned by fetch resolves successfully even if the server responded with an error code.
    //d) It might be rejected only if there is a network error or if the server that the request is addressed to can’t be found.
    //e) The first argument to fetch is the URL that should be requested.
        //ea) When that URL doesn’t start with a protocol name (such as http:), it is treated as relative, which means it is interpreted relative to the current document.
        //eb) When it starts with a slash (/), it replaces the current path, which is the part after the server name.
        //ec) When it does not, the part of the current path up to and including its last slash character is put in front of the relative URL.

//02. JSON/TEXT METHODS: The initial promise is resolved as soon as the response’s headers have been received. Because reading the response's body might take a while longer, the response object's json/text methods also return a promise.
    fetch("example/data.txt")
        .then(resp => resp.json())
        .then(json => console.log(json));


//03. METHODS ON FETCH: By default, fetch uses the GET method to make its request and does not include a request body. You can configure it differently by passing an object with extra options as a second argument. For example:
    fetch("example/data.txt", {method: "DELETE"})
        .then(response => console.log(response.status)); //405 (Method not Allowed)
    
//REQUEST HEADERS & BODY: To add a request body, you can include a "body" option. To set headers, there’s the "headers" option. For example:
    fetch("example/data.txt", {headers: {Range: "bytes=8-19"}})
        .then(resp => resp.text())
        .then(console.log);
    //NOTE: The browser will automatically add some request headers, such as “Host” and those needed for the server to figure out the size of the body. But adding your own headers is often useful to include things such as authentication information or to tell the server which file format you’d like to receive.