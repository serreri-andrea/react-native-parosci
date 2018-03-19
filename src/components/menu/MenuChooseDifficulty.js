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
    FlatList
} from 'react-native';
import GameManager              from "../game/GameManager";
import Sizes                    from "../../theme/sizes";
import Colors                   from "../../theme/colors";
import GameDifficulty           from "../../config/difficulty";
import Localization             from "../../localization/LocalizedStrings";

export default class MenuChooseDifficulty extends Component{

    constructor(props) {
        super(props);
        this.state = props;
    }

    componentWillReceiveProps(props){
    }

    componentDidMount()  {
    }

    handleDifficulty(difficulty){
        this.setState({difficulty:difficulty})
        this.state.updatePreset({difficulty:difficulty})
    }

    renderDifficulty(item){
        if (item && item.item) {
            return (
                <View>
                    <Button
                        title={Localization.getStringOfKey(item.item.reference)}
                        onPress={this.handleDifficulty.bind(this, item.item.reference)}
                        color={this.state.difficulty === item.item.reference ? Colors.secondary : Colors.primary}
                    />
                </View>
            )
        }else{return(<View/>)}
    }

    render(){
        if (this.state.mode && this.state.type) {
            return (
                <FlatList
                    data={GameDifficulty}
                    extraData={this.state}
                    horizontal={false}
                    renderItem={this.renderDifficulty.bind(this)}
                    keyExtractor={(item, index) => index.toString()}/>
            )
        }else{
            return(<View/>)
        }
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#BABDC2",
        flex:1
    },
});
