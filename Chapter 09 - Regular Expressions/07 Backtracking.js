//Knowing about this part of the RegEx will help us better foretell the behaviour of the same on a given string.
//Backtracking: The best way to understand what it means is via some Examples:

//01. Example One:
    let determineNumberBase = /^([01]+b|[\da-f]+h|\d+)/i;
    console.log(determineNumberBase.exec('01b is a binary number'));
    console.log(determineNumberBase.exec('10 is a decimal number'));
    console.log(determineNumberBase.exec('FFh is a hexadecimal number'));
    //NOTE: This RegEx matches either a binary number followed by a 'b'; or a hexadecimal number followed by an 'h', or a regular decimal number with no suffix character.

    //Explaining the Backtracking Behaviour in Ibid:
        //a) When matching an expression (Example: "103"), the string will be subjected to the first test (binary number).
        //b) It'll become clear only at the character '3' that the string failed the first test.
        //c) So the matcher "backtracks", i.e., it would go back and try another test. This test would start from '1', since this is where the previous test began (which failed).
        //d) Now, this hexadecimal test would fail when the matcher will find out the absence of the letter 'h' after the numbers.
        //e) So the matcher would "backtrack" again. It would go back and try the last test. This test would also start from '1', since this is where the previous test began (and failed).
        //f) This test would be successful. And we're done!!!
        //NOTE: Now, this means something interesting. For Example:
            console.log(determineNumberBase.exec('10, 100, 01b, 1Fh'));
            //NOTE: The matcher stops as soon as it finds a full valid match. This means that if multiple tests could potentially match a string, only the first one (ordered left-to-right in the RegEx) is used.


//02. Example Two:
    //Backtracking also happens for repetition operators like '+' and '*'. For Example:
        //a) If we match /^.*x/ against "abcxe", the .* part will first try to consume the whole string.
        //b) The engine will then realize that it needs an 'x' to match the pattern.
        //c) Since there is no 'x' past the end of the string, the star operator tries to match one character less.
        //d) But the matcher doesn’t find an x after abcx either, so it backtracks again.
        //e) Now it finds an x where it needs it and reports a successful match from positions 0 to 4.
        //NOTE: This means:
            let findX = /^.*x/;
            console.log(findX.exec('abcxe')); //['abcx', index: 0, ...]
            console.log(findX.exec('abcxefghixkl')); // ['abcxefghix', index: 0, ...]
            //NOTE: We now know that this RegEx will find the largest-possible string that passes the test. We can say that this is due to the fact that '*' is a greedy & hungry operator.


//03. Example Three:
    //It is possible to write regular expressions that will do a LOT OF backtracking. This problem occurs when a pattern can match a piece of input in many different ways. For example, if we get confused while writing a binary-number regular expression, we might accidentally write something like:
        let isThisBinary = /([01]+)+b/;
        console.log(isThisBinary.exec('01b'));
        console.log(isThisBinary.exec('011010101010101010010101010110100101010')); //this should give your machine a hard time...
        //NOTE: Here's the excerpt from the book explaining this. I can't put it in my words, because I didn't really get it:
            //If that tries to match some long series of zeros and ones with no trailing b character, the matcher first goes through the inner loop until it runs out of digits. Then it notices there is no b, so it backtracks one position, goes through the outer loop once, and gives up again, trying to backtrack out of the inner loop once more. It will continue to try every possible route through these two loops. This means the amount of work doubles with each additional character. For even just a few dozen characters, the resulting match will take practically forever.