//In JS, we can also create our own custom errors. We might need them sometimes because some kinds of errors might require special treatment. For Example:
for (;;)
{
    try
    {
        let dir = promtDirection("Where?"); //wrong spelling!!!
        console.log("You chose ", dir);
        break;
    }
    catch (e)
    {
        //This message ignores the fact that the try block can produce errors other than this one type:
        console.log("Not a valid direction. Try again.");
    }
}


//We can do something like this instead:
for (;;)
{
    try
    {
        let dir = promptDirection("Where?");
        console.log("You chose ", dir);
        break;
    }
    catch (e)
    {
        if (e instanceof InputError) //IMPORTANT PART!!!
            console.log("Not a valid direction. Try again.");
        else
            throw e; //handled by JS...
    }
}

//Here's how we did it: Notice how the new error class extends 'Error'. It doesn’t define its own constructor. In fact, it doesn’t define anything at all. 'InputError' objects behave like 'Error' objects, except that they have a different class by which we can recognise them.
class InputError extends Error {}

//Modifying the function slightly:
function promptDirection(question)
{
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new InputError("Invalid direction: " + result);
}