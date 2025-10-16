//01. Regular Expressions: They are a way to describe patterns in string data. They form a small, separate language that is part of JS & many other languages and systems.

//A RegEx is a type of object. It can be either constructed with the "RegExp()" constructor or written as a literal value by enclosing a pattern in forward slash (/) characters:
    let regEx1 = new RegExp("abc");
    let regEx2 = /abc/;
    //Some Rules about Special Characters:
        //a) When using the "RegExp()" constructor, the pattern is written as a normal string, so the usual rules apply for backslashes.
        //b) The second notation treats backslashes somewhat differently.
            //ba) Since a forward slash ends the pattern, we need to put a backslash before any forward slash that we want to be part of the pattern.
            //bb) Backslashes that aren’t part of special character codes (like \n) will be preserved, rather than ignored as they are in strings, and change the meaning of the pattern.
            //bc) Some characters, such as question marks and plus signs, have special meanings in regular expressions and must be preceded by a backslash if they are meant to represent the character itself.