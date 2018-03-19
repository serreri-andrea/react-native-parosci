import { NativeModules }    from 'react-native';
import englishFile          from "./en";
import frenshFile           from "./fr";

const Localization = {

    getLocalization(){
        try{
            let systemLanguage = NativeModules.I18nManager.localeIdentifier;
            let languageCode = systemLanguage.substring(0, 2);
            return (languageCode)
        }
        catch(error){
            return("en")
        }
    },

    getStringOfKey(key) {
        let locale = this.getLocalization();
        let defaultFile = englishFile;
        if (locale && locale.toLowerCase() === 'fr')
            defaultFile = frenshFile;
        if (defaultFile && defaultFile.hasOwnProperty(key))
            return defaultFile[key];
        else return "";
    }
};

module.exports = Localization;