//01. Road Graph:
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





//02. Village Generator:
class VillageState
{
    constructor(place, parcels)
    {
        this.place = place;
        this.parcels = parcels;
    }
    move(destination)
    {
        if (!roadGraph[this.place].includes(destination))
            return this;
        else
        {
            let parcels = this.parcels.map(p =>
                {
                    if (p.place != this.place)
                        return p;
                    return {place: destination, address: p.address};
                }).filter(p => p.place != p.address);
            return new VillageState(destination, parcels);
        }
    }
}
VillageState.random = function(parcelCount = 5)
{
    let parcels = [];
    for (let i = 0; i < parcelCount; i++)
    {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do
        {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        parcels.push({place, address});
    }
    return new VillageState("Post Office", parcels);
}
//Helper to Random Village Generator:
function randomPick(array)
{
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}





//03. Robot Runner: This function takes in a Village State, A Robot, & Some Memory (optional), & runs the Robot until all deliveries are made:
function runRobot(state, robot, memory)
{
    for (let turn = 0;; turn++)
    {
        if (state.parcels.length == 0)
            return turn;
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
    }
}







// Robots:


//01. Govt. Robot:
function governmentRobot(state, memory)
{
    if (memory.length == 0)
        memory = mailRoute;
    return {direction: memory[0], memory: memory.slice(1)};
}
//Govt. Approved Route (Helper to Govt. Robot):
const mailRoute = ["Alice's House", "Cabin", "Alice's House", "Bob's House", "Town Hall", "Daria's House", "Ernie's House", "Grete's House", "Shop", "Grete's House", "Farm", "Marketplace", "Post Office"];


//02. Smart Robot:
function goalOrientedRobot({place, parcels}, route)
{
    if (route.length == 0)
    {
        let parcel = parcels[0];
        if (parcel.place != place) //this if-else block is the where the logic of this robot sits...
            route = findRoute(roadGraph, place, parcel.place);
        else
            route = findRoute(roadGraph, place, parcel.address);
    }
    return {direction: route[0], memory: route.slice(1)};
}
function findRoute(graph, from, to)
{
    let work = [{at: from, route: []}];
    for (let i = 0; i < work.length; i++)
    {
        let {at, route} = work[i];
        for (let place of graph[at])
        {
            if (place == to)
                return route.concat(place); //we use 'concat()' & not 'push()', bcz 'concat()' returns the new array, & 'push()' returns the new value added to the array...
            if (!work.some(w => w.at == place))
                work.push({at: place, route: route.concat(place)});
        }
    }
}


//03. Random Robot:
function randomRobot(state)
{
    return {direction: randomPick(roadGraph[state.place])};
}







export {roadGraph, VillageState, runRobot, governmentRobot, goalOrientedRobot, randomRobot};