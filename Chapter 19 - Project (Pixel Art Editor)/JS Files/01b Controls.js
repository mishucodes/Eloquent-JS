import {drawPicture, elt} from "./00 Helper Functions.js";
import Picture from "./01aa Picture.js";

//01. Tool Selector:
    class ToolSelect
    {
        constructor(state, {tools, dispatch})
        {
            this.select = elt("select", {onchange: () => dispatch({tool: this.select.value})},
                            ...Object.keys(tools).map(name => elt("option", {selected: name == state.tool}, name)));
            this.dom = elt("label", null, "🖌 Tool: ", this.select);
        }
        syncState(state)
        {
            this.select.value = state.tool;
        }
    }


//02. Colour Selector:
    class ColorSelect
    {
        constructor(state, {dispatch})
        {
            this.input = elt("input", {type: "color", value: state.color, onchange: () => dispatch({color: this.input.value})});
            this.dom = elt("label", null, "🎨 Color: ", this.input);
        }
        syncState(state)
        {
            this.input.value = state.color;
        }
    }


//03. Save Button:
class SaveButton
{
    constructor(state)
    {
        this.picture = state.picture;
        this.dom = elt("button", {onclick: () => this.save()}, "💾 Save");
    }
    save()
    {
        let canvas = elt("canvas");
        drawPicture(this.picture, canvas, 1);
        let link = elt("a", {href: canvas.toDataURL(), download: "drawing.png"});
        document.body.appendChild(link);
        link.click();
        link.remove();
    }
    syncState(state)
    {
        this.picture = state.picture;
    }
}


//04. Load Button:
    class LoadButton
    {
        constructor(_, {dispatch})
        {
            this.dom = elt("button", {onclick: () => startLoad(dispatch)}, "📁 Load");
        }
        syncState() {}
    }
    //Helper Functions because author wants the Load Button to "look like a button & not like an input field":
        //04a. To Start Loading an Image file from Machine:
            function startLoad(dispatch)
            {
                let input = elt("input", {type: "file", onchange: () => finishLoad(input.files[0], dispatch)});
                document.body.appendChild(input);
                input.click();
                input.remove();
            }
        //04b. Function to run when Ibid is Finished Loading:
            function finishLoad(file, dispatch)
            {
                if (file == null)
                    return;
                let reader = new FileReader();
                reader.addEventListener("load", () =>
                    {
                        let image = elt("img", {onload: () => dispatch({picture: pictureFromImage(image)}), src: reader.result});
                });
                reader.readAsDataURL(file);
            }
        //04c: Converts a Picture to a Canvas Element:
            function pictureFromImage(image)
            {
                let width = Math.min(100, image.width);
                let height = Math.min(100, image.height);
                let canvas = elt("canvas", {width, height});
                let cx = canvas.getContext("2d");
                cx.drawImage(image, 0, 0);
                let pixels = [];
                let {data} = cx.getImageData(0, 0, width, height);
                function hex(n)
                {
                    return n.toString(16).padStart(2, "0");
                }
                for (let i = 0; i < data.length; i += 4)
                {
                    let [r, g, b] = data.slice(i, i + 3);
                    pixels.push("#" + hex(r) + hex(g) + hex(b));
                }
                return new Picture(width, height, pixels);
            }


//05. Undo Button:
    class UndoButton
    {
        constructor(state, {dispatch})
        {
            this.dom = elt("button", {onclick: () => dispatch({undo: true}), disabled: state.done.length == 0}, "⬅️Undo");
        }
        syncState(state)
        {
            this.dom.disabled = state.done.length == 0;
        }
    }

export {ToolSelect, ColorSelect, SaveButton, LoadButton, UndoButton};