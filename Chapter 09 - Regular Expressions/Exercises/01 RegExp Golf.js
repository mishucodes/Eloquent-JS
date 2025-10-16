//Writing the Smallest Possible RegEx for these strings:

//My Version:
//01. 'car' & 'cat':
    let cart = /\bca(r|t)\b/i;
    console.log(cart.test('car')) //true
    console.log(cart.test('my car')) //true
    console.log(cart.test('cat')) //true
    console.log(cart.test('cart')) //false
    console.log(cart.test('concatenate')) //false

//02. 'pop' & 'prop':
    let prop = /\bpr?op\b/i;
    console.log(prop.test('pop')); //true
    console.log(prop.test('prop')); //true
    console.log(prop.test('propagate')); //false

//03. 'ferret', 'ferry', & 'ferrari':
    let ferrari = /\bferr(et|y|ari)\b/i;
    console.log(ferrari.test('ferret')) //true
    console.log(ferrari.test('ferry')) //true
    console.log(ferrari.test('ferrari')) //true

//04. "...ious":
    let adjective = /.ious\b/iu;
    console.log(adjective.test('delicious')); //true
    console.log(adjective.test('ferocious')); //true
    console.log(adjective.test('délicious')); //true (not a very valid word, but I'm sure there would be some)...
    console.log(adjective.test('ious')); //false (I mean ik this is not a valid word)...

//05. A whitespace character followed by a period, comma, colon, or semicolon:
    let whiteSpace = /\s[.|,|:|;]/;
    console.log(whiteSpace.test(' .')) //true
    console.log(whiteSpace.test(' ,')) //true
    console.log(whiteSpace.test(' ..')) //true
    console.log(whiteSpace.test('  .')) //true

//06. A word longer than 6 letters: I'm assuming words containing 06 letters are not them containing more than 06 letters.
    let moreThanSixLetter = /\b\p{L}{7,}\b/u;
    console.log(moreThanSixLetter.test('john')) //false
    console.log(moreThanSixLetter.test('johnny')) //false
    console.log(moreThanSixLetter.test('john the man')) //false
    console.log(moreThanSixLetter.test('john the baptist')) //true
    console.log(moreThanSixLetter.test('Σωκράτης')) //false??
    console.log(moreThanSixLetter.test('Πυθαγόρας')) //false??
    //NOTE: I tried, but I couldn't figure out why is this happening :(

//07. A word without the letter 'e':
    let withoutE = /\b.*e.*\b/i;
    console.log(withoutE.test('hello')) //true
    console.log(withoutE.test('HELLO')) //true
    console.log(withoutE.test('mom')) //false
    console.log(withoutE.test('e')) //true
    console.log(withoutE.test('E')) //true

console.log('I am done with mine\n\n');






//Author's Version: I'm Not sure why nothing is working here, either...
verify(/ca[rt]/, ["my car", "bad cats", ], ["camper", "high art"]);

verify(/pr?op/, ["pop culture", "mad props"], ["plop", "prrrop"]);

verify(/ferr(et|y|ari)/, ["ferret", "ferry", "ferrari"], ["ferrum", "transfer A"]);

verify(/ious($|\P{L})/u, ["how delicious", "spacious room"], ["ruinous", "consciousness"]);

verify(/\s[.,:;]/, ["bad punctuation ."], ["escape the dot"]);

verify(/\p{L}{7}/u, ["Siebentausenddreihundertzweiundzwanzig"], ["no", "three small words"]);

verify(/(^|\P{L})[^\P{L}e]+($|\P{L})/ui, ["red platypus", "wobbling nest"], ["earth bed", "bedrøvet abe", "BEET"]);


function verify(regexp, yes, no)
{
    // Ignore unfinished exercises
    if (regexp.source == "...") return;
    for (let str of yes)
        if(!regexp.test(str))
            console.log(`Failure to match '${str}'`);
    for (let str of no)
        if(regexp.test(str))
            console.log(`Unexpected match for '${str}'`);
}