//01. Map: A map (noun) is a data structure that associates values (the keys) with other values. For example, you might want to map names to ages. It is possible to use objects for this:
    let ages =
    {
        Boris: 39,
        Liang: 22,
        Julia: 62
    };
    console.log("Is Jack's age known?", "Jack" in ages); // -> false
    console.log("Is toString's age known?", "toString" in ages); // -> true???
//Since plain objects derive from "Object.prototype", it looks like the property is there. As such, using plain objects as maps is dangerous. There are several possible ways to avoid this problem:
    //a) We may create objects with no prototype. If we pass 'null' to "Object.create()", the resulting object will not derive from "Object.prototype" and can safely be used as a map:
        console.log("toString" in Object.create(null));
    //NOTE: Object property names must be strings/symbols. If you need a map whose keys can’t easily be converted to strings, you cannot use an object as your map.


    //b) JS comes with a class called 'Map' that is written for this exact purpose. It allows any type of keys:
    let kids = new Map();
    kids.set("Boris", 9);
    kids.set("Liang", 2);
    kids.set("Julia", 6);
    console.log(`Julia is ${kids.get("Julia")}`);
    console.log("Is Boris's age known?", kids.has("Boris"));
    console.log(kids.has("toString"));
    //NOTE: The methods 'set', 'get', & 'has' are part of the interface of the Map object.


//If you do have a default object that you need to treat as one with the prototype null for some reason, it is useful to know that Object.keys returns only an object’s own keys, not those in the prototype. As an alternative to the in operator, you can use the hasOwnProperty method, which ignores the object’s prototype:
    console.log({x: 1}.hasOwnProperty("x")); // -> true
    console.log({x: 1}.hasOwnProperty("toString")); // -> false