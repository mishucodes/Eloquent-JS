//01. Roads Array:
const roads =
[
    "Alice's House-Bob's House",
    "Alice's House-Cabin",
    "Alice's House-Post Office",
    "Bob's House-Town Hall",
    "Daria's House-Ernie's House",
    "Daria's House-Town Hall",
    "Ernie's House-Grete's House",
    "Grete's House-Farm",
    "Grete's House-Shop",
    "Marketplace-Farm",
    "Marketplace-Post Office",
    "Marketplace-Shop",
    "Marketplace-Town Hall",
    "Shop-Town Hall"
];

//02. RoadGraph:
const roadGraph = buildGraph(roads); //function defined below:
function buildGraph(edges)
{
    // let graph = Object.create(null);
    let graph = Object.create(Object.prototype); //looks cleaner on the console...
    function addEdge(from, to)
    {
        if (from in graph)
            graph[from].push(to);
        else
            graph[from] = [to];
    }
    for (let [from, to] of edges.map(r => r.split("-")))
    {
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}


export {roadGraph};