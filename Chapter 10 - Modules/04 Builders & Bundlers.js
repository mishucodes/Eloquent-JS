//Many JS projects aren’t even, technically, written in JS. To make this possible, people compile their code, translating it from their chosen JS dialect to plain old JS - or even to a past version of JS — so that old browsers can run it.


//01. Bundlers:
//If fetching a single file over the network takes 50 milliseconds, loading the whole program with 200 such files would take 10 seconds, or maybe half that if you can load several files simultaneously. That’s a lot of wasted time.
//Because fetching a single big file tends to be faster than fetching a lot of tiny ones, web programmers have started using tools that roll their programs (which they painstakingly split into modules) back into a single big file before they publish it to the Web. Such tools are called "bundlers".


//02. Minifiers:
//And we can go further. Apart from the number of files, the size of the files also determines how fast they can be transferred over the network. Thus, the JS community has invented "minifiers". These are tools that take a JS program and make it smaller by automatically removing comments and whitespace, renaming bindings, and replacing pieces of code with equivalent code that take up less space.