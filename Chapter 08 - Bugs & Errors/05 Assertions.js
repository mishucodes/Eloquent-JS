//01. Assertions: Checks inside a program that verify that something is the way it is supposed to be. They are used not to handle situations that can come up in normal operation but to find programmer mistakes. For Example:
//If 'firstElement' is described as a function that should never be called on empty arrays, we might write it like this:
function firstElement(array)
{
    if (array.length == 0)
        throw new Error("firstElement called with []");
    return array[0];
}
//Now, instead of silently returning 'undefined', this function will loudly blow up your program as soon as you misuse it. This makes it less likely for such mistakes to go unnoticed and easier to find their cause when they occur.
//I do not recommend trying to write assertions for every possible kind of bad input. That’d be a lot of work and would lead to very noisy code. You’ll want to reserve them for mistakes that are easy to make.