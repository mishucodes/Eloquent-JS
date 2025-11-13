//My Version:
    let trail = Array.from(document.querySelectorAll("div"));

    window.addEventListener("mousemove", updateTrail);

    function updateTrail(event)
    {
        let delay = 150;
        for(let point of trail)
        {
            setTimeout(() =>
                {
                    point.style.top = event.clientY + "px";
                    point.style.left = event.clientX + "px";
                }, Math.floor(delay *= 1.2));
        }
    }



//Author's Version:
    let dots = [];
    for (let i = 0; i < 12; i++)
    {
        let node = document.createElement("div");
        node.className = "trail";
        document.body.appendChild(node);
        dots.push(node);
    }
    let currentDot = 0;

    window.addEventListener("mousemove", event =>
        {
            let dot = dots[currentDot];
            dot.style.left = (event.pageX - 3) + "px";
            dot.style.top = (event.pageY - 3) + "px";
            currentDot = (currentDot + 1) % dots.length;
        });