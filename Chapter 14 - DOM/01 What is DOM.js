//01. DOM: Every browser basically takes an HTML file, parses it, & creates an interesting data structure (tree) out of it. I'm not very sure, but I reckon this must be a nested object of objects, where each object refers to an element in the HTML. We can read & write properties of these objects and play with the HTML in real time.
//In JS there exists a binding in its global scope called "document", which contains a lot of useful methods. If we wanna "get the HTML by its root", we can access the "document.documentElement" property. This is nothing but the <html> element.

//02. Trees: Dr. Haverbeke provides an interesting definition of "trees" in the book. Here's that verbatim:
    //"We call a data structure a tree when it has a branching structure, no cycles (a node may not contain itself, directly or indirectly), and a single, well-defined root. In the case of the DOM, document.documentElement serves as the root."

//NOTE: DOM is not designed just for HTML documents, but it's a data-structure that is meant to be used for other formats as well (such as XML).


//Properties of DOM Objects:
    //a) .childNodes: an array-like of all child nodes (not just elements).
    //b) .children: an array-like of all node children (basically just elements).
    //c) .firstChild
    //d) .firstElementChild
    //e) .lastChild
    //f) .lastElementChild
    //g) .previousSibling
    //h) .nextSibling
    //i) .previousElementSibling
    //j) .nextElementSibling
    //k) .parentNode
    //l) .nodeValue: the text value held by an element.
//Methods of DOM Objects:
    //a) document.body.getElementByTagName("tagname"): returns an arraylike.
    //b) document.body.getElementById("id"): returns an element.
    //c) document.body.getElementByClassName("class"): returns an arraylike.
    //d) .remove(): removes a node.
    //e) .appendChild(): appends a child.
    //f) .insertBefore(whatToInsert, whereToInsert): whereToInsert is a node before which the first argument should be inserted.
        //NOTE: Since a node can exist in the document in only one place, inserting some node in front of some other will first remove it from where it is in the document, & then insert it at the right place. All operations that insert a node somewhere will, as a side effect, cause it to be removed from its current position (if it has one).
    //g) .replaceChild(newChild, oldChild): removes the old child & puts the new one in its place.
    //h) document.createTextNode(string): creates a text node (not element).
    //i) document.createElement(tagName): creates a new element.