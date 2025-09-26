//When you aren’t sure whether a given value produces an object, but still want to read a property from it when it does, you can use a variant of the dot notation: "object?.property".
function city(object)
{
    return object.address?.city;
}
console.log(city({address: {city: "Toronto"}})); // → Toronto
console.log(city({name: "Vera"})); // → undefined
//The expression "a?.b" means the same as "a.b" when 'a' isn’t null or undefined. When it is, it evaluates to undefined. This can be convenient when, as in the example, you aren’t sure that a given property exists or when a variable might hold an undefined value.

//A similar notation can be used with square bracket access, and even with function calls, by putting ?. in front of the parentheses or brackets:
console.log("string".notAMethod?.()); // → undefined
console.log({}.arrayProp?.[0]); // → undefined



//A Good YT Video on the Subject: https://youtu.be/RA8RHgzPokk