//Going over arrays one element at a time is something that comes up a lot in JS programming. There is a simpler way to write such loops in modern JavaScript:
let users = ['john', 'harry', 'david'];
for (let user of users)
{
    console.log(user);
}
//NOTE: this for-of notation can not only loop over elements of arrays but also strings, & other "iterable objects"...


//NOTE: JS arrays also come with an .include() method. It takes a value & returns true if the value is found in the array:
let legalPersons = ['human', 'state', ['company', 'partnership', 'firm', 'trust']]; //a nested array...
console.log(legalPersons.includes('state')); //true
console.log(legalPersons.includes('company')); //false due to nesting...