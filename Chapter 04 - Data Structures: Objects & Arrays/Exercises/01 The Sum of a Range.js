//My Solution:
console.log(sum(range(1,5)));
console.log(sum(range(1,10,2)));

function sum(numbers)
{
    let sum = 0;
    for(let n of numbers)
        sum += n;
    return sum;
}

function range(start, end, step = start < end? 1: -1)
{
    let range = [];
    if(start < end)
        for(start; start <= end; start += step)
            range.push(start);
    else
        for(start; start >= end; start += step)
            range.push(start);
    return range;
}



//Author's Solution:
function range(start, end, step = start < end ? 1 : -1)
{
    let array = [];
    if (step > 0)
        for (let i = start; i <= end; i += step)
            array.push(i);
    else
        for (let i = start; i >= end; i += step)
            array.push(i);
    return array;
}

function sum(array)
{
    let total = 0;
    for (let value of array)
        total += value;
    return total;
}