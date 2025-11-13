//Some Important Key Event Names:
    //a) keydown: When a key is pressed and held, the event fires again every time the key 'repeats'.
    //b) keyup: When a key is released.
        //For Example:
            /*
                <p>This page turns violet when you hold the V key.</p>
                <script>
                window.addEventListener("keydown", event =>
                    {
                        if (event.key == "v")
                            document.body.style.background = "violet";
                    });
                window.addEventListener("keyup", event =>
                    {
                        if (event.key == "v")
                            document.body.style.background = "";
                    });
                </script>
            */
        //Names of some Special Keys:
            //a) Enter
            //b) shiftKey
            //c) ctrlKey
            //d) altKey
            //e) metaKey (command)
                //NOTE: These modifier keys might also impact other normal keys. For Example: shift + v = V.


//SOME NOTES:
    //a) These key events originate in those elements which are currently in focus. By default, "document.body" is in focus.
    //b) Some platforms, most notably the virtual keyboard on Android phones, don’t fire key events.
    //c) Some platforms use "Input Method Editor" (IME) software wherein multiple keydown events lead to a single character being typed. Think old Nokia phones.
    //d) To help us notice when something is typed by the user, some elements that let us type into (such as the <input> and <textarea> tags), fire "input" events whenever the user changes their content. To get the actual content that was typed, it is best to directly read it from the focused field. (Discussed in Chapter 18).