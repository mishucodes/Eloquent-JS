class MultiplicationUnitFailure extends Error{};
class RandomFailure extends Error{};
function primitiveMultiply(x,y)
{
    if(Math.random() < 0.5)
        return x*y;
    if(Math.random() < 0.1)
        return new RandomFailure('random failure');
    throw new MultiplicationUnitFailure('multiplication failure');
}

//My Version:
function multiplyBetter(fn,x,y)
{
    for(;;)
        try
        {
            return fn(x,y);
        }
        catch(err)
        {
            if(!err instanceof MultiplicationUnitFailure)
                throw err;
            else
                continue;
        }
}
console.log(multiplyBetter(primitiveMultiply, 2,3));


//Author's Version:
function reliableMultiply(a, b)
{
    for (;;)
    {
        try
        {
            return primitiveMultiply(a, b);
        }
        catch (e)
        {
            if (!(e instanceof MultiplicationUnitFailure))
                throw e;
        }
    }
}
console.log(reliableMultiply(8, 8));