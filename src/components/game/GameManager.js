/**
 * Created by Andrea on 18/03/2018.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class GameManager extends Component{

    constructor(props) {
        super(props);
    }

    componentDidMount()  {
    }

    render(){
        return(
            <View style={styles.container}>
                <Text> GAME </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        ...StyleSheet.absoluteFillObject,
    },
});
