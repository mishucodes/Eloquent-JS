//a) Starting a level:
    function startLevel(levelState, gameDisplay, liveStatusOfArrowKeys)
    {
        return new Promise(resolve =>
            {
                let lastTime = null;
                requestAnimationFrame(frame);
                function frame(time)
                {
                    if (lastTime != null)
                    {
                        let timeStep = Math.min(time - lastTime, 100) / 1000;
                        levelState = levelState.update(timeStep, liveStatusOfArrowKeys);
                        gameDisplay.syncState(levelState);
                        if(levelState.status === "lost")
                            resolve("lost");
                        else if(levelState.status === "won")
                            resolve("won");
                    }
                    lastTime = time;
                    requestAnimationFrame(frame);
                }
            });
    }
//b) When the Game is finished:
function finishGame(htmlPath)
{
    setTimeout(() => window.location.href = htmlPath, 1000)
}

//c) Tracking Keys: This function uses closures.
    function trackKeys(keys)
    {
        let down = Object.create(null);
        function track(event)
        {
            if (keys.includes(event.key))
            {
                event.preventDefault();
                down[event.key] = event.type == "keydown";
                down[event.key + "Repeat"] = event.repeat;
            }
        }
        window.addEventListener("keydown", track);
        window.addEventListener("keyup", track);
        return down;
    }

export {startLevel, finishGame, trackKeys};