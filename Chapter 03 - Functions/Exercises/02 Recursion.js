//My Version:
function oddOrEven(x)
{
    if(x < 0)
        x = -x;
    if(x === 0)
        return 'even';
    else if(x === 1)
        return 'odd';
    else
        return oddOrEven(x - 2);
}
console.log(oddOrEven(-5));


//Author's Version:
function isEven(n)
{
    if (n == 0)
        return true;
    else if (n == 1)
        return false;
    else if (n < 0)
        return isEven(-n);
    else
        return isEven(n - 2);
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));