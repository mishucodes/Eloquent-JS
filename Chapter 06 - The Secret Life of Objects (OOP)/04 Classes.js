//JS’s prototype system can be interpreted as a somewhat informal take on an OOP concept called 'classes'.
//01. Class: Something that defines the 'shape' of a type of objects that will be created from it ('shape' here mean what methods and properties will the objects have). Such objects will be called 'instances' of this class.


//There are many ways to create classes in JS. Let's see:

//01. Using Simple Functions & Simple Objects: res ipsa loquitor.
    let protoRabbit = {speak(line) {console.log(`The ${this.type} rabbit says '${line}'`);}}; //an object with a fn as a member.
    function makeRabbit(type)
    {
        let rabbit = Object.create(protoRabbit);
        rabbit.type = type;
        return rabbit;
    }
    let redRabbit = makeRabbit('red');
    redRabbit.speak('hello');


//02. Using the 'new' Keyword: If we put the keyword 'new' in front of a function call, the function is treated as a 'constructor' function. This means that an object with the right prototype is automatically created, & bound to 'this' in the function. This object is then returned at the end of the function:
    function Rabbit(type)
    {
        this.type = type;
    }
    //NOTE: All non-arrow functions automatically get a property named 'prototype', which by default holds an empty object whose prototype is "Object.prototype". You can overwrite it with a new object if you want. Or you can add properties to the existing object like this:
    Rabbit.prototype.speak = function(line)
        {
            console.log(`The ${this.type} rabbit says '${line}'`);
        };
    let swedishRabbit = new Rabbit('Swedish');
    swedishRabbit.speak('Hej!')
    //IMPORTANT NOTE: It is important to understand that the actual prototype of a constructor function is "Function.prototype", since constructors are functions at the end of the day. But every non-arrow function object (yes, functions are technically objects) automatically gets a property called 'prototype' when it’s created. When we use these functions as constructors, JS will use this 'prototype' property of the function object as the prototype of the objects created via this constructor function.


//03. Class Notation: Post-2015, we have a new way of doing all of ibid:
    class NewRabbit
    {
        constructor(type)
        {
            this.type = type;
        }
        speak(line)
        {
            console.log(`The ${this.type} rabbit says '${line}'`);
        }
    }
    let killerRabbit = new NewRabbit("killer");
    let blackRabbit = new NewRabbit("black");
//SOME NOTES ON CLASS DECLARATIONS (ibid):
    //a) The 'class' keyword starts a "class declaration", which allows us to define a constructor and a set of methods all in a single place. Any number of methods may be written inside the declaration’s braces. The one named 'constructor' is treated specially. It provides the actual constructor function. The others are packaged into that constructor’s 'prototype'.
        //CAUTION: Class declarations, as of 2015 (03rd ed. of the book), allow only 'methods'. Since 2015, ECMA has added a lot more capabilities to JS. Check my other repo "40 Days of JS" for more updated info. on those features!
    //b) JS Classes can be used as expressions, but they will not be 'object' values, but rather a 'function' value.
        console.log(Rabbit);
        console.log(Rabbit.prototype);
    //c) We're also allowed to define anonymous classes:
        let anonClass = class
            {
                constructor(x)
                {
                    this.x = x;
                }
                getX() {return this.x};
            }
        let newAnon = new anonClass(0);
        console.log(newAnon);
        console.log(newAnon.x);
        console.log(newAnon.getX());