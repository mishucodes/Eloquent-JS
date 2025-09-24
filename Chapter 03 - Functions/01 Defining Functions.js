//Function: It's basically a program in itself. A function definition is a regular binding where the value of the binding is a function. For example, this code defines 'square' to refer to a function that produces the square of a given number:
const square = function(x)
{
    return x * x;
};
console.log(square(12));
//The most obvious application of functions is defining new vocabulary.
//Some functions, such as 'square', produce a value, and some don’t, such as 'makeNoise', whose only result is a side effect:
function makeNoise()
{
    console.log('making noise...');
}

//NOTE: Functions that produce/return a value, & do not affect the outside world in any other manner are called 'Pure Functions'.