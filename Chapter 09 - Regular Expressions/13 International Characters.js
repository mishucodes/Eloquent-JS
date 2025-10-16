//01. JS's regEx are rather dumb about characters that do not appear in the English language. For example, as far as JS’s regEx are concerned, a “word character” means:
    //a) 26 Characters in the Latin alphabet (uppercase or lowercase)
    //b) Decimal Digits
    //c) Underscore.
    //NOTE: Characters like 'é' or 'β' will not match "\w", but rather "\W" (the non-word category).
//NOTE: By a strange historical accident, "\s" (whitespace) does not have this problem and matches all characters that the Unicode standard considers whitespace.

//It is possible to use "\p" in a regEx to match all characters to which the Unicode standard assigns a given property. This allows us to match things like letters in a more cosmopolitan way. However, again due to compatibility with the original language standards, those are recognized only when you put a 'u' character (for Unicode) after the regEx.
//Here are some Examples:
    // \p{L} -> Any letter
    // \p{N} -> Any numeric character
    // \p{P} -> Any punctuation character
    // \P{L} -> Any non-letter (uppercase P inverts)
    // \p{Script=Greek} -> Any character from the given script

    console.log(/\p{L}/u.test("α")); //true
    console.log(/\p{L}/u.test("!")); //false
    console.log(/\p{Script=Greek}/u.test("α")); //true
    console.log(/\p{Script=Arabic}/u.test("α")); //false



//02. Another design mistake that’s been standardized in JS regEx is that by default, operators like '.' or '?' work on code units, not actual characters. This means characters that are composed of two code units behave strangely.
    console.log(/😄{3}/.test("😄😄😄")); //false
    console.log(/<.>/.test("<💀>")); //false
    console.log(/<.>/u.test("<💀>")); //true

//The problem is that the 😄 in the first line is treated as two code units, and {3} is applied only to the second unit. Similarly, the dot matches a single code unit, not the two that make up the skull emoji.
//We must add the 'u' (Unicode) option to your regEx to make it treat such characters properly:
    console.log(/😄{3}/u.test("😄😄😄")); //true