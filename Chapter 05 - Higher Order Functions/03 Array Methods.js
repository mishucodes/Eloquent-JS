//JS Arrays has some very important & useful methods.

//01. forEach: runs a given function over every element of the array:
let myArray = [1,2,3,4,5];
myArray.forEach((element,index,array) => console.log(index, ':', element, 'from', array));


//02. Filter: gives a new array of those elements from the given array that pass a certain test:
//02a.
let numbers = [1, 2, 3, '4', 'five'];
let onlyNumbers = numbers.filter((element) => typeof element === 'number');
console.log(onlyNumbers); //creates a new array of those elements that pass the given test (return true)...
//02b.
onlyNumbers = numbers.filter((element) =>
    {
        if(typeof element === 'number')
            return element;
        else
            return 'anyTruthyValue';
    });
console.log(onlyNumbers); //returns the array as it is. Filter() does not care what it being returned. if it's a truthy value, the element which caused it will be pushed to the filtered array...
//02c.
numbers.filter((element, index, array) => console.log(index, ':', element, 'from', array)); //.filter() takes upto 3 arguments...


//03. Map: This method transforms an array by applying a function to all of its elements and building a new array from the returned values. The new array will have the same length as the input array, but its content will have been mapped to a new form by the function:
let peopleDatabase =
[
    {name: 'john', age: 21, isMarried: true},
    {name: 'david', age: 12, isMarried: false},
    {name: 'harry', age: 25, isMarried: true},
    {name: 'donald', age: 35, isMarried: true},
    {name: 'bob', age: 5, isMarried: false}
];
let peopleNames = peopleDatabase.map((element, index, array) => {return element.name});
console.log(peopleNames);


//04. Reduce: This is quite a tricky method. Here's a polyfill for this method to better understand it:
function reduce(array, combine, start)
{
    let current = start;
    for (let element of array)
        current = combine(current, element);
    return current;
}
console.log(reduce(myArray, (accumulator, element) => {return accumulator + element}, 0)); //15
console.log(reduce(myArray, (accumulator, element) => {return accumulator * element}, 1)); //120
//Here's the actual JS method:
//04a.
let x = myArray.reduce((acc, el) => acc + el); //reduce taking only one argument (fn). 'a' is myArray[0] & 'b' is myArray[1] here in its first iteration...
console.log(x);
//04b.
let y = myArray.reduce((acc, el) => acc * el, 1); //reduce taking an additional argument (this will be the value of 'a' in the first iteration; & 'b' will be myArray[0] in the same)...
console.log(y);
//04c. This example is a little complex but Important:
let incomesOfPeople = [100, 12, 1200, 200, 90, 123, 543];
let highestIncome = incomesOfPeople.reduce((acc, el) =>
    {
        if(acc < el)
            acc = el;
        return acc; //this is actually doing "acc = el"...
    }, -Infinity);
console.log(highestIncome);