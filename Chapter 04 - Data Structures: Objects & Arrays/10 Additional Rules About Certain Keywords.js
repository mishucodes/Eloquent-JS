//01. Many languages will stop you, or at least warn you, when you are defining a binding with a name that is already taken. JS does this for bindings you declare with 'let' or 'const'. For example:
//a) let:
    let i = 0;
    let i = 1; //illegal
//b) var:
    var v = 0;
    console.log(v);
    var v = 1; //legal
    console.log(v);
//c) function:
    function myFn() {console.log('hello world')};
    myFn(); // -> hello mars
    function myFn() {console.log('hello mars')};
    myFn(); // -> hello mars



//02. JS won’t stop you from overwriting "standard bindings" (global bindings such as Object, Array, Date, Math, JSON, Promise, setTimeout, etc.) if you use 'var' or 'function':
//a) var:
    var Date = "not a constructor";
    console.log(Date); //works & legal...
    new Date(); //TypeError: 'Date' is not a constructor...
    console.log(globalThis.Date); //original function will be preserved in Node.JS, but not in browser...
//b) let:
    let Promise = "shadowed";
    console.log(Promise); //works & legal, but...
    new Promise(); //TypeError: Promise is not a constructor...
    console.log(globalThis.Promise); //but look at this!!! The original 'Promise' is not changed, merely 'shadowed'...
//c) function:
    function Object()
    {
        return 'not an object';
    }
    console.log(Object()); //should print 'not an object'...
    console.log(new Object()); //JS Promise is now gone!!!! 