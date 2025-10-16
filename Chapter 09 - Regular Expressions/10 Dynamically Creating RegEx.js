//We can dynamically create RegExes. For Example:
    let name = "harry";
    let text = "Harry is a suspicious character";
    let regEx = new RegExp("\\b(" + name + ")\\b", "gi");
    console.log(text.replace(regEx, "_$1_")); // _Harry_ is a suspicious character.
    //SOME NOTES:
        //a) This "\\b(" + name + ")\\b", "gi" might seem a bit weird. But the '+' is just the concat operator :')
        //b) Also, we had to use two backslashes in "\b", because we are writing them in a normal string, not a slash-enclosed RegEx.
        //c) The second argument to the RegExp constructor contains the options for the RegEx. ("gi" stands for for "global" & "case insensitive").


//But what if the name is "dea+hl[]rd" because our user is a nerdy teenager?
//To work around this, we can add backslashes before any character that has a special meaning.
    let newName = "dea+hl[]rd";
    let newText = "This dea+hl[]rd guy is super annoying.";
    let escaped = newName.replace(/[\\[.+*?(){|^$]/g, "\\$&");
    let NewRegEx = new RegExp("\\b" + escaped + "\\b", "gi");
    console.log(newText.replace(NewRegEx, "_$&_")); //This _dea+hl[]rd_ guy is super annoying.