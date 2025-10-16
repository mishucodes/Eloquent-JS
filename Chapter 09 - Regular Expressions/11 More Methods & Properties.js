//01. search(): indexOf() on strings cannot be called with a regEx, but we have a similar method for regEx:
    console.log("  word".search(/\S/)); //2
    console.log("    ".search(/\S/)); //-1
    //NOTE: Unfortunately, there is no way to indicate that the match should start at a given offset (like we can with the second argument to indexOf), which would often be useful.


//02. lastIndex: I'm kind of pissed by its syntax. Also, I don't think I'll be using it IRL. When/If I do, I'll probably refer to documents/book itself. Here are some notes though:

    //The "exec()" method also does not provide a convenient way to start searching from a given position in the string.
    //But it does provide an inconvenient way.
    //RegEx objects have properties. One such property is "source", which contains the string that expression was created from.
    //Another property is called "lastIndex", which controls (in some limited circumstances) where the next match will start.
    //Those circumstances are that:
        //a) The RegEx must have the global (g) or sticky (y) option enabled
        //b) The match must happen through the exec method.
            let pattern = /y/g;
            pattern.lastIndex = 3;
            let match = pattern.exec("xyzzy");
            console.log(match.index); //4
            console.log(pattern.lastIndex); //5
            //EXPLANTATION: If the match was successful, the call to "exec()" automatically updates the "lastIndex" property to point after the match. If no match was found, "lastIndex" is set back to 0, which is also the value it has in a newly constructed RegEx object.
        
        //SOME NOTES & CAUTIONS:
            //a) When using a shared regEx object for multiple "exec()" calls, these automatic updates to the "lastIndex" property can cause problems. The regEx might be accidentally starting at an index left over from a previous call:
                let digit = /\d/g;
                console.log(digit.exec("here it is: 1")); // ["1"]
                console.log(digit.exec("and now: 1")); //null
            //b) Another interesting effect of the global option is that it changes the way the match method on strings works. When called with a global expression, instead of returning an array similar to that returned by exec, match will find all matches of the pattern in the string and return an array containing the matched strings.
                console.log("Banana".match(/an/g)); // ["an", "an"]
            //So be cautious with global regEx. The cases where they are necessary, i.e., calls to "replace()" and places where you want to explicitly use "lastIndex" are typically the situations where you want to use them.



//03. A common thing to do is to find all the matches of a regEx in a string. There are two methods for this:
    let an = /an/;
    let anGlobal = /an/g;
    //a) match():
        console.log('banana'.match(an));
        console.log('banana'.match(anGlobal));
        //NOTE: Another interesting effect of the global option is that it changes the way "match()" on strings works. When called with a global expression, instead of returning an array similar to that returned by exec, match will find all matches of the pattern in the string and return an array containing the matched strings.
    //b) matchAll():
        let matches = 'banana'.matchAll(anGlobal);
        console.log(matches);
        for(let match of matches)
            console.log(match);