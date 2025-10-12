import {VillageState, roadGraph, runRobot} from './05 Government Robot.js';
//This is the the first ever smart robot we may see. It'll move to only those place where there is something useful to do. This approach might seem to be costing a lot more clock cycles than the Govt. Robot, but let me tell you why it's still better.
//IRL, clock cycles are cheaper than fuel & human effort. We won't always be dealing with hypothetical robots in JS. We probably would want a real-life logistics management system. If a few extra clock-cycles could help save human labour & capital, it'd be a very good deal for us.



//The problem of finding a route through a graph is a typical "Search Problem". We can tell whether a given solution (a route) is valid, but we can’t directly compute the solution the way we could for 2 + 2. 

//We'll explore a solution called "Breadth First Search" im this file:
//Suppose we have:
let graph =
{
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A", "E"],
    D: ["B", "E"],
    E: ["C", "D"]
};
//And we wanna go A -> E
//What we wanna do on a high-level is:
    //a) Explore where can we go from 'A'. => We can go 'B' & 'C'.
        //aa) Is 'B' our destination? No. Have we explored 'B'? No. Let's remember to explore 'B' later.
        //ab) Is 'C' our destination? No. Have we explored 'B'? No. Let's remember to explore 'C' later.
    //b) See where can we go from 'B'. We can do 'A' & 'D'.
        //ba) Is 'A' our destination? No. Have we explored 'A'? Yes. Let's move ahead.
        //bb) Is 'D' our destination? No. Have we explored 'D'? No. Let's remember to explore 'D' later.
    //c) See where can we go from 'C'. We can do 'A' & 'E'.
        //ca) Is 'A' our destination? No. Have we explored 'A'? Yes. Let's move ahead.
        //ca) Is 'E' our destination? Yes. Let's return the path till 'E', i.e., A -> C -> E...

//Let's do it in Code:
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
//Here's Our Smart Robot that uses this Code Above: This robot basically takes a look at parcels one-by-one. It then collects & delivers it one-by-one. Not the best. But better than whatever we had before.
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

runRobot(VillageState.random(), goalOrientedRobot, []);