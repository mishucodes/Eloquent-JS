//01. My Version:
//01a. arr -> list
function fromArrayToLinkedList(array)
{
    if(!Array.isArray(array) || array.length === 0)
        return null;
    let list = {value: array[0], rest: null}; //since i didn't wanna use >= below. it should save some clock cycles in theory...
    for(let i = array.length-1; i > 0; i--)
    {
        let listItem = {value: array[i], rest: list.rest};
        list.rest = listItem;
    }
    return list;
}
let linkedList = fromArrayToLinkedList([1,2,3]);
console.log(linkedList);

//01b. list -> arr
function fromLinkedListToArray(linkedList)
{
    if(linkedList == null || Array.isArray(linkedList) || typeof linkedList !== 'object')
        return null;
    const newArray = [];
    newArray.push(linkedList.value);
    for(let rest = linkedList.rest; rest !== null; rest = rest.rest)
        newArray.push(rest.value);
    return newArray;
}
let array = fromLinkedListToArray(linkedList);
console.log(array);

//01ca. prependToList (fast but not a "new list"):
function prependToListFast(value, rest)
{
    return {value, rest}; //doesn't necessarily create a "new list" since JS objects are assigned by reference, not value...
    //also, notice JS Object Literal Shorthand here...
}
let notANewList =  prependToListFast(0, linkedList);
console.log(notANewList);

//01cb. prependToList (Recursive Version):
function prependToListSlow(element, linkedList)
{
    if(linkedList == null)
        return {value: element, rest: null};
    //else:
    let newList = {value: element};
    if(linkedList.rest === null)
        newList.rest = {value: linkedList.value, rest: null};
    else
        newList.rest = prependToListSlow(linkedList.value, linkedList.rest);
    return newList;
}
let newList =  prependToListSlow(0, linkedList);
console.log(newList);

//01da. getNthElement from a linkedList:
function getNthElement(n, linkedList)
{
    if(linkedList == null || Array.isArray(linkedList) || typeof linkedList !== 'object' || !Number.isInteger(n) || n < 0)
        return null;
    if(n === 0)
        return linkedList?.value;
    let rest = linkedList?.rest;
    for(let i = 1; i < n; i++)
        rest = rest?.rest;
    return rest?.value; //note the excessive use of optional property access...
}
console.log(linkedList);
console.log(getNthElement(0, linkedList));
console.log(getNthElement(1, linkedList));
console.log(getNthElement(2, linkedList));
console.log(getNthElement(3, linkedList));

//01db. getNthElement from a linkedList (recursive):
function getNthElementRecursive(n, linkedList)
{
    if(n === 0)
        return linkedList?.value; //note the use of optional property access here too...
    else
        return getNthElementRecursive(n-1, linkedList?.rest); //ibid...
}
console.log(linkedList);
console.log(getNthElementRecursive(0, linkedList));
console.log(getNthElementRecursive(1, linkedList));
console.log(getNthElementRecursive(2, linkedList));
console.log(getNthElementRecursive(3, linkedList));







//02. Author's Version:
//02a.
function arrayToList(array)
{
    let list = null;
    for (let i = array.length - 1; i >= 0; i--)
        list = {value: array[i], rest: list};
    return list;
}
//02b.
function listToArray(list)
{
    let array = [];
    for (let node = list; node; node = node.rest)
        array.push(node.value);
    return array;
}
//02c.
function prepend(value, list)
{
    return {value, rest: list};
}
//02d.
function nth(list, n)
{
    if (!list)
        return undefined;
    else if (n == 0)
        return list.value;
    else
        return nth(list.rest, n - 1);
}

console.log(arrayToList([10, 20])); // → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30]))); // → [10, 20, 30]
console.log(prepend(10, prepend(20, null))); // → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1)); // → 20