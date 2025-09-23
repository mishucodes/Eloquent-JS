//Control Flow: The direction in which programs are executed. JS is top-to-bottom (unless tailored otherwise) & mostly left-to-right (thanks to rules regarding operator associativity).
//For the purposes of this lecture, forget associativity. Just focus on the top-to-bottom direction. Think in one-dimension.

//Here's how the default Control Flow might be imagined:
// --------------------->


//01. Conditional Execution (Fork in the Road Clause):
let age = 18;
if(age < 18)
    console.log('Not eligible for voting');
else
    console.log('Eligible for voting');
console.log('program continues normally herefrom')
//Here's how this Control Flow might be imagined:
//        /-----------\
// ------●             ●------------->
//        \-----------/


//02. Loops:
//a) while loop:
    let number = 1;
    while(number <= 5)
        console.log(number++);
//b) do loop:
    let yourName = 'john';
    do console.log("Who are you?");
    while (!yourName);
//c) for loop:
    for(let i = 0; i <= 5; i++)
        console.log(i);
//Here's how this Control Flow might be imagined:
// -------------●------------------->
//             / \
//            /   \
//           ●-----●

//NOTES ON LOOPS:
//a) Having the looping condition produce false is not the only way a loop can finish. The 'break' statement has the effect of immediately jumping out of the enclosing loop. For example:
for (let current = 10; ; current++) //prints a number equal-to/grater than 10 && divisible by 07..
{
    if (current % 7 === 0)
        {
            console.log(current);
            break;
        }
}
//b) The 'continue' statement is similar to 'break' in that it influences the progress of a loop. When 'continue' is encountered in a loop body, control jumps out of the body and continues with the loop’s next iteration. For example:
for(let i = 0; i < 10; i++)
{
    if(i % 2 === 0) //skip even numbers...
        continue;
    console.log(i);
}