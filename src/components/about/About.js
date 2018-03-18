/**
 * Created by Andrea on 18/03/2018.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class About extends Component{

    constructor(props) {
        super(props);
    }

    componentDidMount()  {
    }

    render(){
        return(
           <View style={styles.container}>
               <Text> ABOUT </Text>
           </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#00BFA5",
        flex:1
    },
});
