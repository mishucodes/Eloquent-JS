//When building a system that requires communication between a JavaScript program running in the browser (client-side) and a program on a server (server-side), there are several different ways to model this communication.

    //01. Remote Procedural Calls: In this model, the client-side makes a function call on the server-side, & the return value of the function call is the response from the server-side to the client-side. HTTP is just a vehicle for communication in this method.

    //02. REST (Representational State Transfer): Another approach is to build your communication around the concept of resources and HTTP methods.
        //For Example: Instead of having a function called "addUser", we make a "PUT" request to /users/larry. A resource can be fetched by making a GET request to the resource’s URL (for example, /user/larry).