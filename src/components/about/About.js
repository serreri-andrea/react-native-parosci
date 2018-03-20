/**
 * created by andrea on 18/03/2018.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';

export default class about extends Component{

    constructor(props) {
        super(props);
    }


    render(){
        return(
            <WebView
                source={{uri: 'https://github.com/serreri-andrea/react-native-parosci/blob/master/README.md'}}
                style={{flex:1}}
            />
        )
    }
}
