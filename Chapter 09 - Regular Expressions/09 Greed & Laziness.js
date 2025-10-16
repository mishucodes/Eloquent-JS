//We can use replace to write a function that removes all comments from a piece of JavaScript code. Here is a first attempt:
    function stripComments(code)
    {
        return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
    }
    console.log(stripComments("1 + /* 2 */3")); //1 + 3
    console.log(stripComments("x = 10;// ten!")); //x = 10;
    console.log(stripComments("1 /* a */+/* b */ 1")); //1  1 (not good)
        //EXPLANATION: The "[^]*" part of the expression (as described in "backtracking"), will first match as much as it can. The matcher may move-back one character at a time, & try again from there (in case something goes wrong).
        //In the example, the matcher first tries to match the whole rest of the string and then moves back from there.
        //It will find an occurrence of "*/" after going back four characters and match that.
        //As this examples shows, it may backfire sometimes.

//NOTE: Because of this behavior, we say the repetition operators (+, *, ?, and {}) are "greedy", meaning they match as much as they can and backtrack from there.
//If we put a question mark after them (+?, *?, ??, {}?), they become non-greedy (Lazy), & start by matching as little as possible, matching more only when the remaining pattern does not fit the smaller match.
//For Example:
    function stripCommentsLazy(code)
    {
        return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
    }
    console.log(stripCommentsLazy("1 /* a */+/* b */ 1")); // 1 + 1