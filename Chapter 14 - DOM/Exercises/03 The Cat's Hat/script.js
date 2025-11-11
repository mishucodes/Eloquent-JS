let star01 = document.querySelector("#star01");
let star02 = document.querySelector("#star02");
let angle = 0;
let lastTime = null;

function animate(time)
{
    if (lastTime != null)
        angle += (time - lastTime) * 0.002;
    lastTime = time;
    star01.style.top = (Math.sin(angle) * 150 + 40) + "px";
    star01.style.left = (Math.cos(angle) * 200 + 230) + "px";
    setTimeout(() =>
        {
            star02.style.top = (Math.sin(-angle) * 150 + 40) + "px";
            star02.style.left = (Math.cos(-angle) * 200 + 230) + "px";
        }, 0); //slightly delays the second one...
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);