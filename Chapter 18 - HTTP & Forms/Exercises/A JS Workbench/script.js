let form = document.querySelector("#userJS");
let textarea = form.elements.JS;
let output = document.querySelector("#JSOutput");
textarea.addEventListener("keydown", (e) =>
    {
        if(e.key === "Enter" && e.metaKey)
        {
            e.preventDefault();
            form.requestSubmit();
        }
    });
form.addEventListener("submit", (e) =>
    {
        e.preventDefault();
        output.textContent = runJS(e.target.elements.JS.value);
        e.target.elements.JS.value = "";
    });



//Helper Function:
function runJS(code)
{
    try
    {
        let myFn = new Function(code);
        return myFn();
    }
    catch(e)
    {
        return e;
    }
}