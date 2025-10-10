//Symbols: A primitive type in JS that can also be used as keys in objects. They are created with the "Symbol()" function. Unlike strings, newly created symbols are unique. You cannot create the same symbol twice:
    let sym = Symbol("name");
    console.log(sym == Symbol("name")); //false
//NOTE: The string you pass to Symbol is included when you convert it to a string and can make it easier to recognize a symbol when, for example, showing it in the console. But it has no meaning beyond that. Multiple symbols may have the same name.

//Being both unique and usable as property names makes symbols suitable for defining interfaces that can peacefully live alongside other properties, no matter what their names are.
    const toStringSymbol = Symbol("toString");
    Array.prototype[toStringSymbol] = function() {return `${this.length} cm of blue yarn`;};
    console.log([1, 2].toString()); // -> 1,2
    console.log([1, 2][toStringSymbol]()); // -> 2 cm of blue yarn

//It is possible to include symbol properties in object expressions and classes by using square brackets around the property name. That causes the property name to be evaluated, much like the square bracket property access notation, which allows us to refer to a binding that holds the symbol:
let stringObject =
{
    [toStringSymbol]() { return "a jute rope"; }
};
console.log(stringObject[toStringSymbol]()); // -> a jute rope


//NOTE: I'm not delving too deep into this topic, because I honestly I'm unable to think of a situation where I'll be using it. Also, I'm not very confident of this topic tbh. I tried, but I could not.