const box = new class
{
    locked = true;
    _content = [];

    unlock() {this.locked = false;}
    lock() {this.locked = true;}
    get content()
    {
        if (this.locked)
            throw new Error("Locked!");
        return this._content;
    }
};
//Not sure why do we have this???
try
{
    withBoxUnlocked(() => {throw new Error("Pirates on the horizon! Abort!");});
}
catch (e)
{
    console.log("Error raised: " + e);
}
console.log(box.locked);



//My Version 01:
function withBoxUnlocked(body)
{
    box.unlock();
    try
    {
        return body();
    }
    finally
    {
        box.lock();
    }
}
withBoxUnlocked(() => {box.content.push("gold piece");});
//My Version 02:
function withBoxUnlocked(body)
{
    let isBoxLocked = box.locked;
    if (isBoxLocked) box.unlock();
    try
    {
        return body();
    }
    finally
    {
        if (isBoxLocked) box.lock();
    }
}
withBoxUnlocked(() => {box.content.push("silver piece");});


//Author's Version:
function withBoxUnlocked(body)
{
    let locked = box.locked;
    if (locked) box.unlock();
    try
    {
        return body();
    }
    finally
    {
        if (locked) box.lock();
    }
}
withBoxUnlocked(() => {box.content.push("bronze piece");});




box.unlock();
console.log(box.content);