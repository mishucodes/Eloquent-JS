//Forms were originally designed for the pre-JS Web to allow web sites to send user-submitted information in an HTTP request. This design assumes that interaction with the server always happens by navigating to a new page.
//But their elements are part of the DOM. Hence, it is possible to inspect & control such input fields with JS programs.


//01. FORMS: A web form consists of any number of <input> fields grouped in a <form> tag. HTML allows several different styles of fields. A lot of field types use the <input> tag. This tag’s type attribute is used to select the field’s style.
//These are some commonly used <input> types:
    //a) text: A single-line text field.
    //b) password: Same as text but hides the text that is typed.
    //c) checkbox: An on/off switch.
    //d) radio: (Part of) a multiple-choice field.
    //e) file: Allows the user to choose a file from their computer.

//We also have some tags like:
    //a) <textarea><textarea/>
    //b) <select>
    //      <option>Apples</option>
    //      <option>Bananas</option>
    //      <option>Mangoes</option>
    //   <select/>


//SOME NOTES:
    //a) Whenever the value of a form field changes, it will fire a "change" event.
    //b) Whenever an element is clicked in a form, the form fires a "focus" event.
    //c) The value in "document.activeElement" corresponds to the currently focused element.
    //d) For some pages, the user is expected to want to interact with a form field immediately. JS can be used to focus this field when the document is loaded, but HTML also provides the autofocus attribute.
    //e) Browsers traditionally also allow the user to move the focus through the document by pressing the tab key. We can influence the order in which elements receive focus with the "tabindex" attribute. The following example will let the focus jump from the "text" input to the "OK" button, rather than going through the help link first:
        /*
            <input type="text" tabindex=1>
            <a href=".">(help)</a>
            <button onclick="console.log('ok')" tabindex=2>OK</button>
        */
   //f) By default, most types of HTML elements cannot be focused. But you can add a tabindex attribute to any element that will make it focusable.
   //g) A tabindex of -1 makes tabbing skip over an element, even if it is normally focusable.


//02. DISABLED FIELDS: All form fields can be disabled through their "disabled" attribute.
    /*
        <p>Some Text here<p/>
        <button disabled>OK</button>
    */
//Disabled fields cannot be focused or changed, and browsers make them look gray and faded.