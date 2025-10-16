//01. Date: A class in JS to create & manage time.
    console.log(new Date()); //time & date right now!

//We can also create an object for a specific time:
console.log(new Date(2009, 11, 9, 12, 59, 59, 999)); //2009-12-09T07:29:59.999Z (month is 00-indexed, days are 01-indexed)
console.log(new Date(2009, 11, 9, 12, 59, 59)); //2009-12-09T07:29:59.000Z
console.log(new Date(2009, 11, 9, 12, 59)); //2009-12-09T07:29:00.000Z
console.log(new Date(2009, 11, 9, 12)); //2009-12-09T06:30:00.000Z
console.log(new Date(2009, 11, 9)); //2009-12-08T18:30:00.000Z
console.log(new Date(2009, 11)); //2009-12-30T18:30:00.000Z
console.log(new Date(2009)); //1970-01-01T00:00:02.009Z (2009 ms after Jan 1, 1970. A single argument means milliseconds)!!
    //SOME NOTES ON THIS UNIX TIME:
        //a) NodeJS/Browser automatically converts local time to UTC. So, we all might see something different here!
        //b) Month is zero-indexed, but days are one-indexed.
        //c) Hrs, Mins, Secs. Msecs. default to zero if no arguments are present.
        //d) Time is stored & can be created via a single number (how many Msecs. have passed since the start of 1970, UTC).
        //e) Time stored/created in negative numbers would represent time before 1970, UTC.

//More Methods on the date object:
    //a) getTime(): Converting time into MilliSeconds:
        console.log(new Date().getTime());
    //b) now(): Ibid, but time would be an argument, not an object on which we call the method:
        console.log(Date.now(new Date()));
    //c) getFullYear(): res ipsa loquitor:
        console.log(new Date().getFullYear());
    //d) getYear(): res ipsa loquitor: (DON'T USE IT...)
        console.log(new Date().getYear());
    //e) getMonth(): res ipsa loquitor:
        console.log(new Date().getMonth());
    //f) getDate(): res ipsa loquitor:
        console.log(new Date().getDate());
    //g) getHours(): res ipsa loquitor:
        console.log(new Date().getHours());
    //h) getMinutes(): res ipsa loquitor:
        console.log(new Date().getMinutes());
    //i) getSeconds(): res ipsa loquitor:
        console.log(new Date().getSeconds());