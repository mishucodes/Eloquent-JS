//01. WebSockets: Establishing a connection between the client & a server for some data exchange. It's like a phone call, not an SMS, i.e., it's not like sending some HTTP request & then waiting for a response back; the connection is there like a pipeline via which data may flow back & forth.

//02. Long Polling: It's a hack to mimic a phone call. The client sends a conditional request, i.e., it tells the server that I have cached version x of some resource. If you have something newer, give it to me. I can wait xyz amount of time. For client, it's like a server that responds late, which is fine, expected, & simple. For a server, it's a little bit more complicated.
//Here's a statement I do not understand yet, but I think it'll be important later on:
    //A busy server that is using long polling may have thousands of waiting requests, and thus TCP connections, open. Node, which makes it easy to manage many connections without creating a separate thread of control for each one, is a good fit for such a system.


//How to do Long Polling:
    //a) ETag: Servers include this property in the response header. "Entity Tag" basically means the version number of the resource.
    //b) If-None-Match: Clients include this property in the request header. It basically refers to the version number of the resource the client currently has.
    //c) Status 304: It means "Not Modified". The server responds with this when the response's ETag is same as the request's If-None-Match.
    //d) Prefer: wait=90: Clients include this property in the request header. It means that the client is willing to wait upto 90-seconds for the response.
    //For Example:
    /*
        GET /talks HTTP/1.1
        If-None-Match: "4"
        Prefer: wait=90
                                **time passes**
        HTTP/1.1 200 OK
        Content-Type: application/json
        ETag: "5"
        Content-Length: 295
        [....]
    */