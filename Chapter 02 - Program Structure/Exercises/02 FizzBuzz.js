//My Solution (I think it should be more efficient):
for(let i = 1; i < 101; i++)
{
    if(i % 3 === 0 && i % 5 === 0)
    {
        console.log('fizzBuzz');
        continue;
    }
    if(i % 3 === 0)
    {
        console.log('fizz');
        continue;
    }
    if(i % 5 === 0)
    {
        console.log('buzz');
        continue;
    }
    console.log(i);
}

//Author's Solution:
for (let n = 1; n <= 100; n++)
{
    let output = "";
    if (n % 3 == 0) output += "Fizz"; //not sure why the author bothers with concatenation...
    if (n % 5 == 0) output += "Buzz";
    if (n % 5 == 0 && n % 3 == 0) output = "FizzBuzz"; //I added this to the author's version...
    console.log(output || n);
}