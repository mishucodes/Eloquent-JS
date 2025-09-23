//There are some 'special' numbers in JS. They're considered "number" types in JS, but they're not strictly numbers:
//a) infinities:
    let positive = Infinity;
    let negative = -Infinity;
//b) Not a Number:
    let notANumber = NaN;

console.log(typeof positive);
console.log(typeof negative);
console.log(typeof notANumber);