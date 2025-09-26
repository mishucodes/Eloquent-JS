//Author writes:
    //We can read properties like length and toUpperCase from string values. But if we try to add a new property, it doesn’t stick.
    let kim = "Kim";
    kim.age = 88;
    console.log(kim.age); // → undefined
    //Values of type string, number, and Boolean are not objects, and though the language doesn’t complain if you try to set new properties on them, it doesn’t actually store those properties.


//But he doesn't explain why - especially the part "though the language [JS] doesn’t complain". Why does JS not complain?
//Short Answer: "Auto-Boxing".
//Long Answer: 'Auto-Boxing' basically means that every time we try to access a property/method on a primitive value in JS, the value is first internally converted to an object, then the property is accessed/method is run on that ephemeral object.
    //NOTE: I think I must mention that I'm not sure why did JS authors choose not to throw a syntax error when we try to assign something to these properties. I mean I think they could have.