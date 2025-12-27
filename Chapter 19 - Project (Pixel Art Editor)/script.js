import { historyUpdateState } from "./JS Files/00 Helper Functions.js";
import Picture from "./JS Files/01aa Picture.js";
import PixelEditor from "./JS Files/01 Pixel Editor.js";
import { ToolSelect, ColorSelect, SaveButton, LoadButton, UndoButton } from "./JS Files/01b Controls.js";
import { draw, rectangle, fill, pick } from "./JS Files/01ba Tools.js";

const startState =
{
    tool: "draw",
    color: "#000000",
    picture: Picture.empty(60, 30, "#f0f0f0"),
    done: [],
    doneAt: 0
};
const baseControls = [ToolSelect, ColorSelect, SaveButton, LoadButton, UndoButton];
const baseTools = {draw, fill, rectangle, pick};

function startPixelEditor({state = startState, tools = baseTools, controls = baseControls})
{
    let app = new PixelEditor(state,
        {
            tools,
            controls,
            dispatch(action)
            {
                state = historyUpdateState(state, action);
                app.syncState(state);
            }
        });
    return app.dom;
}

document.querySelector("div").appendChild(startPixelEditor({startState, baseTools, baseControls}));