import {roadGraph} from './01 Roads.js';
import {randomPick} from './02 Random Pick.js';



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







export {governmentRobot, goalOrientedRobot, randomRobot};