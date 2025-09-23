//01. Expression: A piece of code that produces a 'value'. For instance:
2
'str'
typeof 'str'
//An Expression may contain many sub-expressions:
1+2
'hello' + 'world'

//02. Statement: A piece of code that is like a complete sentence in itself:
2; //complete but meaningless...
console.log(2); //a complete sentence that does something...
let x = 1; //ibid...
x--; //ibid...
//SOME NOTES:
    //a) A 'program' really is just a list of statements, just as a prose is a list of sentences.
    //b) A statement stands on its own, just as a sentence stands on its own.


//03: Side Effects: If a function does anything other than just computing and returning a value, it has a side effect.
//For example:
    //a) Function Without a Side-Effect (Pure Function):
    function add(x,y)
    {
        return x+y;
    }
    //b) Function With a Side-Effect:
    function add(x,y)
    {
        x = 10; //first side effect: changing the internal state of the program outside the function.
        console.log('x+y'); //second side effect: printing something on screen.
        //console.log() is an impure function itself. It takes a value, & returns undefined. But it also prints (side-effect).
        return x+y;
    }