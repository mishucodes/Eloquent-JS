//01. Higher Order Functions: Functions that operate on other functions, either by taking them as arguments or by returning them as values. Higher-order functions allow us to abstract over actions, not just values. For example:

//a) We can have functions that create new functions:
function greaterThan(n)
{
    return (m) => {return (m > n)}; //closures in action!
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11)); // → true

//b) We can also have functions that change other functions:
function noisy(fn)
{
    return (...args) =>
        {
            console.log("calling with", args);
            let result = fn(...args);
            console.log("called with", args, ", returned", result);
            return result;
        };
}
noisy(Math.min)(3, 2, 1); //this might look like 'currying' in action, but it's not!
    //we first call "noisy()" with [3, 2, 1]
    //then we call the function which "noisy()" returns with [3, 2, 1], & it returns 1...
//NOTE ON CURRYING: Currying is NOT a function returning a function & that returned function taking some arguments & doing something using closures. Currying is when we transform a function, which was supposed to take multiple arguments all at once into such that it not can take those arguments in multiple-discrete calls.

//c) We can even write functions that provide new types of control flow:
function repeat(n, action)
{
    for (let i = 0; i < n; i++)
        action(i);
}
function unless(test, then)
{
    if (!test)
        then();
}
repeat(3, n =>
    {
        unless(n % 2 == 1, () => console.log(n, "is even"));
    });
//EXPLANATION:
    //a) repeat() abstracts a for() loop. Instead of writing the whole loop, we can just call repeat(3, ...)...
    //b) unless is an inverted if: it runs its argument function only when the test is falsy...
    //c) Together they create a "new control pattern": "repeat this console.log() action 3 times as long as this condition is false"...
    //d) repeat() and unless() are not mere functions doing calculations — they decide when other code runs. That’s exactly what keywords like if(), for() and while() do in JS.


//d) JS has a built-in Higher Order Function:
let myArray = [1,2,3];
myArray.forEach((element, index, array) => console.log(index, ':', element, 'from', array));