//01. test():
    //a) Finding a Sequence of Characters:
    let regEx01 = /abc/;
    console.log(regEx01.test("abcde")); //true
    console.log(regEx01.test("abCde")); //false
    //NOTE: A regular expression consisting of only non-special characters simply represents that sequence of characters. If 'abc' occurs anywhere in the string we are testing against, "test()" will return true...


    //b) Finding from a Set of Characters:
    let regEx02 = /[0123456789]/;
    let regEx03 = /[0-9]/;
    console.log(regEx02.test("WWI ended in 1918")); //true
    console.log(regEx03.test("WWII ended in 1945")); //true
    //SOME NOTES:
        //ba) Putting a set of characters between square brackets makes that part of the expression match any of the characters between the brackets.
        //bb) Within square brackets, a hyphen (-) between two characters can be used to indicate a range of characters, where the ordering is determined by the character’s Unicode number.


    //c) Built-in shortcuts:
    /*
        \d	Any digit character
        \w	An alphanumeric character (“word character”)
        \s	Any whitespace character (space, tab, newline, and similar)
        \D	A character that is not a digit
        \W	A non-alphanumeric character
        \S	A non-whitespace character
        .	Any character except for newline
    */
        //ca) We can match a date and time format like "01-30-2003 15:20" with the following expression:
            let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
            console.log(dateTime.test("01-30-2003 15:20")); //true
            console.log(dateTime.test("30-jan-2003 15:20")); //false
        //cb) These backslash codes can also be used inside square brackets. For example:
            let regEx04 = /[\d.]/;
            console.log(regEx04.test("3.14")); //true
            console.log(regEx04.test(".14")); //true
            console.log(regEx04.test("3")); //true
            console.log(regEx04.test("ThreeDotOneFour")); //false
            //NOTE: These examples checks for "any digit or a period character". The period character itself, between square brackets, loses its special meaning. The same goes for other special characters, such as the plus sign (+), etc...


    //d) Inverting Characters:
        let isThereAnyNonBinaryCharacter = /[^01]/;
        console.log(isThereAnyNonBinaryCharacter.test("1100100010100110")); //false
        console.log(isThereAnyNonBinaryCharacter.test("0111010112101001")); //true
        //NOTE: To invert a set of characters—that is, to express that you want to "match any character EXCEPT the ones in the set", you can write a caret (^) character after the opening bracket...


    //e) Repeating Parts of a Pattern:
        //ea) one-infinite: putting a '+' after something indicates that the element may be repeated more than once.
            console.log(/'\d+'/.test("'123'")); //true
            console.log(/'\d+'/.test("''")); //false
        //eb) zero-infinite: putting a '*' after something indicates that the element may be there or repeated more than once.
            console.log(/'\d*'/.test("'123'")); //true
            console.log(/'\d*'/.test("''")); //true
        //ec) zero-one: putting a '?' after something indicates that the element may be there once or may not be there at all.
            let colour = /colou?r/;
            console.log(colour.test("colour")); //true
            console.log(colour.test("color")); //true
        //ed) X times: putting {number} after something indicates that the element must be there this set number of times.
            let personalPhoneNumber = /\d{10}/;
            console.log(personalPhoneNumber.test('0123456789')); //true
            console.log(personalPhoneNumber.test('0')); //false
        //ed) X-Y times: putting {x,y} after something indicates that the element must be there b/w this set range of times.
            let anyPhoneNumber = /\d{3,10}/;
            console.log(anyPhoneNumber.test('0123456789')); //true
            console.log(anyPhoneNumber.test('911')); //true
            console.log(anyPhoneNumber.test('0')); //false
        //ed) X-Infinite times: putting {x,} after something indicates that the element must be there at least x times.
            let anyInternationalPhoneNumber = /\d{3,}/;
            console.log(anyPhoneNumber.test('0123456789')); //true
            console.log(anyPhoneNumber.test('911')); //true
            console.log(anyPhoneNumber.test('012345678910111213')); //true
            console.log(anyPhoneNumber.test('0')); //false


    //f) Grouping Sub-Expressions:
        let cartoonCrying = /boo+(hoo+)+/i;
        console.log(cartoonCrying.test("Boohoooohoohooo")); //true
        //SOME NOTES:
            //fa) To use an operator like '*' or '+' on more than one element at a time, you must use parentheses. A part of a regular expression that is enclosed in parentheses counts as a single element as far as the operators following it are concerned.
            //fb) As you may notice, this regEx is case-insensitive. This is due to an 'i' at the end of the regEx...