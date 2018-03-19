/**
 * Created by Andrea on 18/03/2018.
 */

import React, { Component }     from 'react';

import {
    StatusBar,
    Platform,
} from 'react-native';
import  Colors                  from "../../theme/colors";

export default class StatusBarManager extends Component {

    render (){
        let arrayOfBar = ["default", "dark-content", "light-content"];
        let arrayOfColor = ["white", "black"];
        return(
            <StatusBar animated
                       barStyle={arrayOfBar.includes(this.props.barStyle) ? this.props.barStyle : 'light-content'}
                       backgroundColor={arrayOfColor.includes(this.props.backgroundColor) ?  this.props.backgroundColor : Colors.header.background}
                       showHideTransition={'fade'}/>
        );
    }
}