//01. Attributes: If an element node is a noun, then attributes are its adjectives. Not an analogy. I mean it quite literally.
//There are two kinds of attributes in an element:
    //a) Standard: Can be accessed as properties of the element object.
    //b) User-Defined: Can be accessed via these methods:
        //ba) element.getAttribute();
        //bb) element.setAttribute();
        //For Example:
        /*
            <p data-classified="secret">The launch code is 00000000.</p>
            <p data-classified="unclassified">I have two feet.</p>
            <script>
            let paras = document.body.getElementsByTagName("p");
            for (let para of Array.from(paras))
            {
                if (para.getAttribute("data-classified") == "secret")
                    para.remove();
            }
            </script>
        */

//Some commonly-used Attributes:
    //a) element.className / element.getAttribute("class") / element.setAttribute("class")
    //b) element.offsetHeight: height of an element (content + padding + border).
    //c) element.offsetWidth: width of an element (content + padding + border).
    //d) element.clientHeight: height of an element (content + padding).
    //e) element.clientWidth: width of an element (content + padding).
        //NOTE: ibid 04 assume "pixels" (DPR) as their units.
//Some other useful methods:
    //a) element.getBoundingClientRect(): returns the precise position of the element on the screen. Detailed Explanation:
        //aa) width/height: actual rendered size of the element (including borders) in CSS pixels.
        //ab) top: distance from the top edge of the viewport to the element’s top border edge.
        //ac) bottom: distance from the top edge of the viewport to the element’s bottom border edge.
        //ad) left: distance from the left edge of the viewport to the element’s left border edge.
        //ae) right: distance from the left edge of the viewport to the element’s right border edge.
    //b) window.pageXOffset: how far the page is scrolled horizontally.
    //c) window.pageYOffset: how far the page is scrolled vertically.