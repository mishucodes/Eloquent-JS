//My Version:
let myObject =
{
    name: 'john',
    hasOwnProperty: 'yes'
}
console.log(myObject.name);
console.log(myObject.hasOwnProperty);
console.log(Object.prototype.hasOwnProperty.call(myObject, 'name'));


//Author's Version:
let map = {one: true, two: true, hasOwnProperty: true};
console.log(Object.prototype.hasOwnProperty.call(map, "one")); // → true