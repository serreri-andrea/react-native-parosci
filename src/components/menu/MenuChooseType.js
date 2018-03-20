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
    TouchableWithoutFeedback
} from 'react-native';
import GameManager              from "../game/GameManager";
import Sizes                    from "../../theme/sizes";
import Colors                   from "../../theme/colors";
import GameType                 from "../../config/game";
import Localization             from "../../localization/LocalizedStrings";

export default class MenuChooseType extends Component{

    constructor(props) {
        super(props);
        this.state = props;
    }

    componentWillReceiveProps(props){
    }

    componentDidMount()  {
    }

    handleType(type){
        this.setState({type:type})
        this.state.updatePreset({type:type})
    }

    render(){
        if (this.state.mode) {
            return(
                <View>
                    <Text style={styles.title}>{Localization.getStringOfKey("titleType").toUpperCase()}</Text>
                    <Button
                        title={Localization.getStringOfKey("pve")}
                        onPress={this.handleType.bind(this, "pve")}
                        color={this.state.type === "pve" ? Colors.secondary : Colors.main}/>
                    <Button
                        title={Localization.getStringOfKey("eve")}
                        onPress={this.handleType.bind(this, "eve")}
                        color={this.state.type === "eve" ? Colors.secondary : Colors.main}/>
                </View>
            )
        }else{return(<View/>)}
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#BABDC2",
        flex:1
    },
    title:{
        fontSize:15,
        color:"white",
        backgroundColor:Colors.title,
        textAlign:'center',
        paddingTop:10, paddingBottom:10,
        borderBottomWidth:1 , borderTopWidth:1
    }
});
