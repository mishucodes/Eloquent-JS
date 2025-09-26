//All primitive types are immutable in JS. For instance:
let i = 0;
i++; //unlike C, JS does not change the data in memory from 0 to  1. It makes 'i' point to a new memory address altogether...
//NOTE: But don't assume that you can do this in C. Here's what happens there:
    //const int i = 0;
    //i++; this will be invalid because 'const' in C means "read-only memory"...

//When we have two numbers, 120 and 120, we can consider them precisely the same number, whether or not they refer to the same physical bits. With objects, there is a difference between having two references to the same object and having two different objects that contain the same properties. Consider the following code:
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};
console.log(object1 == object2); // → true
console.log(object1 == object3); // → false
object1.value = 15;
console.log(object2.value); // → 15
console.log(object3.value); // → 10

//When it comes to non-primitives, though a 'const' binding to an object can itself not be changed and will continue to point at the same object, the contents of that object might change. For instance:
const user = {name: 'john', age: 21};
user.age++; //legal...
// user = {name: 'john', age: 23}; //illegal...


//NOTE ON TYPE CONVERSION: When we do this:
let name = 'john';
console.log({name: 'john'} == name); //the object-type will be converted to a primitive here, not the other way around. By default, objects convert to a string via toString(). For plain objects, {}.toString() returns "[object Object]". So effectively:
    //{name: 'john'} == 'john';
        //becomes
    //"[object Object]" == "john"