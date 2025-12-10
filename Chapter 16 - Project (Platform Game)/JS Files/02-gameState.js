export default class State
{
    constructor(level, actors, status)
    {
        this.level = level;
        this.actors = actors;
        this.status = status;
    }
    static start(level)
    {
        return new State(level, level.startActors, "playing");
    }
    get player()
    {
        return this.actors.find(a => a.type == "player");
    }
    update(time, keys)
    {
        let actors = this.actors.map(actor => actor.update(time, this, keys));
        let newState = new State(this.level, actors, this.status);
        if(newState.status != "playing")
            return newState;
        let player = newState.player;
        if(whetherATouchesB(player, "lava", this.level))
            return new State(this.level, actors, "lost");
        for(let actor of actors)
            if(actor != player && overlap(player, actor))
                newState = actor.collide(newState);
        return newState;
    };
}



//Some Helper Functions:
    //a) Function to check whether one actor overlaps with the other:
        function overlap(actor1, actor2)
        {
            return actor1.pos.x + actor1.size.x > actor2.pos.x && actor1.pos.x < actor2.pos.x + actor2.size.x &&
                    actor1.pos.y + actor1.size.y > actor2.pos.y && actor1.pos.y < actor2.pos.y + actor2.size.y;
        }
    //b) Function to check whether one actor overlaps with another:
        function whetherATouchesB(a, b, level)
        {
            let aLeft = Math.floor(a.pos.x);
            let aRight = Math.ceil(a.pos.x + a.size.x);
            let aTop = Math.floor(a.pos.y);
            let aBottom = Math.ceil(a.pos.y + a.size.y);
            for(let y = aTop; y < aBottom; y++)
                for(let x = aLeft; x < aRight; x++)
                {
                    let isOutside = x < 0 || x >= level.width || y < 0 || y >= level.height;
                    let here = isOutside ? "wall" : level.rows[y][x];
                    if(here == b)
                        return true;
                }
            return false;
        };