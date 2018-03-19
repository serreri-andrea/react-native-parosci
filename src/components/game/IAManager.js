/**
 * Created by Andrea on 18/03/2018.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class IAManager extends Component{

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {};
    }

    render(){
        return(
            <View style={styles.container}>
                <Text> Score is : 0 - 0 </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        marginTop:10,
        marginBottom:10
    },
});
