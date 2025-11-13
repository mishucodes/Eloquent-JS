//01. Event handlers: They're used to detect and react to certain events on the webpage.
//The "element.addEventListener(eventName, handlerFunction)" method is used to register such a handler. Each event has a type ("keydown", "focus", & so on) that identifies it. When an event handler is called, it’s passed an 'event' object with additional information about the event.
    //For Example:
        let element = {};
        function fn(event) {console.log("event name:", event.name)};
        element.addEventListener("click", fn); //'fn' will be executed when 'element' is 'clicked'...
        element.removeEventListener("click", fn); //no event is captured on the element any more...
        //NOTE: The function given to ".removeEventListener()" has to be the same function value given to .addEventListener().


//02. Event Propagation: If a button inside a paragraph is clicked, event handlers on the paragraph will also see the click event. But if both the paragraph and the button have a handler, the more specific handler—the one on the button—gets to go first. The event is said to propagate outward from the node where it happened to that node’s parent node and on to the root of the document. Please note that 'most' (not all) events propagate.

//03. SOME PROPERTIES & METHODS IN THE EVENT OBJECT:
    //a) "event.stopPropagation()" method prevents handlers further up from receiving the event.
    //b) "event.target" returns the name of the type of the event.
    //c) "event.preventDefault()" prohibits the default behaviour (e.g., not opening a link when clicked).






//NOTE: I did my best in these notes, but given the nature of this & further chapters, I recommend you refer to the actual book & MDN docs.