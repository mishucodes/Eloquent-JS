//We can use "createServer" to start an HTTP server. In the function that handles a new request, we must distinguish between the various kinds of requests (as determined by the method and the path) that we support. This can be done with a long chain of if statements, but there is a nicer way:

    //01. Router: It is a component that helps dispatch a request to the function that can handle it. For Example:
        //You can tell the router, for example, that PUT requests with a path that matches the regular expression /^\/talks\/([^\/]+)$/ can be handled by a given function.
        //In addition, it can help extract the meaningful parts of the path (in this case the talk title), wrapped in parentheses in the regular expression, and pass them to the handler function.