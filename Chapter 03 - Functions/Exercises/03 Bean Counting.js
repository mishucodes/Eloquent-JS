//01.
console.log(countBs('Bob The Builder'));
function countBs(str)
{
    let bCount = 0;
    for(let i = 0; i < str.length; i++)
        if(str[i] === 'B')
            bCount++;
    return bCount;
}

//01a.
console.log(countBsCaseInsensitive('Bob The Builder'));
function countBsCaseInsensitive(str)
{
    let bCount = 0;
    for(let i = 0; i < str.length; i++)
        if(str[i] === 'B' || str[i] === 'b')
            bCount++;
    return bCount;
}

//02.
console.log(countChar('popeye', 'p'));
function countChar(str, char)
{
    let charCount = 0;
    for(let i = 0; i < str.length; i++)
        if(str[i] === char)
            charCount++;
    return charCount;
}