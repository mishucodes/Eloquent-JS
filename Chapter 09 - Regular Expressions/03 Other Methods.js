//01. exec(): It returns null if no match was found and return an object with information about the match otherwise:
    let match = /\d+/.exec("one two 100");
    console.log(match); //['100', index: 8, input: 'one two 100', groups: undefined]*
    console.log(match.index); //8 (this is wherefrom the the successful match began)...
        //*: This is an array, but it behaves like an object. JS is weird. But it's an array, technically!

//02. match(): Same as ibid, but it's a string method, not a regEx method:
    console.log("one two 100".match(/\d+/)); ////['100', index: 8, input: 'one two 100', groups: undefined]

//SOME NOTES:
    //a) When the regular expression contains subexpressions grouped with parentheses, the text that matched those groups will also show up in the array. The whole match is always the first element. The next element is the part matched by the first group (the one whose opening parenthesis comes first in the expression), then the second group, and so on.
    //For Example:
        let dateRegex = /((\d{2})-(\d{2}))-(\d{4})/;
        let newMatch = dateRegex.exec("Today's date is 13-10-2025.");
        console.log(newMatch);
        //NOTE: It proves group numbering follows the order of opening parentheses, not nesting depth. The outer “day-month” group (Group 1) comes before the day group (Group 2).
    //b) When a group does not end up being matched at all (for example, when followed by a question mark), its position in the output array will hold 'undefined'. For Example:
        console.log(/bad(ly)?/.exec("bad"));// ["bad", undefined]
    //c) When a group is matched multiple times, only the last match ends up in the array. For Example:
        console.log(/(\d)+/.exec("123")); // ["123", "3"]




//SPECIAL NOTE: You should also check out "'Greedy' v. 'Lazy' Matching for RegEx" here: https://youtu.be/yOOwIbkCFqM