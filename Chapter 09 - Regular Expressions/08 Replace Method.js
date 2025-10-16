//01. String values have a "replace()" method that can be used to replace part of the string with another string.
    console.log("lala".replace("l", "k")); //kala;

    
//02. The first argument can also be a RegEx. When a 'g' (global) is added after the RegEx, all matches in the string will be replaced, not just the first:
    console.log("lala".replace(/l/g, "k")); //kaka;


//03. We can refer to matched groups in the replacement string. For example:
    let authors = "Kahneman, Daniel\nClayton, Christensen\nAriely, Dan"
    console.log(authors.replace(/(\p{L}+), (\p{L}+)/g, "$2 $1"));
        // -> Daniel Kahneman
        // -> Christensen Clayton
        // -> Dan Ariely
    //NOTE: The $1 and $2 in the replacement string refer to the parenthesized groups in the pattern. $1 is replaced by the text that matched against the first group, $2 by the second, and so on, up to $9. The whole match can be referred to with $&.


//04. It is possible to pass a function, rather than a string, as the second argument to replace. For Example:
    let stock = "1 lemon, 2 cabbages, and 101 eggs";
    function minusOne(match, amount, unit)
    {
        amount = Number(amount) - 1;
        if (amount == 1)
            unit = unit.slice(0, unit.length - 1);
        else if (amount == 0)
            amount = "no";
        return amount + " " + unit;
    }
    console.log(stock.replace(/(\d+) (\p{L}+)/gu, minusOne));
        // → no lemon, 1 cabbage, and 100 eggs