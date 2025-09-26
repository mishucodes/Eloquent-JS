//01. Object: An arbitrary collection of 'properties', i.e., (key: value). There are several ways to create objects.
//a) Brace Notation:
let user = {name: 'john', age: 21, 'marital status': true};
console.log(user.name);
console.log(user.job); //reading a non-existent property will give 'undefined'...
user.job = 'web-dev'; //assigning some value to a non-existent property will create a new property with that name...
user.age++; //assigning some value to a existing property will assign that property that value...
console.log(user);
//NOTE: This is invalid JS:
// {name: 'bob', age: 10};
    //It is invalid because braces have two meanings in JS. At the beginning of a statement, they're meant to begin a block of statements. In any other position, they describe an object. Fortunately, it is rarely useful to start a statement with an object in braces, so the ambiguity between these two is not much of a problem.

//aa) Watch This:
let hobbies = ['weight-lifting', 'reading', 'coffee-making'];
let cv = {name: 'harry', age: 27, hobbies}; //note that the last property is not a key: value pair, but a binding...
console.log(cv);


//02. Operators & Methods for Objects:
//a) delete:
    delete cv.age;
    console.log(cv);
//b) in:
    console.log('name' in cv);
    console.log('age' in cv);
    hobbies = undefined;
    console.log('hobbies' in cv); //true
//c) Object.keys():
    console.log(Object.keys(cv));
//d) Object.assign();
    let objectOne = {a: 1, b: 2};
    Object.assign(objectOne, {b: 10, c: 100});
    console.log(objectOne);