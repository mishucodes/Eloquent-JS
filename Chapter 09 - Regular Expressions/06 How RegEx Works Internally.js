//When we use exec or test, the RegEx engine looks for a match in your string by trying to match the expression first from the start of the string, then from the second character, and so on until it finds a match or reaches the end of the string. It’ll either return the first match that can be found or fail to find any match at all. For Example:
    let cat = /cat/;
    console.log(cat.exec('my cat is a cat, not a catfish')); //['cat', index: 3, ...]
        //NOTE: the index is 3, which means it doesn't bother about other later matches.