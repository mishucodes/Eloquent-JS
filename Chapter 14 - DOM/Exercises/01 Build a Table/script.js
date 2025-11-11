const MOUNTAINS =
[
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];


//My Version:
    //a) Works but bad design. It changes the DOM as many times as many rows there are:
    function insertTableBad(arrayOfObjects, element)
    {
        let tableHeadingRow = document.createElement("tr");
        for(let heading in arrayOfObjects[0])
        {
            let tableHeading = document.createElement("th");
            tableHeading.textContent = heading.toUpperCase();
            tableHeadingRow.appendChild(tableHeading);
        }
        element.appendChild(tableHeadingRow);

        for(let mountain of arrayOfObjects)
        {
            let mountainRow = document.createElement("tr");
            for(let property in mountain)
            {
                let td = document.createElement("td");
                td.textContent = mountain[property];
                mountainRow.appendChild(td);
            }
            element.appendChild(mountainRow);
        }
    }
    insertTableBad(MOUNTAINS, document.getElementById("mountains"));

    
    //b) Works & good design. It changes the DOM only:
    function insertTableBetter(arrayOfObjects, element)
    {
        let elementClone = element.cloneNode();
        let tableHeadingRow = document.createElement("tr");
        for(let heading in arrayOfObjects[0])
        {
            let tableHeading = document.createElement("th");
            tableHeading.textContent = heading.toUpperCase();
            tableHeadingRow.appendChild(tableHeading);
        }
        elementClone.appendChild(tableHeadingRow);

        for(let mountain of arrayOfObjects)
        {
            let mountainRow = document.createElement("tr");
            for(let property in mountain)
            {
                let td = document.createElement("td");
                td.textContent = mountain[property];
                mountainRow.appendChild(td);
            }
            elementClone.appendChild(mountainRow);
        }
        let parent = element.parentNode;
        parent.replaceChild(elementClone, element);
    }
    insertTableBetter(MOUNTAINS, document.getElementById("mountains"));






//Author's Version:
function buildTable(data)
{
    let table = document.createElement("table");
  
    let fields = Object.keys(data[0]);
    let headRow = document.createElement("tr");
    fields.forEach(function(field)
    {
      let headCell = document.createElement("th");
      headCell.appendChild(document.createTextNode(field));
      headRow.appendChild(headCell);
    });
    table.appendChild(headRow);

    data.forEach(function(object)
    {
      let row = document.createElement("tr");
      fields.forEach(function(field) {
        let cell = document.createElement("td");
        cell.appendChild(document.createTextNode(object[field]));
        if (typeof object[field] == "number")
          cell.style.textAlign = "right";
        row.appendChild(cell);
      });
      table.appendChild(row);
    });

    return table;
  }
document.querySelector("#author").appendChild(buildTable(MOUNTAINS));