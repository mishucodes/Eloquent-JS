//01. Binding/Variable: A thing in programming that 'holds'/'points to' a value. For instance:
let x = 1;
let one = 1, two = 2;
//'let' is a 'keyword' in JS that indicates that this particular sentence is going to declare (& maybe define) a binding.

//Some Notes on Bindings:
    //a) More than one binding may point to a common value in memory.
    //b) A value to which no binding points get lost in the ocean of bits (garbage collected).
    //c) A binding that points to nothing will produce 'undefined' as its value.

//01a. Using 'var' & 'const' to declare bindings:
var myVar = 'var'; //pre-2015 style...
const myConst = 'const'; //can only point to the same thing all its life...

//PS: var is function/global scoped; let & const are block/function/global scoped.
    //In other words, var is function scoped, let & const are block scoped.


//02. Rules for Naming Bindings:
    //a) must be a single word.
    //b) can't start with a number.
    //c) only 2 special characters are allowed ($ & _).
    //d) 'keywords' & 'reserved words' can't be used.