//01. My Version:
//01a. Pure Function:
function reverseThisArray(array)
{
    let newArray = [];
    for(let element of array)
        newArray.unshift(element);
    return newArray;
}
console.log(reverseThisArray([1,2,3])); //-> [3,2,1];

//01b. Side-Effect Function:
function reverseThisOriginalArray(array)
{
    let reversedArray = [];
    for(let element of array)
        reversedArray.unshift(element);
    for(let i = 0; i < array.length; i++)
        array[i] = reversedArray[i];
}
let array = [1,2,3];
reverseThisOriginalArray(array);
console.log(array);



//02. Author's Version:
//02a. Pure Function:
function reverseArray(array)
{
    let output = [];
    for (let i = array.length - 1; i >= 0; i--)
        output.push(array[i]);
    return output;
}
//02b. Side-Effect Function:
function reverseArrayInPlace(array)
{
    for (let i = 0; i < Math.floor(array.length / 2); i++)
    {
        let old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
}

console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);