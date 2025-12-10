//Media Files:
    const sourceFolderBGM =  "./Media Files/Sounds/BGM/";
    const audioFilesBGM =
    [
        sourceFolderBGM + "Monplaisir - Soundtrack .mp3",
        sourceFolderBGM + "Eric Skiff - A Night Of Dizzy Spells.mp3",
        sourceFolderBGM + "Eric Skiff - Underclocked.mp3",
        sourceFolderBGM + "Jorge Hernandez - Chopsticks.mp3",
        sourceFolderBGM + "Kevin MacLeod - 8bit Dungeon Level.mp3",
        sourceFolderBGM + "Kubbi - Digestive biscuit.mp3",
        sourceFolderBGM + "Kubbi - Up In My Jam.mp3",
        sourceFolderBGM + "The Grand Affair - Coupe.mp3",
    ]
    const sourceFolderUI = "./Media Files/Sounds/UI/";
    const audioFileCoinCollected = sourceFolderUI + "coinCollected01.mp3";
    const audioFileGameOver = sourceFolderUI + "gameOver01.mp3";
    const audioFileLevelCleared = sourceFolderUI + "levelCleared01.mp3";

//Creating all Music Files:
//a) Background Music:
    const BGM = [];
    audioFilesBGM.forEach((audioFile) =>
        {
            BGM.push(createNewSound(audioFile, true, 0.3));
        });
//b) UI Sounds:
    //ba) Coin Collected:
        const coinCollected = createNewSound(audioFileCoinCollected, false);
    //bb) Victory":
        const levelCleared = createNewSound(audioFileLevelCleared, false);
    //bc) Game Over:
        const gameOver = createNewSound(audioFileGameOver, false);

export {BGM, coinCollected, gameOver, levelCleared};




//Function to create Music Players:
    function createNewSound(audioFile, loopingSetting = true, volume = 0.5)
    {
        let audioElement = document.createElement("audio");
        audioElement.src = audioFile;
        audioElement.loop = loopingSetting;
        audioElement.volume = volume;
        return function(play = true)
        {
            if(play)
                audioElement.play();
            else
            {
                audioElement.pause();
                audioElement.currentTime = 0;
            }
        }
    }