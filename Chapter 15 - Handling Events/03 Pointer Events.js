//There are currently two widely used ways to point at things on a screen:
    //a) Mouse/Touchpad/Trackballs/etc...
    //b) Touchscreens

//a) On Mouse:
    //aa) mousedown: when the mouse button is clicked.
    //ab) mouseup: when the mouse button is lifted.
    //ac) click: After the "mouseup" event, a "click" event fires on the most specific node that contained both the press and the release of the button. For example, if I press down the mouse button on one paragraph and then move the pointer to another paragraph and release the button, the "click" event will happen on the element that contains both those paragraphs.
    //ad) dbclick: when we double-click. event is fired post the second click.
        //Some Important Properties of these Events:
            //aa) clientX:
            //ab) clientY:
                //These contain the the event’s coordinates (in pixels) relative to the upper-left corner of the window.
            //ac) pageX:
            //ad) pageY:
                //Same as above but these are relative to the upper-left corner of the whole document (which may be different when the window has been scrolled).
    //ae) mousemove: Every time the mouse pointer moves. As an example, the following program displays a bar and sets up event handlers so that dragging to the left or right on this bar makes it narrower or wider:
        /*
            <p>Drag the bar to change its width:</p>
            <div style="background: orange; width: 60px; height: 20px"></div>
            <script>
                let lastX; // Tracks the last observed mouse X position
                let bar = document.querySelector("div");
                bar.addEventListener("mousedown", event =>
                    {
                        if (event.button == 0)
                        {
                            lastX = event.clientX;
                            window.addEventListener("mousemove", moved);
                            event.preventDefault(); // Prevent selection
                        }
                    });
                function moved(event)
                {
                    if (event.buttons == 0)
                        window.removeEventListener("mousemove", moved);
                    else
                    {
                        let dist = event.clientX - lastX;
                        let newWidth = Math.max(10, bar.offsetWidth + dist);
                        bar.style.width = newWidth + "px";
                        lastX = event.clientX;
                    }
                }
            </script>
        */
        //NOTE: Notice there is a "button" property & a "buttons" property. They're not same.
            //aa) button: Indicates which mouse button triggered the event. 0 = left, 1 = middle, 2 = right.
            //ab) buttons: Indicates which buttons are currently being held down (can be multiple).
            //1 = left, 2 = right, 4 = middle. So, if left + right are held, 'buttons' = 3 (1 + 2).



//b) On Touchscreens:
    //ba) touchstart: Fired when a finger first touches the screen.
    //bb) touchmove: Fired continuously as the finger moves on the screen.
    //bc) touchend: Fired when the finger is lifted off the screen.
        //NOTE: Each touch event’s event object has a 'touches' property. It's an array-like list of all fingers currently touching the screen. Each touch point in 'touches' has properties like: pageX, pageY, clientX, clientY — the finger’s position on the page or window.
    //bd) scroll: Fired whenever an element or the window is scrolled. Commonly used to detect how far a user has scrolled. For instance, to update a progress bar or trigger animations when elements enter view.
        //Useful properties:
        // -> scrollHeight: Total scrollable height of the document.
        // -> innerHeight: Height of the browser’s visible window.
        // -> pageYOffset: Current vertical scroll position (in pixels).