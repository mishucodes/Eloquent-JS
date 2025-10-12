//01. Graph (Noun): In CS & Maths, it refers to a data structure, which is a collection of nodes (aka vertices) and edges (aka links/connections) that connect pairs of nodes. For instance:
const places =
[
    "Alice's House",
    "Bob's House",
    "Cabin",
    "Post Office",
    "Town Hall",
    "Daria's House",
    "Ernie's House",
    "Grete's House",
    "Farm",
    "Shop",
    "Marketplace"
];
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

//We wanna get something like this:
let dataStructureWeWant =
{
    placeOne: ['to', 'to', 'to'],
    placeTwo: ['to', 'to'],
    placeThree: ['to', 'to', 'to', 'to']
}

//Let's do it:
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
// console.log(roadGraph);



export {roadGraph};