//01. Array: It is a 'data structure' to store values. It is written as a list of values. For Example:
let classmates = ['john', 'adam', 'david', 'peter', 'donald'];
console.log(classmates[0]); //we can access values via their 'index'...


//02. Properties: Basically some bindings that exist inside values like arrays, strings, etc. Almost all JS values have some properties (except null & undefined). There are two ways to access them:
//a) Dot Notation:
console.log(classmates.length);
//b) Bracket Notation:
console.log(classmates[1+2]);
//SOME NOTES ON THESE NOTATIONS:
    //a) When using a dot, the word after the dot is the literal name of the property. When using the brackets, the expression between the brackets is evaluated to get the property name.
    //b) Whereas value.x fetches the property of value named “x”, value[x] takes the value of the variable named "x" and uses that, converted to a string, as the property name.
    //c) The Dot Notation works only with names that are like valid binding names, i.e., names starting with a letter/underscore/dollarSign, and containing only letters, numbers, and underscores. If you want to access a property named "2" or "John Doe", you must use brackets: value[2] or value["John Doe"].

//03. Methods: Properties that hold a function as a value. For Example:
console.log('string'.toUpperCase()); //returns the 'given' string converted to uppercase...
//Some Important Methods for Arrays:
    //a) push():
    classmates.push('harry');
    console.log(classmates);
    //b) pop():
    console.log(classmates.pop());
    console.log(classmates);

//04. Stack: It is another canonical data structure in programming. Thanks to methods like .push() & .pop(), arrays in JS can also act like stacks.