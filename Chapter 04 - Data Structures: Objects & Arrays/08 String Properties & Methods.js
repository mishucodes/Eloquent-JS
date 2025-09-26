//01. Every string value has a number of methods. Some very useful ones are .slice() and .indexOf(), which resemble the array methods of the same name:
console.log("coconuts".slice(4, 7)); // → nut
console.log("coconut".indexOf("u")); // → 5
//NOTE: One difference is that a string’s indexOf can search for a string containing more than one character, whereas the corresponding array method looks only for a single element:
console.log("one two three".indexOf("ee")); // → 11


//02. The .trim() method removes whitespace characters from the start and end of a string:
console.log("  okay \n ".trim()); // → okay


//03 .padStart(): takes the desired length and padding character as arguments:
console.log(String(6).padStart(3, "0")); // → 006


//04. You can split a string on every occurrence of another string with split and join it again with join:
let sentence = "Birds specialize in flying";
let words = sentence.split(" ");
console.log(words); // → ["Birds", "specialize", "in", "flying"]
console.log(words.join("# ")); // → Birds# specialize# in# flying


//05. A string can be repeated with the .repeat() method, which creates a new string containing multiple copies of the original string, glued together:
console.log("LA".repeat(3)); // → LALALA


//06. We have already seen the string type’s length property:
let string = "abc";
console.log(string.length); // → 3


//07. Accessing the individual characters in a string looks like accessing array elements:
console.log(string[1]); // → b
//NOTE: this has a 'complication' discussed in Chapter 05...