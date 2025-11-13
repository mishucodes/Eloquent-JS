//01. Web-Worker: A worker is a JS process that runs alongside the main script, on its own timeline (thread). This is used when you really do want to do some time-consuming thing in the background without freezing the page. For Example:
    //Imagine that squaring a number is a heavy task. We could write a file called "code/squareworker.js" that responds to messages by computing a square and sending a message back.
        addEventListener("message", event =>
            {
                postMessage(event.data * event.data);
            });
        //NOTE: To avoid the problems of having multiple threads touching the same data, workers do not share their global scope or any other data with the main script’s environment. Instead, you have to communicate with them by sending messages back and forth.
    //This code spawns a worker running that script, sends it a few messages, and outputs the responses.
        let squareWorker = new Worker("code/squareworker.js");
        squareWorker.addEventListener("message", event =>
            {
                console.log("The worker responded:", event.data);
            });
        squareWorker.postMessage(10);
        squareWorker.postMessage(24);

//IMPORTANT NOTE: The "postMessage" function sends a message, which will cause a "message" event to fire in the receiver. The script that created the worker sends and receives messages through the Worker object, whereas the worker talks to the script that created it by sending and listening directly on its global scope. Only values that can be represented as JSON can be sent as messages—the other side will receive a copy of them, rather than the value itself.