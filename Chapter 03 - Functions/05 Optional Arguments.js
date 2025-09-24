//JS is extremely broad-minded about the number of arguments you can pass to a function. If you pass too many, the extra ones are ignored. If you pass too few, the missing parameters are assigned the value undefined. The upside is that you can use this behavior to allow a function to be called with different numbers of arguments. For example:
function minus(a, b)
{
    if (b === undefined)
        return -a;
    else return a - b;
}
console.log(minus(10));
console.log(minus(10, 5));

//If you write an '=' operator after a parameter, followed by an expression, the value of that expression will replace the argument when it is not given. For example:
function welcomeUser(user = 'guest')
{
    return 'hello ' + user;
};
console.log(welcomeUser('john'));
console.log(welcomeUser());