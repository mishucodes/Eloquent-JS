//01. Scope: Each binding has a scope, which is the part of the program in which the binding is visible.
//a) Global Scoped: Bindings defined outside of any function, block, or module.
//b) Local Scoped: Bindings created for function parameters or declared inside a function. Also called "Function Scoped".
    //NOTE: Every time a function is called, new instances of its bindings are created. This provides some isolation between functions. Each function call acts in its own little world (its local environment) and can often be understood without knowing a lot about what’s going on in the global environment.
//c) Block Scoped: Bindings visible in the block in which they're created.

//SOME NOTES ON SCOPE:
    //a) 'var' bindings are local-scoped; & 'let' & 'const' are block-scoped.
    //b) Each scope can “look out” into the scope around it, i.e., code inside a block can "see" binding in outside blocks (right upto the global scope). In case of a name-clash the innermost in the scope prevails.


//02. Nested Scopes: Blocks and functions can be created inside other blocks and functions, producing multiple degrees of locality. For example:
const hummusCalculator = function(factor)
{
    const printIngredients = function(ingredientAmount, unitName, ingredientName) //these won't be visible to hummusCalculator().
    {
        let factoredIngredientAmount = ingredientAmount * factor; //'factor' is defined in the outside function...
        if (factoredIngredientAmount > 1)
            unitName += "s";
        console.log(`${factoredIngredientAmount} ${unitName} ${ingredientName}`);
    };
    printIngredients(1, "can", "chickpeas");
    printIngredients(0.25, "cup", "tahini");
    printIngredients(0.25, "cup", "lemon juice");
    printIngredients(1, "clove", "garlic");
    printIngredients(2, "tablespoon", "olive oil");
    printIngredients(0.5, "teaspoon", "cumin");
};

//03. Lexical Scoping: The set of bindings visible inside a block is determined by the place of that block in the program text. Each local scope can also see all the local scopes that contain it, and all scopes can see the global scope. This approach to binding visibility is called "lexical scoping".