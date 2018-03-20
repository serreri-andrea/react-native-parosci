# react-native-parosci
[![Build Status](https://travis-ci.org/serreri-andrea/react-native-parosci.svg?branch=master)](https://travis-ci.org/serreri-andrea/react-native-parosci)

# Purposes
This game was made for a job test, this is a copy of the well known game "rock, paper, scissors".
Behaware that this game was only tested in android due to a lack of apple material, however you can still enjoy it on android !

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
To setup your ```ANDROID_HOME``` you will need to open the System pane under **System and Security** in the Control Panel, then click on **Change settings...**.Open the **Advanced** tab and click on **Environment Variables..**.. Click on **New...** to create a new ```ANDROID_HOME``` user variable that points to the path to your Android SDK.<br/>
**SDK Default path should be:**
```c:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk```
