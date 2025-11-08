//ABOUT: This project implements a small programming language inspired by the language-building chapter in "Eloquent JS" by Marijn Haverbeke. The aim is to deepen my understanding of interpreters and compilers by building a language from first principles, i.e., writing my own lexer, parser, AST structure, and code generator, rather than following the book verbatim.
//The language is called "teddy": not just because “teddy” is the canonical toy name, but also because this particular word has an etymology and origin I find personally interesting (President Teddy Roosevelt). It also feels fitting - an innocuous name with a hint of larger ambition beneath it, which matches the spirit of this project.
//This implementation diverges from the book’s example in design and execution, reflecting personal experimentation and ideas formed along the way.
//References:
    //a) Chapter 12, Eloquent JS (3rd Edition)
    //b) https://youtu.be/rTuTLc_u6qw?si=IhZS80v_gbLANMXl




//The Program is divided into 03 parts:
    //a & b) Parser: It is a program that reads a piece of text (source code) and produces a data structure (AST) that reflects the structure of the program contained in that text. If the text does not form a valid program, the parser should also point out the error. What the author calls "parser" will be further divided into two steps/functions in this project:
        //aa) Breaking-up of the code into 'tokens' (atoms).
        //ab) Creating an AST (Abstract Syntax) from these tokens.
    //c) We can now translate this AST into any language we want (we'll do JS for now).

//SOME ADDITIONAL NOTES:
    //a) If you're thinking that "we're just translating some code from 'our own' so-called 'language' into JS. Isn't it misleading to suggest that we're 'creating' our own language?", I wouldn't argue otherwise, for this is exactly what we're doing here. But this is still worth doing because it'll teach us lots of things:
        //aa) How programming languages break-up our code/syntax into tokens (atoms).
        //ab) How they then create an AST.
        //ac) How an AST is converted to something a machine may understand.
    //b) Me referring to 'tokens' as 'atoms' is not poor poetry. I mean it literally. An 'atom' literally means "something that cannot be broken up any further" (https://en.wiktionary.org/wiki/atom). Similarly, in any programming language a 'token' refers to the smallest possible piece of information a language would consider 'legal'.