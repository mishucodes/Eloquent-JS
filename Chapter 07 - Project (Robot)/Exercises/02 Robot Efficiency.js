import {roadGraph, VillageState, runRobot, governmentRobot, goalOrientedRobot, randomRobot} from './00 Export Files.js';
import {compareTheseRobots} from './01 Measuring a Robot.js';

//My Version: Firstly, I'll focus on collecting all the parcels. I can take care of deliveries later. If some parcel is to be delivered at a place where something else is to be collected, the ".move()" method should take care of that...
function mySmartRobot({place, parcels}, route)
{
    if (route.length == 0)
    {
        let pickupCandidates = parcels.filter(p => p.place !== place);
        if(pickupCandidates.length > 0)
            route = findRoute(roadGraph, place, pickupCandidates[0].place);
        else
            route = findRoute(roadGraph, place, parcels[0].address);
    }
    return {direction: route[0], memory: route.slice(1)};
}
//Helper Function:
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








//Author's Version:
function lazyRobot({place, parcels}, route)
{
    if (route.length == 0)
    {
        // Describe a route for every parcel
        let routes = parcels.map(parcel =>
            {
                if (parcel.place != place)
                    return {route: findRoute(roadGraph, place, parcel.place), pickUp: true};
                else
                return {route: findRoute(roadGraph, place, parcel.address), pickUp: false};
            });

        // This determines the precedence a route gets when choosing.
        // Route length counts negatively, routes that pick up a package get a small bonus.
        function score({route, pickUp})
        {
            return (pickUp ? 0.5 : 0) - route.length;
        }
        route = routes.reduce((a, b) => score(a) > score(b) ? a : b).route;
    }
    return {direction: route[0], memory: route.slice(1)};
}




//Testing: 'mySmartRobot' is about 07% faster than the 'goalOrientedRobot'. The 'lazyRobot' is about 10% faster compared to mine:
compareTheseRobots(goalOrientedRobot, mySmartRobot, lazyRobot);





//The 'lazyRobot' doesn’t just look at one parcel like the 'goalOrientedRobot', and it doesn’t stubbornly collect all parcels like 'mySmartRobot'. Instead, it pauses for a moment, looks at all the parcels around the village, and asks itself:
    //“Which parcel gives me the best value for effort right now?”
//It then chooses the best route according to that little calculation and starts moving.

//Step-by-step Execution in plain language:
    //01. It checks if it already has a plan. If it’s still following a route from before, it just continues.
    //But if its route is empty, it needs to decide what to do next.
    
    //02. It plans possible routes for every parcel. For each parcel, it considers two possibilities:
        //a) If the parcel hasn’t been picked up yet, the robot finds a route to pick it up.
        //b) If the parcel is already with the robot, the robot finds a route to deliver it.
        //So by the end of this step, the robot has a little list that says:
            //Parcel 1: route to pick up (length = …)
            //Parcel 2: route to deliver (length = …)
            //Parcel 3: route to pick up (length = …)
            //...

    //03. Here’s the clever bit — instead of blindly picking the first route, it gives each one a score The score formula is:
        //score = (pickUp ? 0.5 : 0) - route.length;
        //Meaning:
            //a) Pick-up Routes get a small bonus (+0.5). This makes the robot slightly prefer pickups over deliveries.
            //b) Longer routes get penalised (subtracting their length).
        //In sum, “I prefer nearby tasks. If two options are equally short, I’ll go for the one that picks something up.”
    
    //04. It compares all the route scores and chooses the one with the highest score — that’s its next mission.
    
    //05. It moves one step along that route and remembers the rest as memory. Next turn, it continues along the same route until it reaches the target, and then it re-evaluates again.