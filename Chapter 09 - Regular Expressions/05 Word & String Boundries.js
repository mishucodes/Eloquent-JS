function getDate(string)
{
    let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
    return new Date(year, month - 1, day);
}
console.log(getDate("1-30-2003")); //2003-01-29T18:30:00.000Z
//Unfortunately, getDate() will also happily extract a date from the string "100-1-30000":
    console.log(getDate("100-1-30000")); //2999-11-30T18:30:00.000Z
        //NOTE: it actually means: "3000-01-01T00:00:00.000Z". It's just that my timezone is not UTC.
    //But the important thing is that a valid match may happen anywhere in the string. Hence, in this case, it’ll just start at the second character and end at the second-to-last character.




//01. But, if we want to say that "the match must span the whole string", we can add the markers '^' and '$'. The caret matches the start of the input string, whereas the dollar sign matches the end. Some Examples:

    //01. Let's match a string consisting entirely of one or more digits:
        let onlyDigits = /^\d+$/;
            console.log(onlyDigits.exec('123')); //['123', index: 0, input: '123', groups: undefined]
            console.log(onlyDigits.exec('john123')); //null
            console.log(onlyDigits.exec('123doe')); //null
            console.log(onlyDigits.exec('john123doe')); //null
    //02. Let's match a string that starts with "!":
        let startsWithExclamation = /^!/;
            console.log(startsWithExclamation.exec("!hello")); //['!', index: 0, input: '!hello', groups: undefined]
            console.log(startsWithExclamation.exec("!")); //['!', index: 0, input: '!', groups: undefined]
            console.log(startsWithExclamation.exec("hello!")); //null
            console.log(startsWithExclamation.exec("hello")); //null
    //03. Let's match a string that ends with "!":
        let endsWithExclamation = /!$/;
            console.log(endsWithExclamation.exec("hello!")); //['!', index: 5, input: 'hello!', groups: undefined]
            console.log(endsWithExclamation.exec("!")); //['!', index: 0, input: '!', groups: undefined]
            console.log(endsWithExclamation.exec("!hello")); //null
            console.log(endsWithExclamation.exec("hello")); //null
    //04. Let's do something logically Impossible: Matching a string that has a "!" before the string even starts!!!
        let impossibleString = /!^/;
            console.log(impossibleString.exec('hello')); //null
            console.log(impossibleString.exec(!'')); //null
                //NOTE: We don't get a reference error here bcz !'' means applying a LOGICAL NOT operation on an empty string...
                    console.log(!''); //true





//02. We can also kind of discriminate b/w words & non-words in a string. A "\b" marker matches word boundaries, i.e., positions that have a word character on one side, and a non-word character on the other. Unfortunately, these use the same simplistic concept of word characters as "\w" and are therefore not very reliable. Some Examples:

//01. Searching a word:
let cat = /\bcat\b/;
    console.log(cat.exec('cat')); //['cat', index: 0, input: 'cat', groups: undefined]
    console.log(cat.exec('cat likes milk')); //['cat', index: 0, input: 'cat likes milk', groups: undefined]
    console.log(cat.exec('mice fear cat')); //['cat', index: 10, input: 'mice fear cat', groups: undefined]
    console.log(cat.exec('my cat is black')); //['cat', index: 3, input: 'my cat is black', groups: undefined]
    console.log(cat.exec('catMan')); //null
    console.log(cat.exec('concatenate')); //null
    console.log(cat.exec('')); //null
    console.log(cat.exec('cat!')); //null ['cat', index: 0, input: 'cat!', groups: undefined]
    console.log(cat.exec('cat$')); //null ['cat', index: 0, input: 'cat$', groups: undefined]
    console.log(cat.exec('cat007')); //null

//02. Searching a word that begins with something:
let good = /\bbene/;
    console.log(good.exec('benevolent')); //['bene', index: 0, input: 'benevolent', groups: undefined]
    console.log(good.exec('beneficent')); //['bene', index: 0, input: 'beneficent', groups: undefined]
    console.log(good.exec('carbene')); //null
    console.log(good.exec('omnibenevolent')); //null

//03. Searching a word that end with something:
let specialist = /ist\b/;
    console.log(specialist.exec('physicist')); //['ist', index: 6, input: 'physicist', groups: undefined]
    console.log(specialist.exec('chemist')); //['ist', index: 4, input: 'chemist', groups: undefined]
    console.log(specialist.exec('istanbul')); //null
    console.log(specialist.exec('historian')); //null


let whatDoesThisMean = /ist\bx\b/;
    console.log(whatDoesThisMean.exec('chemist x ray')); //null
    console.log(whatDoesThisMean.exec('chemist xray')); //null
    console.log(whatDoesThisMean.exec('chemistxray')); //null
    //NOTE: Why 'whatDoesThisMean' is impossible:
    //The pattern asks for:
        //01. "ist" in the string anywhere.
        //02. "\b": the character next to 't' must be a boundary, 't' is a word character.
        //03. 'x': this RegEx demands this character immediately after the \b, which means the character before 'x' must be a non-word character.
            //Condition (02) and (03) contradict each other. Hence, it's a logical impossibility.




//03. Say we want to know whether a piece of text contains not only a number but a number followed by one of the words pig, cow, or chicken, or any of their plural forms. The pipe character (|) denotes a choice between the pattern to its left and the pattern to its right. For Example:
    let animalCount = /\d+ (pig|cow|chicken)s?/;
    console.log(animalCount.test("15 pigs")); //true
    console.log(animalCount.test("1 cow")); //true
    console.log(animalCount.test("20 donkeys")); //false
    //NOTE: Parentheses can be used to limit the part of the pattern to which the pipe operator applies, and you can put multiple such operators next to each other to express a choice between more than two alternatives.