//01. Prototypes: In addition to their own set of properties, most objects also have a 'prototype'. A 'prototype' is basically another object that is used as a fallback source for properties. Suppose an object gets a request for a property that it does not have. It will not immediately return a bad value, instead its prototype will be searched for that property, then the prototype’s prototype, and so on. The big daddy (last in this chain) of all object prototypes is the "Object.prototype".
//Take a look:
let empty = {};
console.log(empty.toString); // -> [Function: toString]...
console.log(empty.toString()); // -> [object Object]...
console.log(Object.getPrototypeOf(empty)); // -> "Object.prototype" is prototype of all objects by default...
console.log(Object.getPrototypeOf(Object.prototype)); //-> null (there's no one above "Object.prototype")...

//SOME NOTES ON "[object Object]":
    //a) Every object that doesn’t define its own "toString()" uses this default implementation.
    //b) It returns a string in the format: "[object Type]". Example:
        console.log({}.toString()); // -> [object Object]
        console.log([].toString()); // -> "" (since arrays have their own ".toString()" method...)
        console.log(Object.prototype.toString.call([])); // -> [object Array] (We're forcing Object.prototype's "toString()" onto an array...)
        console.log(Object.prototype.toString.call(new Date())); // -> [object Date] (ibid...)
    //c) It’s a very old design decision from the early days of JavaScript (inspired from Java). The format "[object Type]" was chosen to be:
        //ca) machine-readable (consistent structure),
        //cb) human-readable enough,
        //cc) technical-looking enough to not be mistaken for a normal string.
    //d) Hence, for a normal object, "Object.prototype.toString" gives: "[object Object]".
    //e) This default ".toString()" is often used for type checking. For example:
        const getTypeOf = (value) => Object.prototype.toString.call(value);
        console.log(getTypeOf(42)); // -> [object Number]
        console.log(getTypeOf("hi")); // -> [object String]
        console.log(getTypeOf([])); // -> [object Array]
        console.log(getTypeOf({})); // -> [object Object]



//02. Just as an objects have an "Object.prototype", functions have a "Function.prototype", and arrays have an "Array.prototype".
    console.log(Object.getPrototypeOf(Math.max) == Function.prototype); //true
    console.log(Object.getPrototypeOf([]) == Array.prototype); //true
    //NOTE: But the prototype of these "Function.prototype" & "Array.prototype" is also "Object.prototype".
        console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype);
        console.log(Object.getPrototypeOf(Array.prototype) === Object.prototype);


//03. We can use "Object.create()" to create an object with a specific prototype. For example:
    let protoRabbit =
    {
        speak: function(line)
        {
            console.log(`The ${this.type} rabbit says '${line}'`);
        }
    };
    let killerRabbit = Object.create(protoRabbit);
    killerRabbit.type = "killer";
    killerRabbit.speak("I AM A DANGEROUS RABBIT!"); // -> The killer rabbit says 'I AM A DANGEROUS RABBIT'...
    //NOTE: The “protoRabbit" now acts as an container for the properties. An individual rabbit object, like the "killerRabbit", contains properties that apply only to itself (such as 'type'). 'killerRabbit' & other such rabbits can rely on 'protoRabbit' for other shared properties (like "speak()"). It'll save space, & make maintenance easier.