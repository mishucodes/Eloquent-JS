//Immutable/Persistent Data Structures: Values you can never change directly. Instead of modifying them, you create new versions when something changes.
//Imagine you’re keeping a diary. If every day you erase yesterday’s entry and rewrite it with today’s thoughts, you’ll have no history — just one endlessly overwritten page. That’s mutation (changeable data).
//But if you add a new entry each day and keep the old ones, you can always go back, see what you wrote, and be sure those pages haven’t changed. That’s immutability (persistent data). Immutable objects are like diary pages you never erase.

//Immutability makes code easier to reason about.
//If you know something can’t change, your brain (and your program) can relax. You can trust that the object you’re using will stay the same from start to end of a function. That means fewer “how did this suddenly change?” bugs.
//In JS, objects & arrays are mutable by default. You can use Object.freeze() to protect them:
    let obj = Object.freeze({value: 5});
    obj.value = 10; //silently ignored
    console.log(obj.value); //5

//The author’s key point in this part of the book is that "the biggest limit on what we can build is how much we can understand".
//If your program’s state keeps changing everywhere, it’s like trying to track water flowing through pipes you can’t see. If the data never changes (only replaced), it’s like having snapshots you can label, compare, or rewind — far easier to understand.