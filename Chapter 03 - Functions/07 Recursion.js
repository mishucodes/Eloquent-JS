//Recursion: A function calling itself in its definition. For example:
console.log(getFactorialOf(5));
function getFactorialOf(x)
{
    if(x === 1)
        return 1;
    else
        return x * getFactorialOf(x-1);
}

//SOME NOTES ON RECURSION:
//a) Recursive approaches might be considered 'elegant' by mathematicians, but it is computationally very expensive, since it relies on stack memory of the machine. Also, in languages like JS, it's generally slower than a loop-version of the same program. The reason why we still use recursion some times is because it is really hard to convert some functions into a looping version.
//b) Furthermore, some problems really are easier to solve with recursion than with loops. Most often these are the kind of problems that require exploring or processing several “branches”, each of which might branch out again into even more branches. 
//For example, consider this puzzle: by starting from the number 1 and repeatedly either adding 5 or multiplying by 3, an infinite set of numbers can be produced. How would you write a function that, given a number, tries to find a sequence of such additions and multiplications that produces that number? For example, the number 13 could be reached by first multiplying by 3 and then adding 5 twice, whereas the number 15 cannot be reached at all. Here is a recursive solution:
function findPathTo(x)
{
    function tryPath(currentNumber, pathHistory)
    {
        if(currentNumber === x)
            return pathHistory;
        else if(currentNumber > x)
            return null;
        else
            return tryPath(currentNumber + 5, `(${pathHistory} + 5)`) ?? tryPath(currentNumber * 3, `(${pathHistory} * 3)`);
            //this above is NOT a ternary operator!!!
    }
    return tryPath(1, "1");
}
console.log(findPathTo(24));
//See "RecursionHelperImage" to see how this function works. It's quite beautiful!