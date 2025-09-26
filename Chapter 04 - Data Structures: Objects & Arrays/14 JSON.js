//00. Serialisation of Data: Conversion of complex data in a program into something that be stored/sent.
//To be more specific, is the process of converting in-memory data structures (objects, arrays, graphs, etc.) into a linear format (usually a sequence of bytes/characters) that can be stored (in a file, database, etc.) or transmitted over a network.

//01. JSON: A popular serialisation format. It means "JS Object Notation".
//NOTE: JSON looks similar to JS's way of writing objects or arrays, with a few restrictions:
    //a) All property names have to be surrounded by double quotes
    //b) Only simple data expressions are allowed - no function calls, bindings, or anything that involves actual computation.
    //c) Comments are not allowed.
//A journal entry might look like this when represented as JSON data:
let myJSON =
{
    "squirrel": false,
    "events": ["work", "touched tree", "pizza", "running"]
};

//02. JSON Functions: JS Provides us:
    //a) JSON.stringify(): To convert a JS value to a JSON value.
    //a) JSON.parse(): To convert a JSON value to a JS value.