//Closures: When a function is able to access a local binding that should not exist any more. More specifically, a closure is created when a function “remembers” the variables from its surrounding scope, even after that scope has finished executing.
//For Example:
function wrapValue(n)
{
    let local = n;
    return () => local; //returns an arrow function...
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

//Another Example:
function multiplier(factor)
{
    return (number) => number * factor; //returns an arrow function...
}
let twice = multiplier(2);
console.log(twice(5));


//AUTHOR SAYS: "A good mental model is to think of function values as containing both the code in their body and the environment in which they are created. When called, the function body sees the environment in which it was created, not the environment in which it is called. In the previous example, 'multiplier' is called and creates an environment in which its 'factor' parameter is bound to 2. The function value it returns, which is stored in 'twice', remembers this environment so that when that is called, it multiplies its argument by 2."

//NOTE: I must clarify that these statements might cause some confusion. For instance, one might go on to assume that:
let globalVariable = 1;
function add(x)
{
    return x + globalVariable; //one might assume that since the 'globalVariable' here refers to the globally-scoped binding,
}
console.log(add(1)); //it'll always refer to that value of the binding which was there at the time of the creation of 'add();...
globalVariable = 2; //& hence this would not affect 'globalVariable' in 'add'...
console.log(add(1)); //but it does. & it does so because when the function was defined it was told to look for 'globalVariable' & remember it. Now, "remember it" does not mean "copy its current value & save it in a new variable of the same name"; it rather means "remember that 'globalVariable' in this function definition refers to this particular variable, & not some other". That’s the subtle difference between “remembering a binding” vs “remembering a value.”