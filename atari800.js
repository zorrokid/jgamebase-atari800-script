// Script to start Atari games for Atari XL GameBase

// Reference for jGameBase scripting symbols:
// https://jgamebase.sourceforge.io/symbols/_global_.html#itemPathsAndFiles

// 1) Copy this file and config file atari800.cfg to Scripts folder in Atari XL GameBase

// 2) Set correct rom paths in atari800.cfg

// 3) Add emulator from jGameBase Emulators-menu
// - emulator name: atari800
// - supported extensions: atr;xex
// - command to execute: select this atari800.js file
// - configuration file: select atari800.cfg -file

command = "atari800";

Add_CLP(command);
Add_CLP("-config", emulatorConfigFile)
Add_CLP("-xl")

Show_Message("Config file is: " + emulatorConfigFile)
Show_Message("Item types: " + itemType)
Show_Message("fileToRun: " + fileToRun)

if (itemType.contains("atr")) {
    Add_CLP("-nobasic")
    // add all the disc images to drives
    for(var i = 0; i < itemPathsAndFiles.length; i++) {
        Add_CLP(itemPathsAndFiles[i])
    }

    Run_Emulator();

} else if (itemType.contains("xex")) {

    Add_CLP("-run", fileToRun)
    Run_Emulator();

} else {

	Show_Message(NOT_SUPPORTED + "\n\nSupported types: atr, xex");

}
