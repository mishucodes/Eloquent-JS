let p = document.getElementsByTagName("p");
console.log(p.length); //19


//My Version:
    function findElementByTagName(element, target)
    {
        let array = [];
        let children = Array.from(target?.children);
        for(let child of children)
        {
            if(child.children?.length === 0 && child.nodeName.toLowerCase() === element.toLowerCase())
                array.push(child);
            else if(child.childNodes.length > 0)
                array.push(...findElementByTagName(element, child));
        }
        return array;
    }
    let P = findElementByTagName("p", document.getElementsByTagName("body")[0]);
    console.log(P);
    console.log(P.length); //19




//Author's Version:
    function byTagName(node, tagName)
    {
        let found = [];
        tagName = tagName.toUpperCase();
        function explore(node)
        {
            for (let i = 0; i < node.childNodes.length; i++)
            {
                let child = node.childNodes[i];
                if (child.nodeType == document.ELEMENT_NODE)
                {
                    if (child.nodeName == tagName)
                        found.push(child);
                    explore(child);
                }
            }
        }
        explore(node);
        return found;
    }
    console.log(byTagName(document.body, "p"));
    console.log(byTagName(document.body, "p").length); //19