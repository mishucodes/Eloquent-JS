//01. Just as we have .push() and .pop(), which add and remove elements at the end of an array, we also have corresponding methods for adding and removing things at the start of an array are called .unshift() and .shift():
let todoList = [];
function remember(task)
{
    todoList.push(task);
}
function getTask()
{
    return todoList.shift();
}
function rememberUrgently(task)
{
    todoList.unshift(task);
}


//02. To search for a specific value, arrays provide an .indexOf() method. The method searches through the array from the start to the end and returns the index at which the requested value was found—or -1 if it wasn’t found. To search from the end instead of the start, there’s a similar method called .lastIndexOf():
console.log(['a', 'b', 'c', 'b', 'a'].indexOf('b'));
console.log(['a', 'b', 'c', 'b', 'a'].lastIndexOf('b'));
console.log(['a', 'b', 'c', 'b', 'a'].lastIndexOf('x'));
console.log(['a', 'b', 'c', 'b', 'a'].lastIndexOf('x'));
//NOTE: Both indexOf and lastIndexOf take an optional second argument that indicates where to start searching:
console.log(['a', 'b', 'c', 'b', 'a'].indexOf('b', 2));
console.log(['a', 'b', 'c', 'b', 'a'].lastIndexOf('b', 2));



//03. Another fundamental array method is .slice(), which takes start and end indices and returns an array that has only the elements between them. The start index is inclusive and the end index is exclusive. When the end index is not given, slice will take all of the elements after the start index. You can also omit the start index to copy the entire array:
console.log([0, 1, 2, 3, 4].slice(2, 4)); // → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2)); // → [2, 3, 4]
console.log([0, 1, 2, 3, 4].slice()); // → [0, 1, 2, 3, 4]


//04. The .concat() method can be used to append arrays together to create a new array:
let concatArr = [1, 2, 3].concat([3, 4, 5]);
console.log(concatArr);
//NOTE: If you pass concat an argument that is not an array, that value will be added to the new array as if it were a one-element array:
concatArr = [1, 2, 3].concat(3);
console.log(concatArr);
concatArr = [1, 2, 3].concat(['a','b','c'], 1, {key: 'value'});
console.log(concatArr);