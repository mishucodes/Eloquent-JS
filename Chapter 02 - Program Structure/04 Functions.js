//01. Function: A piece of program wrapped in a value. These values can be 'applied' to run the wrapped programs. It's called "Calling/Executing/Invoking a function". For example:
function add(x,y)
{
    console.log(`${x} + ${y} = `, x+y);
}
//Calling the function:
add(2,2);

//SOME NOTES ON FUNCTIONS:
//a) Values given to functions are called 'Arguments'.
//b) Value taken by functions are called 'Parameters'.
//c) If a function is supposed to be given an argument, but is not given one, it defaults to 'undefined' (unless a custom default value is there in the function definition). For Example:
    function printThis(x) {console.log(x)};
    printThis('john'); //will print 'john'
    printThis(); //will print 'undefined'
    function printDefault(x = 'user') {console.log(x)};
    printDefault('john'); //will print 'john'
    printDefault(); //will print 'user'
//d)Although it is illegal to use '.' character in a binding's name; but notice how "console.log()" has one. It's because 'console' is a binding, within which another binding called 'log' exists.


//02. Return Values: Some functions may 'produce' a value. The 'return' keyword is used in the function definition to explicitly make a function produce a value. For Example:
    function square(x) {return x * x}; //returns the square of a given number...
    console.log(square(3)); //Since anything that produces a value is called an 'Expression' in JS, a function call can be an expression as can be seen in this example.