//Strict Mode: JS will become a little more 'strict', i.e., It'll not allow you to get-away with taking it for granted. We enable this mode in JS by writing a string value "strict mode" on top of a file, or on top of a function definition. This mode can bring several changes to the behaviour of JS. For example:



//01. Implicit Binding Declarations:
//a)
    function fn()
    {
    for(i = 0; i < 10; i++) //'i' is not defined. loop will still run. JS will declare it in background onto the global scope...
        console.log(i);
    }
    fn();
    console.log('Proof for the Statement Above: ' + i); //proof for ibid...
//b)
    function strictFn()
    {
        'use strict'; //this will make this function run in the "Strict Mode" of JS...
        for(x = 0; x < 10; x++)
            console.log(x);
    }
    //'x' is undefined, hence 'ReferenceError'...
    // strictFn();



//02. 'this' keyword:
//a)
    function myFn()
    {
        console.log(this);
    }
    //print the global object...
    // myFn();
//b)
    function myStrictFn()
    {
        'use strict';
        console.log(this);
    }
    //prints 'undefined' because the function was not called as a method...
    myStrictFn();
//c)
    function Person(name) {this.name = name;}
    let ferdinand = Person("Ferdinand"); //forgot the 'new' keyword, hence, the 'this' will refer to the global object...
    //printing from the global object!
    console.log(name);
//d)
    function MakePerson(firstName) {'use strict'; this.firstName = firstName;}
    //forgot the 'new' keyword, hence, the 'this' will refer to an 'undefined' value...
    let john = MakePerson("john");



//03. Strict mode does a few more things. It disallows giving a function multiple parameters with the same name and removes certain problematic language features entirely (such as the with statement, which is so wrong it is not further discussed in this book). In short, putting "use strict" at the top of your program rarely hurts and might help you spot a problem.