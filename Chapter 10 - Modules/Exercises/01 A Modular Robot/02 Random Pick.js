//Helper to Random Village Generator & Random Robot:
function randomPick(array)
{
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

export {randomPick};