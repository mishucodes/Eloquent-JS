import {tokeniseThisCode} from "./JS files/01 Lexer.js";
import {parseTheseTokens} from "./JS files/02 Parser.js";
import {convertToJS} from "./JS files/03 Translator.js";


//01. Adding some sample Teddy code for the user:
window.addEventListener('load', () =>
    {
            const input = document.getElementById('input');
            if (!input.value) {
                input.value =   "//Try running this example:\n" +
                                "suppose x -> 5;\nsuppose y -> 10;\nsuppose sum -> x + y;\nprint(sum);\n\n" +
                                "//Explore the buttons below to see:\n" +
                                "//- How code is converted to tokens\n" +
                                "//- How an Abstract Syntax Tree is formed\n" +
                                "//- How Teddy code can be converted to JS";
            }
    });

//02. Attaching functions to buttons:
const getTokensButton = document.querySelector("#getTokens");
const getASTButton = document.querySelector("#getAST");
const getJSButton = document.querySelector("#getJS");
const runTeddyButton = document.querySelector("#runTeddy");

getTokensButton.addEventListener('click', printTokens);
getASTButton.addEventListener('click', printAST);
getJSButton.addEventListener('click', printJS);
runTeddyButton.addEventListener('click', runTeddy);


const outputTextbox = document.querySelector("#output");
//03. Defining Functions:
    //03a) printTokens:
        function printTokens()
        {
            let input = document.querySelector("#input");
            let codeString = input.value;
            let tokensArray = tokeniseThisCode(codeString);
            console.log(tokensArray);
            outputTextbox.value = JSON.stringify(tokensArray, null, 2);
        }
    //03b) printAST:
        function printAST()
        {
            let input = document.querySelector("#input");
            let codeString = input.value;
            let AST = parseTheseTokens(tokeniseThisCode(codeString));
            console.log(AST);
            outputTextbox.value = JSON.stringify(AST, null, 2);
        }
    //03c) printJS:
        function printJS()
        {
            let input = document.querySelector("#input");
            let codeString = input.value;
            let JScode = convertToJS(parseTheseTokens(tokeniseThisCode(codeString)));
            console.log(JScode);
            outputTextbox.value = JScode;
        }
    //03d) runTeddy:
        function runTeddy()
        {
            let input = document.querySelector("#input");
            let codeString = input.value;
            let JScode = convertToJS(parseTheseTokens(tokeniseThisCode(codeString)));
            let capturedOutput = "";
            const originalConsoleLog = console.log;
            console.log = (...args) =>
                {
                    capturedOutput += args.join(" ") + "\n";
                    originalConsoleLog.apply(console, args);
                };
            try
            {
                eval(JScode);
            }
            catch (err)
            {
                capturedOutput += "Error: " + err.message + "\n";
            }
            outputTextbox.value = capturedOutput.trim() || "[No output]";
        }