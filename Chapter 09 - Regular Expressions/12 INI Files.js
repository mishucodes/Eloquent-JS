//This is an example of an INI (Initialisation) file:
let INI =
`searchengine=https://duckduckgo.com/?q=$1
spitefulness=9.7

; comments are preceded by a semicolon...
; each section concerns an individual enemy
[larry]
fullname=Larry Doe
type=kindergarten bully
website=http://www.geocities.com/CapeCanaveral/11451

[davaeorn]
fullname=Davaeorn
type=evil wizard
outputdir=/home/marijn/enemies/davaeorn`

//Here's how to make sense of it:
    //a) Blank lines and lines starting with semicolons are ignored.
    //b) Lines wrapped in [ and ] start a new section.
    //c) Lines containing an alphanumeric identifier followed by an = character add a setting to the current section.
    //d) Anything else is invalid.




//This is a function to convert such a file to a JS object:
function parseINI(string)
{
    // Start with an object to hold the top-level fields
    let result = {};
    let section = result;
    for (let line of string.split(/\r?\n/))
    {
        let match;
        if (match = line.match(/^(\w+)=(.*)$/))
            section[match[1]] = match[2];
        else if (match = line.match(/^\[(.*)\]$/))
            section = result[match[1]] = {};
        else if (!/^\s*(;|$)/.test(line))
            throw new Error("Line '" + line + "' is not valid.");
    };
    return result;
}
console.log(parseINI(INI));



//Understanding this Function (Algorithm) is quite Important & Interesting:
    //a) line: "searchengine=https://duckduckgo.com/?q=$1" would execute the first if() block statement:
        //section[match[1]] = match[2];
        //RESULT:
            let result = {searchengine: "https://duckduckgo.com/?q=$1"};
            //NOTE: 'section' is pointing at 'result'...
    //b) line: "spitefulness=9.7" would execute the same block:
        //RESULT:
            result = {
                        searchengine: "https://duckduckgo.com/?q=$1",
                        spitefulness: "9.7"
                     };
            //NOTE: 'section' is still pointing at 'result'...
    //c) blank line ignored
    //d) comment line ignored
    //e) comment line ignored
    //f) line: "[larry]" would execute the second if() block statement:
        //section = result[match[1]] = {};
        //RESULT:
            result =
            {
                searchengine: "https://duckduckgo.com/?q=$1",
                spitefulness: "9.7",
                larry: {}
            }
            //NOTE: 'section' is now pointing at "result.larry". Everything else now would be added to "result.larry", until changed via second if() block statement once again...
    //g) line: "fullname=Larry Doe" would once again execute the first if() block statement:
        //section[match[1]] = match[2];
        //RESULT:
            result =
            {
                searchengine: "https://duckduckgo.com/?q=$1",
                spitefulness: "9.7",
                larry: {fullname: "Larry Doe"}
            }
            //NOTE: 'section' is still pointing at "result.larry"...
    //h) & so on & so forth...