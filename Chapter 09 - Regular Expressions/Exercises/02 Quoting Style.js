const allegoryOfCave = `'Imagine', said the philosopher, 'a group of people who've lived their whole lives chained inside a cave, facing a wall. Behind them burns a fire, and between the fire and the prisoners runs a low walkway where others carry objects whose shadows dance upon the wall. The prisoners see only those shadows and take them for the whole of reality.
One day, one of them is freed; he turns toward the fire and is blinded by its light. If he's dragged outside, he'll first see only darkness, then reflections in water, and finally the sun itself. When he returns to the cave, his eyes will ache, and his old companions will laugh, saying the journey has ruined him.
Yet, he'd know the truth—that the world of shadows was never real, and that wisdom begins when one dares to turn around.'`


//My Version:
function changeQuoteStyle(str)
{
    if(typeof str !== 'string')
        throw new Error('Wrong Data Type');
    //else:
    let newStr;
    newStr = str.replaceAll(/(^')|(\s')|('\s)|('[.,:;?!\n])/g, (char) => char.replace(/'/i, '\"'));
    console.log(newStr);
}
changeQuoteStyle(allegoryOfCave);
//Explanation: So, this fn basically takes a string as argument. And:
    //a) It's first job is to find out all the quote-characters that are not a part of a word. The test for that is quite straightforward, i.e., a quote might be:
        //aa) at the beginning of the string itself.
        //ab) right after some whitespace character.
        //ac) right before some whitespace character.
        //ad) right before some character that signals the end of a clause.
    //b) Now that we have the singleQuote character (along-with something else that matched with it), we must make sure that we don't replace the whole match with a simple doubleQuote string. This is why we don't pass a string as the second argument, but rather a function. This function:
        //ba) finds the singleQuote character from the matched string.
        //bc) replaces that singleQuote character with a doubleQuote character.






//Author's Version:
let text = "'I'm the cook,' he said, 'it's my job.'";
console.log(text.replace(/(^|\P{L})'|'(\P{L}|$)/gu, '$1"$2'));
    //"I'm the cook," he said, "it's my job."