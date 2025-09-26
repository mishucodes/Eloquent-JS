//My Version:
function reallyEqual(x,y)
{
    if(x == y) //allowing simple type-conversions here on purpose...
        return true;
    if(x == null || y == null) //since null is an object...
        return false;
    //arrays:
    if (Array.isArray(x) !== Array.isArray(y))
        return false;
    if (Array.isArray(x))
    {
        if (x.length !== y.length)
            return false;
        for (let i = 0; i < x.length; i++)
            if (!reallyEqual(x[i], y[i])) //a tiny bit of recursion...
                return false;
        return true;
    }
    //objects:
    else if(typeof x === 'object' && typeof y === 'object')
    {
        if(Object.keys(x).length !== Object.keys(y).length) //if both objects have different number of keys...
            return false;
        for(let key of Object.keys(x))
            if(!reallyEqual(x[key], y[key])) //recursion to handle nested objects...
                return false;
        return true;
    }
    return false;
}
//test 01:
let object1 = {name: 'john', age: 12};
let object2 = {name: 'john', age: 21};
console.log(reallyEqual(object1, object2));
//test02:
let nestedObject1 = {name: 'john', age: 21, hobbies: {easy: ['walking', 'sleeping'], hard: ['reading', 'writing']}};
let nestedObject2 = {name: 'john', age: 21, hobbies: {easy: ['walking', 'sleeping'], hard: ['reading', 'writing']}};
console.log(reallyEqual(nestedObject1, nestedObject2));



//Author's Version:
function deepEqual(a, b)
{
    if (a === b)
        return true;
    if (a == null || typeof a != "object" || b == null || typeof b != "object")
        return false;

    let keysA = Object.keys(a), keysB = Object.keys(b);
    if (keysA.length != keysB.length)
        return false;
    for (let key of keysA)
        if (!keysB.includes(key) || !deepEqual(a[key], b[key]))
            return false;

    return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj)); // → true
console.log(deepEqual(obj, {here: 1, object: 2})); // → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2})); // → true
console.log(deepEqual(1, '1')); // → false