let table = [76, 9, 4, 1];

//This function gets the Phi-Coefficient of a table...
function getPhiOf(table)
{
    return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) * (table[1] + table[3]) * (table[0] + table[2]));
}

//But this is much more elegant to read:
function phi([n00, n01, n10, n11]) //we're "destructuring" an array here...
{
    return (n11 * n00 - n10 * n01) / Math.sqrt((n10 + n11) * (n00 + n01) * (n01 + n11) * (n00 + n10));
}
//EXPLANATION:
//Instead of doing:
    let n00 = table[0];
    let n01 = table[1];
    let n10 = table[2];
    let n11 = table[3];
//We're doing:
    let [x00, x01, x10, x11] = table;

//A similar trick works for objects, using braces instead of square brackets:
let {age} = {name: "John Lennon", age: 23};
console.log(age); // → 23