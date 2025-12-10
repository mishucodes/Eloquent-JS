import * as sounds from "./05-backgroundMusic.js"

function showAndHideSettings()
{
    let settings = document.querySelector("#settingsModal");
    settings.classList.toggle("invisible");
}

function turnBGM(soundEnabled = true, soundTrack = 0)
{
    if(soundEnabled)
    {
        window.addEventListener("keydown", sounds.BGM[soundTrack]);
        sounds.BGM[0](true); //meant to play sound when user enables music in settings...
    }
    else
    {
        window.removeEventListener("keydown", sounds.BGM[soundTrack]);
        sounds.BGM[0](false);
    }
}

export {showAndHideSettings, turnBGM};