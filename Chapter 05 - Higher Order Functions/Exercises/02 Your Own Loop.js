//My Version:
function myOwnLoop(value, testFn, updateFn, bodyFn)
{
    while(testFn(value))
    {
        bodyFn(value);
        value = updateFn(value);
    }
    return value;
}
let testFn = (value) => value <= 'z'? true: false;
let updateFn = (value) => String.fromCodePoint(value.codePointAt(0)+1);
let bodyFn = (value) => console.log(value);

myOwnLoop('a', testFn, updateFn, bodyFn);



//Author's Version:
function loop(start, test, update, body)
{
    for (let value = start; test(value); value = update(value))
        body(value);
}
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1