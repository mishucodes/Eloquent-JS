import ALL_LEVELS from "./JS Files/00-Levels.js"
import Level from "./JS Files/01-createLevel.js"
import State from "./JS Files/02-gameState.js"
import DisplayDOM from "./JS Files/03a-drawBackgroundWithDOM.js"
import * as helperFunctions from "./JS Files/04-someHelperFunctions.js"
import * as sounds from "./JS Files/05-backgroundMusic.js"
import * as UIFunctions from "./JS Files/06-UI-Helper-Functions.js"



//GAME LOGIC:
    //Global Bindings:
    let liveStatusOfArrowKeys = helperFunctions.trackKeys(["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft"]);
    startGame();

    async function startGame(currentLevel = 0)
    {
        if(currentLevel >= ALL_LEVELS.length)
            helperFunctions.finishGame("./Game Ends Here/gameEndsHere.html");
        //else:
        let levelObject = new Level(ALL_LEVELS[currentLevel]);
        let levelState = State.start(levelObject, levelObject.startActors, "playing");
        let gameDisplay = new DisplayDOM(document.body, levelObject);
        let gameStatus = await helperFunctions.startLevel(levelState, gameDisplay, liveStatusOfArrowKeys);
        if(gameStatus === "won")
        {
            sounds.levelCleared();
            setTimeout(() => 
                {
                    document.querySelector(".game").remove();
                    startGame(currentLevel + 1);
                }, 1500);
        }
        else if(gameStatus === "lost")
        {
            sounds.gameOver();
            setTimeout(() => 
                {
                    document.querySelector(".game").remove();
                    startGame(currentLevel);
                }, 2000);
        }
    }


//UI Management:
    let settingsButton = document.querySelector("header button");
    let closeSettingsButton = document.querySelector("#settingsHeader button");
    let musicSettingButton = document.querySelector("#settingsList li button");
    settingsButton.onclick = UIFunctions.showAndHideSettings;
    closeSettingsButton.onclick = UIFunctions.showAndHideSettings;
    musicSettingButton.onclick = () => 
        {
            musicSettingButton.classList.toggle("disabled");
            if(musicSettingButton.classList.contains("disabled"))
                UIFunctions.turnBGM(false);
            else
                UIFunctions.turnBGM(true);
        };
    UIFunctions.turnBGM(true);
    window.addEventListener("blur", () => UIFunctions.turnBGM(false));
    window.addEventListener("focus", () => UIFunctions.turnBGM(true));