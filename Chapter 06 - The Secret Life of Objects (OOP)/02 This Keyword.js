//01. "this" Keyword: When a non-arrow function is called as a method, as in object.method(), the binding called 'this' in function's body refers to the object on which it was called. For example:
function speak(str)
{
    console.log(`The ${this.type} rabbit says '${str}'`);
}
let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};
whiteRabbit.speak("I am White"); // -> The white rabbit says 'I am White'...
hungryRabbit.speak("I am Hungry"); // -> The hungry rabbit says 'I am Hungry'...

//NOTE: You can manually decide what 'this' will refer to in the speak() function. For example:
    //a) .call():
    speak.call(whiteRabbit, 'I like carrots'); //01st argument will be 'this'...
    //b) .bind():
        //ba)
        let makeHungryRabbitSpeak = speak.bind(hungryRabbit); //returns a fn value...
        makeHungryRabbitSpeak('I do not like carrots');
        //bb)
        speak.bind(whiteRabbit)('I got invoked immediately'); //executed that returned fn immediately (THIS IS NOT CURRYING)...
    //c) .apply():
    speak.apply(whiteRabbit, ['this syntax is weird']); //another way, but I'm not sure why did JS authors choose such syntax...





//SOME VERY IMPORTANT NOTES ON ARROW FUNCTIONS & 'THIS' KEYWORD:

    //a) Non-arrow functions have their 'this' determined when they're invoked/called (dynamic binding); & the value of 'this' depends on how the function is invoked. In other words, every time we call a non-arrow function, that function gets a 'this' argument, which refers to the object as a method of which the function is being called. But when we call this function as a method of no apparent object, we're still calling it as method of the global/window object. For instance:
        function fn() {console.log(this)}; fn(); //prints global/window object...
        //NOTE: A fn implicitly being called on this global object gets 'undefined' tied to 'this' keyword in JS's "Strict Mode".
    
    //b) Arrow Functions, on the other hand, do not assign the 'this' keyword to the object as a method of which they're being called. Rather, the value of their 'this' gets determined/captured at the time of creation/definition of these functions (lexical binding). Hence:
        //ba)
            let arrFn = () => console.log(this); arrFn(); //prints an empty/non-existent object See "PS" below for more details...
        //bb)
            function nestedFn() {(() => console.log(this))();} nestedFn(); //the arrow fn prints the global/window object since the arrow function is being defined inside the nestedFn(); & inside nestedFn(), 'this' refers to the global object. Hence, the arrow function captured this particular value for 'this'...
        //bc)
            function nestedFn2() {arrFn();} nestedFn2(); //this prints an empty object because at the time of defining the inside arrow function "arrFn()", 'this' referred to an empty/non-existent object (supra). Again, what truly matters is what 'this' was referring to when the arrow function was being defined.

//PS: Those "empty/non-existent objects" above-mentioned are not really 'empty' & 'non-existent'. They're actually "module.exports". In non-module JS files, it's an empty object; in ES modules, this is 'undefined'; & in browser scripts, this is the 'window' object.


//LONG STORY SHORT (TLDR):
    //a) Non-arrow functions: 'this' is bound dynamically at call time.
    //b) Arrow functions: 'this' is lexically captured at definition time.
//That’s the only real law in JS. Everything else (global vs undefined vs {}) is just environment-specific detail!