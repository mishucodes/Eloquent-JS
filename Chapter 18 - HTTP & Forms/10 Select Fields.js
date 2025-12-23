//01. Select fields: They are conceptually similar to radio buttons, but where a radio button puts the layout of the options under our control, the appearance of a <select> tag is determined by the browser.
    //SOME NOTES:
        //a) When given the multiple attribute, a <select> tag will allow the user to select any number of options, rather than just a single option.
        //b) Each <option> tag has a value. This value can be defined with a "value" attribute. When that is not given, the text inside the option will count as its value.
        //ca) The value property of a <select> element reflects the currently selected option.
        //cb) For a multiple field, though, this property doesn’t mean much.
        //d) The <option> tags for a <select> field can be accessed as an array-like through the field’s "options" property.
        //e) Each option has a property called "selected".