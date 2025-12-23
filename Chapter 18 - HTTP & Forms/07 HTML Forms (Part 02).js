//SOME IMPORTANT NOTES ON THE <FORM> ELEMENT IN HTML:
    //a) When a field is contained in a <form> element, its DOM element will have a "form" property linking back to the form’s DOM element.
    //b) The <form> element in turn, has a property called "elements" that contains an array-like collection of the fields inside it.
    //ca) The "name" attribute of a form field determines the way its value will be identified when the form is submitted.
    //cb) It can also be used as a property name when accessing the form’s elements property, which acts both as an array-like object (accessible by number) and a map (accessible by name).
    //d) A button with a "type" attribute of "submit" will, when pressed, cause the form to be submitted. Pressing "enter" when a form field is focused has the same effect.
    //e) Submitting a form normally means that the browser navigates to the page indicated by the form’s action attribute, using either a GET or a POST request. But before that happens, a "submit" event is fired.
    //f) Intercepting "submit" events in JS has various uses. We can write code to verify that the values the user entered make sense and immediately show an error message instead of submitting the form.