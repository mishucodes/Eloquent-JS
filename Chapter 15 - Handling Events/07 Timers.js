//01. setTimeout(fn, time): schedules another function to be called later, after a given number of milliseconds.
//02. clearTimeout(setTimeout): See Example:
    let bombTimer = setTimeout(() =>
        {
            console.log("BOOM!");
        }, 500);
    if (Math.random() < 0.5)
    {
        console.log("Defused.");
        clearTimeout(bombTimer);
    }
//03. cancelAnimationFrame(): same as clearTimeout(), but for requestAnimationFrame.
//04. setInterval(fn, time): function is executed every x milliseconds.
//05. clearInterval(setInterval): same as 02 & 03. For Example:
    let ticks = 0;
    let clock = setInterval(() =>
        {
            console.log("tick", ticks++);
            if (ticks == 10)
            {
                clearInterval(clock);
                console.log("stop.");
            }
        }, 200);