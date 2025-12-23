let URI = "https://eloquentjavascript.net/author";
let getTextButton = document.querySelector("#text");
let getHTMLButton = document.querySelector("#html");
let getJSONButton = document.querySelector("#json");
let resultDIV = document.querySelector("#result");


getTextButton.onclick = () =>
    {
        getContent(URI, "text/plain")
            .then(data => resultDIV.textContent = data);
    };
getHTMLButton.onclick = () =>
    {
        getContent(URI, "text/html")
            .then(data => resultDIV.textContent = data);
    };
getJSONButton.onclick = () =>
    {
        getContent(URI, "application/json")
            .then(data => resultDIV.textContent = data);
    };




//Helper Function:
async function getContent(URI, format = "application/json")
{
    let response = await fetch(URI, {headers: {Accept: format}});
    let text = await response.text();
    return text;
}