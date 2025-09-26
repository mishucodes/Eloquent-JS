//01. If you need to do trigonometry, Math can help. It contains:
    //a) Math.cos() i.e., cosine
    //b) Math.sin() i.e., sine
    //c) Math.tan() i.e., tangent

//02. As well as their inverse functions:
    //a) Math.acos()
    //b) Math.asin()
    //c) Math.atan()

//03. The number π (pi) is available as: Math.PI...

//04. A random number b/w 0-1 is generated via Math.random():
console.log(Math.random());

//05. If we want a whole random number instead of a fractional one, we can use Math.floor(), which rounds down to the nearest whole number. For example:
console.log(Math.floor(Math.random() * 10)); //will produce a random b/w 01-10...

//06. There are also the functions like:
    //a) Math.ceil(), which rounds up to a whole number...
    //b) Math.floor(), which rounds down to a whole number...
    //c) Math.round, which rounds to the nearest whole number (0.5 and above goes up)...
    //d) Math.abs(), which takes the 'absolute value' of a number (removes the negative sign, if any)...