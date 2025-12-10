import { coinCollected as playCoinCollectedSound } from "./05-backgroundMusic.js";

export default class Level
{
    constructor(plan)
    {
        let rows = plan.trim().split("\n").map(l => [...l]);
        this.height = rows.length;
        this.width = rows[0].length;
        this.startActors = [];
        this.rows = rows.map((row, y) =>
            {
                return row.map((ch, x) =>
                    {
                        let type = levelChars[ch];
                        if (typeof type != "string")
                        {
                            let pos = new Vec(x, y);
                            this.startActors.push(type.create(pos, ch));
                            type = "empty";
                        }
                        return type;
                    });
            });
    }
}


//Helper Functions & Objects to Level class:
//a) Vector Class:
    class Vec
    {
        constructor(x, y)
        {
            this.x = x; this.y = y;
        }
        plus(other)
        {
            return new Vec(this.x + other.x, this.y + other.y);
        }
        times(factor)
        {
            return new Vec(this.x * factor, this.y * factor);
        }
    }

//b) Classes for Actors in the Game:
    //ba) Player Class:
        class Player
        {
            constructor(pos, speed)
            {
                this.pos = pos;
                this.speed = speed;
            }
            get type() { return "player"; }
            static create(pos)
            {
                return new Player(pos.plus(new Vec(0, -0.5)), new Vec(0, 0));
            }
            update(time, state, keys)
            {
                const playerXSpeed = 7.5, gravity = 4, jumpSpeed = -12;
                //horizontal motion:
                    let xSpeed = 0;
                    if (keys.ArrowLeft)
                        xSpeed -= playerXSpeed;
                    if (keys.ArrowRight)
                        xSpeed += playerXSpeed;
                    let oldPos = this.pos;
                    this.pos = this.pos.plus(new Vec(xSpeed * time, 0));
                    if (ifATouchesB(this, "wall", state.level))
                        this.pos = oldPos;
                //vertical motion:
                    let ySpeed;
                    if (keys.ArrowUp)
                    {
                        if(keys.ArrowUpRepeat)
                            ySpeed = gravity;
                        else
                            ySpeed = jumpSpeed;
                    }
                    else if(keys.ArrowDown)
                        ySpeed = gravity * 2;
                    else
                        ySpeed = gravity;
                    oldPos = this.pos;
                    this.pos = this.pos.plus(new Vec(0, ySpeed * time));
                    if (ifATouchesB(this, "wall", state.level))
                        this.pos = oldPos;
                return new Player(this.pos, new Vec(xSpeed, ySpeed));
            };
        }
        Player.prototype.size = new Vec(0.8, 1.5);
    //bb) Coin Class:
        class Coin
        {
            constructor(pos, basePos, wobble)
            {
                this.pos = pos;
                this.basePos = basePos;
                this.wobble = wobble;
            }
            get type() { return "coin"; }
            static create(pos)
            {
                let basePos = pos.plus(new Vec(0.2, 0.1));
                return new Coin(basePos, basePos, Math.random() * Math.PI * 2);
            }
            update(time)
            {
                const wobbleSpeed = 8, wobbleDist = 0.07;
                let wobble = this.wobble + time * wobbleSpeed;
                let wobblePos = Math.sin(wobble) * wobbleDist;
                return new Coin(this.basePos.plus(new Vec(0, wobblePos)), this.basePos, wobble);
            }
            collide(state)
            {
                playCoinCollectedSound();
                state.actors = state.actors.filter(a => a != this);
                if (!state.actors.some(a => a.type == "coin"))
                    state.status = "won";
                return state;
            }
        }
        Coin.prototype.size = new Vec(0.6, 0.6);
    //bc) Lava Class:
        class Lava
        {
            constructor(pos, speed, reset)
            {
                this.pos = pos;
                this.speed = speed;
                this.reset = reset;
            }
            get type() { return "lava"; }
            static create(pos, ch)
            {
                if (ch == "=")
                    return new Lava(pos, new Vec(2, 0));
                else if (ch == "|")
                    return new Lava(pos, new Vec(0, 2));
                else if (ch == "v")
                    return new Lava(pos, new Vec(0, 3), pos);
            }
            update(time, state)
            {
                let oldPos = this.pos;
                this.pos = this.pos.plus(this.speed.times(time));
                if (!ifATouchesB(this, "wall", state.level))
                    return new Lava(this.pos, this.speed, this.reset);
                else if (this.reset)
                    return new Lava(this.reset, this.speed, this.reset);
                else
                    return new Lava(oldPos, this.speed.times(-1));
            }
            collide(state)
            {
                state.status = "lost";
                return state;
            }
        }
        Lava.prototype.size = new Vec(1, 1);

//c) List of all the Elements in the Game:
    const levelChars =
    {
        ".": "empty",
        "#": "wall",
        "+": "lava",
        "@": Player,
        "o": Coin,
        "=": Lava,
        "|": Lava,
        "v": Lava
    };
//d) Function to check whether one actor overlaps with another:
    function ifATouchesB(a, b, level)
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