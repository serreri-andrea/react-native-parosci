/**
 * Created by Andrea on 18/03/2018.
 */

import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const screenHeight = width < height ? height : width;
const screenWidth = width < height ? width : height;

export default {
    // Window Dimensions
    screen: {
        height: screenHeight,
        width: screenWidth,

        widthHalf: screenWidth * 0.5,
        widthThird: screenWidth * 0.333,
        widthTwoThirds: screenWidth * 0.666,
        widthQuarter: screenWidth * 0.25,
        widthThreeQuarters: screenWidth * 0.75,
    },
    navbarHeight: (Platform.OS === 'ios') ? 64 : ((Platform.OS === 'android' && Platform.Version >= 21) ? 74 : 54),
    statusBarHeight: (Platform.OS === 'ios') ? 20 : 0,
    statusBarTranslucent: (Platform.OS === 'android' && Platform.Version >= 21) ? 20 : 0,
};
