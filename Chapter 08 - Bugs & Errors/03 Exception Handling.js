//01. Exception/Error Handling: A mechanism that makes it possible for code that runs into a problem to raise ('throw') an 'exception'. It's like a super-charged 'return' statement. It jumps out of not just the current function but also its callers, all the way down to the first call that started the current execution. This is called "unwinding the stack".

//But if exceptions always zoomed right down to the bottom of the stack, they would not be of much use. It'd be just a fancy way of terminating the program. The actual power lies in the fact that you can set “obstacles” along the stack to catch the exception as it is zooming down. Once you’ve caught an exception, you can do something with it to address the problem and then continue to run the program.


//Here’s an example:
function look()
{
    if (promptDirection("Which way?") == "L")
        return "a house";
    else
        return "two angry bears";
}
function promptDirection(question)
{
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new Error("Invalid direction: " + result);
}

//The "Try-Catch" Block:
try
{
    console.log("You see", look());
}
catch (error)
{
    console.log("Something went wrong: " + error);
}

//NOTE: Note that the look function completely ignores the possibility that promptDirection might go wrong. This is the big advantage of exceptions: error-handling code is necessary only at the point where the error occurs and at the point where it is handled. The functions in between can forget all about it.





//02. Cleaning Up After Error-Handling: We sometimes have to clean some things after a "Try-Catch" block. For example:

//a) This is some bad banking code:
const accounts = {a: 100, b: 0, c: 20};
function getAccount()
{
    let accountName = prompt("Enter an account name");
    if (!Object.hasOwn(accounts, accountName))
        throw new Error(`No such account: ${accountName}`);
    //else:
    return accountName;
}
function badTransfer(from, amount)
{
    if (accounts[from] < amount)
        return;
    accounts[from] -= amount;
    accounts[getAccount()] += amount; //money has already been deducted, if name of the transferee is invalid, it's bad!
}

//b) A better way:
function betterTransfer(from, amount)
{
    if (accounts[from] < amount)
        return;
    let progress = 0;
    try
    {
        accounts[from] -= amount;
        progress = 1;
        accounts[getAccount()] += amount;
        progress = 2;
    }
    finally //takes care of ibid:
    {
        if (progress == 1)
            accounts[from] += amount;
    }
}