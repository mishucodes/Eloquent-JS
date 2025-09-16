//JS support Boolean Types. There are many ways to produce them:

//a) Assignment:
let iLikeChocolateMilk = true;
let iLikeSeafood = false;

if(iLikeChocolateMilk)
    console.log('Mishu likes chocolate milk');
if(iLikeSeafood)
    console.log('Mishu likes seafood');

//b) Binary Operations:
console.log(1 < 2);
console.log(2 < 1);
    //based on unicode positions (left-to-right lexicographic ordering thereof):
console.log('America' < 'UK');
console.log('Zambia' < 'america'); //since all uppercase < lowercase...


//More Binary Operators:
//a) less/more than:
console.log(1 < 2);
console.log(1 > 2);
//b) less/more than / equal to:
console.log(1 <= 1);
console.log(1 >= 1);
//c) equal/not equal to:
console.log(1 == 1);
console.log(1 != 1);
console.log('apple' == 'apple'); //can compare strings too...
console.log('apple' == 'Apple'); //case sensitive...
//NOTE:
console.log(NaN == NaN); //it's false since 'NaN' is supposed to say "probably the result of an illogical operation".
//Indeed, one illogical operation is not equal to another.