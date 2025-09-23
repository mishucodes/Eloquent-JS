//My Version:
let gridSize = 8;
function createGrid(gridSize)
{
    let str = '';
    for(let i = 0; i < gridSize; i++)
    {
        for(let ii = 0; ii < gridSize; ii++)
        {
        if ((i % 2 !== 0 && ii % 2 !== 0) || (i % 2 === 0 && ii % 2 === 0)) //if the row & column are odd/even (same)...
                str += ' ';
            else
                str += '#';
        }
        str += '\n';
    }
    return str;
}
console.log(createGrid(gridSize));


//Author's Solution (Pretty Smart):
let size = 8;
let board = "";
for (let y = 0; y < size; y++)
{
    for (let x = 0; x < size; x++)
    {
        if ((x + y) % 2 == 0)
            board += " ";
        else
            board += "#";
    }
    board += "\n";
}
console.log(board);