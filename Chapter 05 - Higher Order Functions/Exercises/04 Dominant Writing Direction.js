import {SCRIPTS} from "./04 Scripts Data.js";


//My Version:
console.log(determineDominantWritingDirectionOf('hello'));
console.log(determineDominantWritingDirectionOf('مرحبًا'));
console.log(determineDominantWritingDirectionOf(''));
console.log(determineDominantWritingDirectionOf(123));
//Function Definitions:
function determineDominantWritingDirectionOf(str)
{
    if(typeof str !== 'string')
        return 'bad input';

    let directionData = getDirectionDataFor(str);
    let maxKey = 'none';
    let maxValue = -Infinity;
    for (let key in directionData)
        if (directionData[key] > maxValue)
        {
            maxValue = directionData[key];
            maxKey = key;
        }
    return maxKey;
}
//Helper Function:
function findScriptOf(char)
{
    let unicodeValue = char.codePointAt(0);
    for (let script of SCRIPTS)
    if (script.ranges.some(([start, end]) => unicodeValue >= start && unicodeValue < end? true: false))
        return script;
    return null;
}
//Helper Function:
function getDirectionDataFor(str)
{
    let directions = {};
    for(let char of str)
    {
        let script = findScriptOf(char);
        let key = script?.direction;
        if(key == undefined)
            continue;
        if(directions.hasOwnProperty(key))
            directions[key]++;
        else
            directions[key] = 1;
    }
    return directions;
}





//Author's Version:
function dominantDirection(text)
{
    let counted = countBy(text, char =>
        {
            let script = characterScript(char.codePointAt(0));
            return script ? script.direction : "none";
        }).filter(({name}) => name != "none");
        if (counted.length == 0)
            return "ltr";
        return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}
console.log(dominantDirection("Hello!")); // → ltr
console.log(dominantDirection("Hey, مساء الخير")); // → rtl
console.log(dominantDirection("")); // → idkw it says rtl
console.log(dominantDirection()); // → breaks :/


//Helper Functions for Author's version:
//01.
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.find(c => c.name == name);
    if (!known) {
      counts.push({name, count: 1});
    } else {
      known.count++;
    }
  }
  return counts;
}
//02.
function characterScript(code)
{
  for (let script of SCRIPTS)
  {
    if (script.ranges.some(([from, to]) =>
      {
        return code >= from && code < to;
      }))
      return script;

  }
  return null;
}