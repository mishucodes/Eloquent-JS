//My Version:
    let balloon = document.querySelector("span");
    document.body.addEventListener('keydown', inflate);
    function inflate(event)
    {
        let size = Number(balloon.style.fontSize.replace("%", ""));
        if(size > 2500)
        {
            balloon.textContent = "💥";
            document.body.removeEventListener('keydown', inflate);
        }
        if(event.key == "ArrowUp")
            balloon.style.fontSize = String(Math.floor(size *= 1.1)) + "%";
        else if(event.key == "ArrowDown")
            balloon.style.fontSize = String(Math.floor(size *= 0.9)) + "%";
    }



//Author's Version:
    let p = document.querySelector("p");
    let size;
    function setSize(newSize)
    {
        size = newSize;
        p.style.fontSize = size + "px";
    }
    setSize(20);

    function handleArrow(event)
    {
        if (event.key == "ArrowUp")
        {
            if (size > 70)
            {
                p.textContent = "💥";
                document.body.removeEventListener("keydown", handleArrow);
            }
            else
            {
                setSize(size * 1.1);
                event.preventDefault();
            }
        }
        else if (event.key == "ArrowDown")
        {
            setSize(size * 0.9);
            event.preventDefault();
        }
    }
    document.body.addEventListener("keydown", handleArrow);