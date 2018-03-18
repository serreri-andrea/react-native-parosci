/**
 * Created by Andrea on 18/03/2018.
 */

import React, { Component } from 'react';

import {
    StatusBar,
    Platform,
} from 'react-native';

export default class StatusBarManager extends Component {

    render = () => (
        <StatusBar animated
                   barStyle={this.props.barStyle ? this.props.barStyle : 'light-content'}
                   backgroundColor={this.props.backgroundColor ? this.props.backgroundColor : 'black'}
                   showHideTransition={'fade'}/>
    );
}