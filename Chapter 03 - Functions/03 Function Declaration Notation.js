//There are many ways to define Functions in JS; & these have differing impacts on the execution of the code. For instance, if we declare a function like this:

//a) Defining a fn like a normal variable:
console.log(lifeOnMars()); //will cause a reference error ('lifeOnMars' is undefined as of now)!
let lifeOnMars = function()
    {
        return "It is very likely that Mars was full of life once...";
    };

//b) Defining a fn using a special "Declaration Notation":
console.log(futureOfTheSun()); //will work fine...
function futureOfTheSun()
{
    return "A Sun will likely end up as a Red Giant";
}
//NOTE: The author says that "...Function declarations are not part of the regular top-to-bottom flow of control. They are conceptually moved to the top of their scope and can be used by all the code in that scope..."
//I'm not a JS Guru but I think it could be a bit misleading to think of these functions as "being moved to the top". A lecture of the "JS Execution Context" would be of much greater help. Here's one: https://youtu.be/ylx5F7hbzVQ?si=CVItpAs3vSNGtRH6

//c) Arrow Function Notation:
console.log(futureOfEarth()); //will cause a reference error ('futureOfEarth' is undefined as of now)!
const futureOfEarth = () => "Earth might end up similar to Venus";