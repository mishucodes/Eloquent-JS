//Rest Parameters: It can be useful for a function to accept any number of arguments. For example, "Math.max()" returns the largest of all the numbers it is given. To write such a function, you put three dots before the function’s last parameter, like this:
function maximumOf(...numbers)
{
    let result = -Infinity;
    for (let number of numbers)
    if (number > result)
        result = number;
    return result;
}
console.log(maximumOf(4, 1, 9, -2)); // → 9

//When such a function is called, the rest parameter is bound to an array containing all further arguments. You can use a similar three-dot notation to call a function with an array of arguments:
let numbers = [5, 1, 7];
console.log(maximumOf(...numbers)); // → 7
//NOTE: If there are other parameters before it, their values aren’t part of that array:
function printFamily(husband, wife, ...children)
{
    console.log(husband);
    console.log(wife);
    for(child of children)
        console.log(child);
}
printFamily('adam', 'eve', 'cain', 'abel', 'seth');


//SPECIAL NOTE: When we use "..." operator on an array, it 'spreads' into its values. For instance:
let planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'];
function printPlanets(...array)
{
    for(element of array)
        console.log(element);
}
printPlanets(...planets); //the array is NOT being passed as an argument. 09 strings are being passed...
printPlanets('sun', 'moon', ...planets, 'ceres', 'xena'); //proof for ibid...