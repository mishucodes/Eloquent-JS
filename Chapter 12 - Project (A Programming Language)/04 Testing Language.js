import {tokeniseThisCode} from "./01 Lexer.js";
import {parseTheseTokens} from "./02 Parser.js";
import {convertToJS} from "./03 Translator.js";

function compileThisCode(codeStr)
{
    let tokens = tokeniseThisCode(codeStr);
    let AST = parseTheseTokens(tokens);
    let JScode = convertToJS(AST);
    return JScode;
}

let sourceCode =
    `
        suppose votingAge -> 18, suppose johnsAge -> 10;
        suppose johnName -> "john";

        if(johnsAge < 15)
            print(johnName, "cannot vote");
        elseIf(johnsAge < votingAge)
            print(johnName, "should vote soon");
        else
            print(johnName, "can vote");

        suppose templateLiteral -> 'hello \${johnName}';
        print(templateLiteral);

        suppose myObject -> {name: "john", age: 21};
        suppose myArray -> [1,2,3];
        suppose myNestedArray -> [1,2,3, {name: "bob"}, ["x", "y", "z"]];

        //comments like these will be ignored...

        suppose myFunction -> function(x,y)
        {
            return x+y;
        };
        print(myFunction(2,3));

        {
            print("this is a new block");
            if(true)
            {
                suppose x -> 100;
                print(x);
            }
        }
    `;


// console.log(tokeniseThisCode(sourceCode));
// console.log(parseTheseTokens(tokeniseThisCode(sourceCode)));
// console.log(convertToJS(parseTheseTokens(tokeniseThisCode(sourceCode))));

// let JSCode = compileThisCode(sourceCode);
// console.log(JSCode);
// eval(JSCode);