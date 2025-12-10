const scale = 35;
export default class DOMDisplay
{
    constructor(parent, level)
    {
        this.dom = createElement("div", {class: "game"}, drawGrid(level));
        this.actorLayer = null;
        parent.appendChild(this.dom);
    }
    clear()
    {
        this.dom.remove();
    }
    syncState(state)
    {
        if (this.actorLayer) //removes current actors
            this.actorLayer.remove();
        this.actorLayer = drawActors(state.actors); //creates new actors
        this.dom.appendChild(this.actorLayer); //draws new actors
        this.dom.className = `game ${state.status}`; //updates game status
        this.scrollPlayerIntoView(state); //manages camera
    }
    scrollPlayerIntoView(state)
    {
        let width = this.dom.clientWidth;
        let height = this.dom.clientHeight;
        let margin = width / 10;
        //the viewport:
        let left = this.dom.scrollLeft;
        let right = left + width;
        let top = this.dom.scrollTop;
        let bottom = top + height;
        //the player:
        let player = state.player;
        let center = player.pos.plus(player.size.times(0.5)).times(scale);
        //the action:
        if (center.x < left + margin)
            this.dom.scrollLeft = center.x - margin;
        else if (center.x > right - margin)
            this.dom.scrollLeft = center.x + margin - width;
        if (center.y < top + margin)
            this.dom.scrollTop = center.y - margin;
        else if (center.y > bottom - margin)
            this.dom.scrollTop = center.y + margin - height;
    };
}


//Helper Functions to Above:
//a) Drawing the background grid:
    function drawGrid(level)
    {
        return createElement
            (
                "table",
                {class: "background", style: `width: ${level.width * scale}px`},
                ...level.rows.map(row => createElement("tr", {style: `height: ${scale}px`}, ...row.map(type => createElement("td", {class: type}))))
            );
    }
//b) Drawing live actors above it:
    export function drawActors(actors)
    {
        return createElement("div", {}, ...actors.map(actor =>
            {
                let rect = createElement("div", {class: `actor ${actor.type}`});
                rect.style.width = `${actor.size.x * scale}px`;
                rect.style.height = `${actor.size.y * scale}px`;
                rect.style.left = `${actor.pos.x * scale}px`;
                rect.style.top = `${actor.pos.y * scale}px`;
                return rect;
            }));
    }
//c) Creating an element with proper children:
    function createElement(name, attrs, ...children)
    {
        let dom = document.createElement(name);
        for (let attr of Object.keys(attrs))
            dom.setAttribute(attr, attrs[attr]);
        for (let child of children)
            dom.appendChild(child);
        return dom;
    }