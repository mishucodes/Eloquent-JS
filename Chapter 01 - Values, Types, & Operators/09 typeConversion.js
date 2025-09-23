//JS smartly converting certain values from one type to another to allow (tolerate) an operation.
//I'm not sure if JS calls the entirety of it "Type Coercion", or just the part that produces unexpected results.

//Some Examples:
console.log(8 * null);
console.log('5' - 1);
console.log('5' + 1);
console.log('five' * 2);
console.log(false == 0);


//SOME NOTES ON TYPE CONVERSION:
//Imagine we do this:
console.log('5' == 5); //true
console.log('' == false); //true
console.log(0 == false); //true
// What we are doing here is that we are asking a simple question, "whether the two values being compared are *similar* or not"?
// I say 'similar' because JS will try its best to convert the type of one of the either values to that of other's in order to check for similarity/equality. The rules are quite long. Not writing them here.
// One thing to remember is that: if null/undefined appears on either side of the comparison, then the other value must also be of either kind. Else, the result would be false, even if the value is legitimately 'falsy'. For instance:
console.log(null == 0); //false
console.log(null == false); //false
//This is a useful test to determine if a value is a real value, or an absence of a value.
//IMPORTANT: We can avoid this automatic type conversion by simply using === / !== (one more '=' symbol).