//01. WHAT IS A PROMISE:
    // - Basically a placeholder for a yet unknown value. Future execution is contingent on such value.
    // - Syntax: Takes an EXECUTOR FUNCTION as its argument. This fn runs immediately.
    // - Also, this fn automatically receives two parameters (conventionally called: resolve and reject).
    // - I like to read 'resolve' & 'reject' as 'return', & their arguments as the values being returned.
    let problems = false;
    let p1 = new Promise((resolve, reject) =>
        {
            if(!problems)
                resolve('Resolved'); //return 'Resolved';
            else
                reject('Rejected'); //return 'Rejected';
        });
        //SOME NOTES:
        // a) the 'resolve' & 'reject' are methods/functions. Not ordinary variables.
        // b) a promise can have 3 states: pending, resolved, rejected.
        // c) hence, it can have 3 values: *pending* (nothing), value, error.


//More Details about the Promise Object:-
let p2 = new Promise((resolve, reject) => resolve('done'));
    //See what each thing prints...
    console.log(p2); //it's a promise
    console.log(p2.then); //it's a function
    console.log(p2.then()); //.then() returns a promise, too...

//Something Interesting: promises run the executor function immediately, even if you don't use the promise object anywhere...
    new Promise((resolve, reject) =>
    {
    console.log("Executor running even though the function is never called...?");
    resolve(42);
    });






//02. HANDLING PROMISES:
    //a) .then(): can take upto 2 arguments (a fn to handle resolved values, & another to handle the rejected ones):
        //aa) handling both:
            p2.then((resolve) => console.log('aa:', resolve), (reject) => console.log('aa:', reject));
        //ab) handling resolved:
            p2.then((resolve) => console.log('ab:', resolve), null); //NOTE: not handling errors might cause premature program termination...
        //ac) handling rejections:
            p2.then(null, (err) => console.log('ac:', err));

    //NOTE: Notice how this console.log gets executed before any of the promises could be executed...
        console.log('I & all preceding console.log() get executed before any promise(s), since we are part of the synchronous code :)');


    //b) .catch(): only handles rejections.
    let p3 = new Promise((resolve, reject) => reject('fuck'));
        //ba) handles rejections thrown by the .then() method:
            p3.then((resolve) => console.log('ba:', resolve)).catch((reject) => console.log('ba:', reject));
        //bb) handles rejections thrown by multiple .then() methods:
            p2.then((resolve) => {throw new Error('rejected by then()')}).then((result) => {throw new Error('rejected by then() again')})
            .catch((err) => console.log('bb:', err.message)); //prints the first error encountered


    //c) .finally(): gets executed anyway.
    p3.then((resolve) => {throw new Error('no')}).catch((err) => console.log('c:', err.message))
    .finally((arg1, arg2) => console.log('finally receives:', arg1, '&', arg2)); //also, receives no arguments...



    

//03. PROMISE CHAINING:
    //SOME RULES:
    //a) Every promise has a .then() & a .catch() method; but only the rejected ones run a .catch() method.
    //b) You can do only 3 things from a .then() method:
            //ba) return a promise object.
            //bb) throw an error object.
            //bc) return a normal variable (still wrapped inside a promise).
    //c) You can do only 2 things from a .catch() method:
            //ca) return a promise object.
            //cb) return a normal variable (still wrapped inside a promise).
                //NOTE: the .catch() is basically ".then(undefined, handler)" under the hood.
    //d) Just like .then() & .catch(), .finally() also returns a promise. Specifically:
            // da) by default it passes through the previous promise’s settled value or error unchanged.
            // db) if the .finally() callback itself returns a promise, the chain waits for that promise to settle.
    //e) You can chain multiple .then() & .catch() methods. Only the first handler that matches the state runs.
    //f) Usually, the .catch() & .finally() are put at the end of the chain, but you can also place them anywhere in the same.
    //g) The .finally() method does not receive any arguments.
    //h) The .finally() method does not affect the value passed to the next .then() & .catch() methods.
let p4 = new Promise((resolve, reject) => 
    {
        let user = {name: 'John', surname: 'Doe', age: 25};
        resolve(user);
    });

//a) returning a promise object:
p4.then((user) => 
        {
            console.log('User:', user.name);
            return new Promise((resolve, reject) => resolve(user.surname));
        })
        .then((surname) => console.log('Surname:', surname)) //returns a promise with an undefined value
        .then((arg) => console.log('then() chain ended with:)', arg));
//b) throwing an error object:
p4.then((user) => 
        {
            console.log('User Age:', user.age);
            throw new Error('Something went wrong!');
        })
        .catch((err) => console.log('Error:', err.message)) //returns a promise with an undefined value
        .then((arg) => console.log('catch() chain ended with:)', arg));
//c) returning a normal variable:
p4.then((user) => 
        {
            console.log('User:', user.name);
            return user.age;
        })
        .then((age) => console.log('Age:', age)) //returns a promise with an undefined value
        .then((arg) => console.log('then() chain ended with:)', arg));

//d) complex example:
let promise404 = new Promise((resolve, reject) => reject(new Error('404 Not Found')));
promise404.then((arg) =>
    {
    if(typeof arg === Error) //if I get an error, I throw it away...
        throw err;
    else
        return arg; //else I return the value...
    })
    .then((arg) => 
        {
            console.log('d:', arg); //if all goes well, I print the value & do something else...
            return 'some new data';
        })
        .then((newData) => console.log('d:', newData)) //do something else with the new data...
        .catch((err) => console.log('d:', err.message)); //I can print the error 404 anytime...

//e) using .finally():
p4.then((user) => 
        {
            console.log('User:', user.name);
            return user.age;
        })
        .then((age) => age)
        .finally(() => console.log('e: Though I not \'receive\' anything, I sure pass it forward ;)'))
        .then((age) => console.log('See for yourself:', age));