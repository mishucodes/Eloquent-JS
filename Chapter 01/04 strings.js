//Strings are basically text:
let styleOne = 'char style syntax';
let styleTwo = 'str style syntax';
let styleThree = 'backtick style syntax. sui generis'; //check special notes below...


//SOME NOTES:
//a) You can put *almost* anything b/w the quotes, & JS will make a string out of it.
//b) "Escape Characters" are used to 'stringify' difficult things. Such as quotes, newlines, etc.
//c) JS follows the Unicode standard for strings, but uses 16 bits to represent a char.
        //ca) This means some trouble which we'll later get to. If you didn't get this RN, DW.


//Concatenating Strings:
let concat = 'con' + 'cat' + 'e' + 'nat' + 'e';
console.log(concat);


//SPECIAL NOTES ON styleThree:
//a) This is not normal string creation syntax. We're actually creating something called "Template Literals".
//b) They can do special tricks:
        let embedBinding = `let's print ${concat}`;
        let embedValue = `let's print ${2+2}`;
        console.log(embedBinding);
        console.log(embedValue);
        //anything written b/w ${} will be (i) computed; (ii) converted to string; & (iii) embedded into the template literal.