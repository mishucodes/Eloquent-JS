//GLOBAL VARIABLES:
let height = 41, width = 71;
let gridElement = document.querySelector("#grid");
window.addEventListener("keydown", (e) => 
    {
        switch(e.key)
        {
            case "Enter":
            case " ": //space
                nextGeneration();
        }            
    });

//Initialising Program with a Random Grid:
fillGrid(getRandomGrid(height, width));



//HELPER FUNCTIONS:
    //01. Generate Random Grid:
        function getRandomGrid(height, width)
        {
            let grid = [];
            for(let y = 0; y < height; y++)
            {
                let row = document.createElement("tr");
                for(let x = 0; x < width; x++)
                {
                    let cell = document.createElement("td");
                    cell.classList.add(Math.random() < 0.25? "alive": "dead");
                    row.appendChild(cell);
                }
                grid.push(row);
            }
            return grid;
        }
    //02. Fill the Grid:
        function fillGrid(grid)
        {
            gridElement.replaceChildren(...grid);
        }
    //03. Move to the Next Generation:
        function nextGeneration()
        {
            let newGrid = [];
            let rows = Array.from(gridElement.children);
            rows.forEach((row, indexRow) =>
                {
                    let newRow = document.createElement("tr");
                    let cells = Array.from(row.children);
                    cells.forEach((cell, indexCell) =>
                        {
                            let newCell = document.createElement("td");
                            let numberOfAliveNeighbours = countAliveNeighboursOf(indexCell, indexRow, rows, cells);
                            switch(numberOfAliveNeighbours)
                            {
                                case 2:
                                    newCell.classList.add(cell.classList.contains("alive")? "alive": "dead");
                                    break;
                                case 3:
                                    newCell.classList.add("alive");
                                    break;
                                default:
                                    newCell.classList.add("dead");
                            }
                            newRow.appendChild(newCell);
                        });
                    newGrid.push(newRow);
                });
            fillGrid(newGrid);
        }
    //03A. Counting the Alive Neighbours of a Cell:
        function countAliveNeighboursOf(x, y, rows, cells)
        {
            let numberOfAliveNeighbours = 0;
            for(let y1 = Math.max(0, y-1); y1 < Math.min(y+2, rows.length); y1++)
            {
                for(let x1 = Math.max(0, x-1); x1 < Math.min(x+2, cells.length); x1++)
                {
                    if(x1 === x && y1 === y)
                        continue;
                    if(rows[y1].children[x1].classList.contains("alive"))
                        numberOfAliveNeighbours++;
                }
            }
            return numberOfAliveNeighbours;
        }