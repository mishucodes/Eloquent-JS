//01. FORMS: HTML pages may include forms, which allow the user to fill out information and send it to the server. For Example:
/*
    <form method="GET" action="example/message.html">
        <p>Name: <input type="text" name="name"></p>
        <p>Message:<br><textarea name="message"></textarea></p>
        <p><button type="submit">Send</button></p>
    </form>
*/
//EXPLANATION:
    //a) This code describes a 'form' with two fields. When you click the "Send" button, the form is "submitted", meaning that the content of its field is packed into an HTTP request and the browser navigates to the result of that request.
    //b) read point 02:

//02. QUERY STRING: When the <form> element’s method attribute is "GET" (or is omitted), the information in the form is added to the end of the action URL as a "query string". The browser might make a request to this URL:
    //GET /example/message.html?name=Jean&message=some%20message HTTP/1.1
        //EXPLANATION:
            //a) ?: End of URI.
            //b) key=value.
            //c) &: separation operator.
            //d) %: escape character followed by a hex value of character (0x20 = 32 = \n).
        //SOME USEFUL FUNCTIONS:
            encodeURIComponent("some message"); //some%20message
            decodeURIComponent("some%20message"); //some message

//POST IN FORMS: If we change the method attribute of the form to POST, the HTTP request made to submit the form will use the POST method and put the query string in the body of the request, rather than adding it to the URL. Like this:
/*
    POST /example/message.html HTTP/1.1
    Content-length: 32
    Content-type: application/x-www-form-urlencoded
    name=Jean&message=some%20message
*/