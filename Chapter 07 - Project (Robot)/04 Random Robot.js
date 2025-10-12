//This is the dumbest robot we can create. It'll move randomly & hope for the best:


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


//03. Random Robot:
function randomRobot(state)
{
    return {direction: randomPick(roadGraph[state.place])};
}
//04. Helper to Random Robot & Random Village Generator:
function randomPick(array)
{
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}


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
runRobot(VillageState.random(), randomRobot);
// -> Moved to Marketplace
// -> Moved to Town Hall
// -> Moved to Somewhere else...
// -> Done in X turns