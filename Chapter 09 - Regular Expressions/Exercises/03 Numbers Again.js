//My Version:
let validJSNumber = /(^[+-]?\.?\d+$)|(^[+-]?\d+\.\d*$)|(^\d+[eE][+-]?\d+$)/;

console.log(validJSNumber.test('10')); //true
console.log(validJSNumber.test('-10')); //true
console.log(validJSNumber.test('+10')); //true
console.log(validJSNumber.test('.10')); //true
console.log(validJSNumber.test('-.10')); //true
console.log(validJSNumber.test('+.10')); //true
console.log(validJSNumber.test('10.10')); //true
console.log(validJSNumber.test('.10.10')); //false
console.log(validJSNumber.test('10e10')); //true
console.log(validJSNumber.test('10e-10')); //true
console.log(validJSNumber.test('10E-10')); //true
console.log(validJSNumber.test('10e+10')); //true
console.log(validJSNumber.test('10e+-10')); //false
console.log(validJSNumber.test('10e+-.10')); //false
console.log(validJSNumber.test('.10e+-10')); //false
console.log(validJSNumber.test('.10e+-.10')); //false

//EXPLANATION: A valid JS number could be any of the following:
    10    
    -10
    +10
    .10
    -.10
    +.10
    10.10
    10e10
    10e-10
    10E-10
//The RegEx divides numbers into 3 categories:
    //a) [+-]?.?\d+
    //b) [+-]?\d+\.\d*
    //c) \d+[eE][+-]?\d+
    //NOTE: My purpose was not to play clever golf, but rather to write such an expression that I can back to later, & understand it in less than 2 minutes. Also, the reason why every groups has its own '^' & '$' is because "alteration (|) is a low-precedence operator", meaning if I wrote my regEx like this: /^([+-]?\.?\d+)|([+-]?\d+\.\d*)|(\d+[eE][+-]?\d+)$/;
        //a) ^ would have only applied to the first group.
        //b) $ would have only applied to the last group.
        //c) Consequence: the middle group could've matched anywhere inside the string.






//Author's Version:
let number = /^[+\-]?(\d+(\.\d*)?|\.\d+)([eE][+\-]?\d+)?$/;
// Tests:
for (let str of ["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4", "1e+12"])
{
    if (!number.test(str))
        console.log(`Failed to match '${str}'`);
}
for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5", "."])
{
    if (!number.test(str))
        console.log(`Incorrectly accepted '${str}'`);
}