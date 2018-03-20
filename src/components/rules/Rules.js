/**
 * Created by Andrea on 18/03/2018.
 */

import React, { Component }     from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    FlatList,
    TouchableWithoutFeedback,
    ScrollView
} from 'react-native';
import Sizes                    from "../../theme/sizes";
import Colors                   from "../../theme/colors";
import GameMode                 from "../../config/game";
import Localization             from "../../localization/LocalizedStrings";

export default class Rules extends Component{

    constructor(props) {
        super(props);
    }

    componentDidMount()  {
    }

    render(){
        return(
            <ScrollView style={styles.container}>
                <Text style={styles.title}>{Localization.getStringOfKey("classic").toUpperCase()}</Text>
                <Image source={require('../../images/schema_rules_classic.png')} style={{height:Sizes.screen.height/2, width:Sizes.screen.width}}/>
                <Text style={[styles.title,{backgroundColor:Colors.secondary}]}>{Localization.getStringOfKey("extended").toUpperCase()}</Text>
                <Image source={require('../../images/schema_rules_extended.png')} style={{height:Sizes.screen.height/2, width:Sizes.screen.width}}/>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#00BFA5",
        flex:1
    },
    title:{
        fontSize:15,
        color:"white",
        backgroundColor:Colors.main,
        textAlign:'center',
        paddingTop:10, paddingBottom:10,
        borderBottomWidth:1 , borderTopWidth:1
    }
});
