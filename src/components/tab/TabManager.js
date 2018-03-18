/**
 * Created by Andrea on 18/03/2018.
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableNativeFeedback
} from 'react-native';
import Sizes                from "../../theme/sizes";

export default class HeaderManager  extends Component{

    constructor(props) {
        super(props);
        this.state = props;
    }

    componentDidMount()  {
    }

    render(){
        return(
            <TouchableNativeFeedback style={{}}>
                <View style={styles.container}>
                    <Text style={styles.items}>Game</Text>
                    <Text style={styles.items}>Rules</Text>
                    <Text style={styles.items}>Mystery</Text>
                </View>
            </TouchableNativeFeedback>
        )
    }
}

const styles = StyleSheet.create({
    items:{
        color:'white',
        textAlign:'center',
        fontSize:17,
        width:Sizes.screen.widthThird,
        alignSelf:'center'
    },
    container:{
        flexDirection:'row',
        backgroundColor:'black',
        height:51,
        position:'absolute',
        bottom:0, left:0, right:0,
        justifyContent:'center'
    }
});

