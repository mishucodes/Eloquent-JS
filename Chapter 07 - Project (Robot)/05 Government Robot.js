//This is the second-dumbest robot we can create. It'll cover all the areas in the village & hope for the best. The reason why I call this Govt. robot is because this is how I've witnessed state bus run in my country. The drivers mindlessly follow a given route, no matter how deserted or crowded, every place gets treated in a certain state-approved way. I won't comment much on this. Let's just go to the program:


import {roadGraph} from './01 Graphs.js';

//01. Village Generator:
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
//02. Random Village State Generator (Static Method):
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
//03. Helper to Random Village Generator:
function randomPick(array)
{
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

//04. Govt. Robot:
function governmentRobot(state, memory)
{
    if (memory.length == 0)
        memory = mailRoute;
    return {direction: memory[0], memory: memory.slice(1)};
}
//Govt. Approved Route (Helper to Govt. Robot):
const mailRoute = ["Alice's House", "Cabin", "Alice's House", "Bob's House", "Town Hall", "Daria's House", "Ernie's House", "Grete's House", "Shop", "Grete's House", "Farm", "Marketplace", "Post Office"];


//05. Robot Runner: This function takes in a Village State, A Robot, & Some Memory (optional), & runs the Robot until all deliveries are made:
function runRobot(state, robot, memory)
{
    for (let turn = 0;; turn++)
    {
        if (state.parcels.length == 0)
        {
            console.log(`Done in ${turn} turns`);
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}


//Running this Robot:
// runRobot(VillageState.random(), governmentRobot, []);
// -> Moved to Marketplace
// -> Moved to Town Hall
// -> Moved to Somewhere else...
// -> Done in X turns



export {VillageState, roadGraph, runRobot};