//This is what we wanna have:
let journal =
[
    {events: ["work", "touched tree", "pizza", "running", "television"], squirrel: false},
    {events: ["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts", "beer"], squirrel: true},
    //more as ibid...
];

let myJournal = [];
function addEntryToMyJournal(events, squirrel) //takes an array & a boolean, respectively...
{
    myJournal.push({events, squirrel}); //this is JS Object Literal Shorthand. I didn't do: {events: events, squirrel: squirrel};
    //I just did this ^         ^
    //If a property name in brace notation isn’t followed by a value, its value is taken from the binding with the same name...
}