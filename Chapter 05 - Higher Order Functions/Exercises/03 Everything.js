//My Version:
//01.
function andGateOnArrayUsingLoop(array, test)
{
    for(element of array)
        if(!test(element))
            return false;
    return true;
}
let lessThan10 = (element) => element < 10? true: false;
console.log(andGateOnArrayUsingLoop([1,2,3,4,5], lessThan10));
console.log(andGateOnArrayUsingLoop([1,2,3,4,50], lessThan10));
//02.
function andGateOnArrayUsingSome(array, test)
{
    return !array.some((el) => !test(el));
}
let lessThan100 = (element) => element < 100? true: false;
console.log(andGateOnArrayUsingSome([10,20,30,40,50], lessThan100));
console.log(andGateOnArrayUsingSome([10,20,30,40,500], lessThan100));



//Author's Version:
//01.
function every(array, predicate)
{
    for (let element of array)
    if (!predicate(element))
        return false;
    return true;
}
//02.
function every2(array, predicate)
{
    return !array.some(element => !predicate(element));
}
console.log(every([1, 3, 5], n => n < 10)); // → true
console.log(every([2, 4, 16], n => n < 10)); // → false
console.log(every([], n => n < 10)); // → true