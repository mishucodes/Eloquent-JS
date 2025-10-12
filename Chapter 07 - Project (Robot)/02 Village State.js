import {roadGraph} from './01 Graphs.js';

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

let first = new VillageState("Post Office", [{place: "Post Office", address: "Alice's House"}]);
let next = first.move("Alice's House");
console.log(next.place); //Alice's House
console.log(next.parcels); //[]
console.log(first.place); //Post Office