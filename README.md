# react-native-parosci
[![Build Status](https://travis-ci.org/serreri-andrea/react-native-parosci.svg?branch=master)](https://travis-ci.org/serreri-andrea/react-native-parosci)

# Purposes
This game was made for a job test, this is a copy of the well known game "rock, paper, scissors".
Behaware that this game was only tested in android due to a lack of apple material, however you can still enjoy it on android !<br/>
This project use ** no library ** except for testing.

# Prerequisites
- Having Android studio set up.
- Having an another IDE like WebStorm to run the game and test.

# Run the project
- Clone the project
- Run ```npm install```
- Launch android emulator
- Run ```react-native run-android``` on the console
- Enjoy :)

**Encounter issue**:
You might have some trouble running the game for the first time, in fact I had too, the console might told you that ```ANDROID_HOME``` or ```local.properties``` is missing.<br/>
You can generate the ```local.properties``` by just opening the Android folder on Android Studio or you can create a file named local.properties on the root of the android folder and add:
```sdk.dir=C:\\Users\\USERNAME\\AppData\\Local\\Android\\Sdk  ```<br/><br/>
To setup your ```ANDROID_HOME``` you will need to open the System panel under **System and Security** in the Control Panel, then click on **Change settings...**.Open the **Advanced** tab and click on **Environment Variables..**.. Click on **New...** to create a new ```ANDROID_HOME``` user variable that points to the path to your Android SDK.<br/>
**SDK Default path should be:**
```c:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk```

# Run the test
If you want to run any test on the project you can just run ```npm test```, this will run all the tests from:<br/>
* [Component](https://github.com/serreri-andrea/react-native-parosci/tree/master/src/components/__tests__)<br/>
* [Lib](https://github.com/serreri-andrea/react-native-parosci/tree/master/src/lib/__tests__)<br/>
* [Localization](https://github.com/serreri-andrea/react-native-parosci/tree/master/src/localization/__tests__)<br/>

# Built with
- [React-native](https://facebook.github.io/react-native/) - Cross-platform framework for mobile.
- [Jest](https://facebook.github.io/jest/) - Wonderfull JS Library for testing.

# Options
- This project look after your mobile language and use it as a reference to render the same language inside the application, only English and French languages are supported.
- Game rules can be customized.

# Game
### Game mode
- **Classic:** this game mode is following the standard of rock, paper, scissors game.
- **Bazinga:** this game mode comes from the famous tv show **The Big Bang Theory** and basically add on the game 2 more playable card *Spock and Lizard*.

### Type of game
- **Player versus IA:** means you can play against the computer.
- **IA versus IA:** you can watch the computers playing together, Com 1 play randomly and Com 2 play on the difficulty choosen before.

### Difficulty level
- **Easy mode:** the computer play randomly (might not be that easy)
- **Medium mode:** the computer play randomly the first time then he compare your previous move and actual move and will play a card who loose against your previous move (from web statistics this is one of the good combo to win most of the time).
- **Hard mode:** you can not win against this computer because this one is cheating and will always plays the winning card against you.

# Diagrams

### Game usage
![GAME USE](https://github.com/serreri-andrea/react-native-parosci/blob/master/src/images/diagrams/Game%20process.png)

### Win Condition
![WIN CONDITION](https://github.com/serreri-andrea/react-native-parosci/blob/master/src/images/diagrams/win%20process.png)

# Author

Andrea Mazin - *serreri-andrea*
