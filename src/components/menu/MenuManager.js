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
    ScrollView
} from 'react-native';
import GameManager              from "../game/GameManager";
import Sizes                    from "../../theme/sizes";
import Colors                   from "../../theme/colors";
import MenuChooseType           from "./MenuChooseType";
import MenuChooseMode           from "./MenuChooseMode";
import MenuChooseDifficulty     from "./MenuChooseDifficulty";
import Localization             from "../../localization/LocalizedStrings";

export default class MenuManager extends Component{

    constructor(props) {
        super(props);
        this.state = {
            mode:"classic",
            type:"pve",
            difficulty: "easy",
        };
    }

    componentWillReceiveProps(props){
    }

    componentDidMount()  {
    }

    handleStartGame(){
        //send game status to navigation
        this.props.callback(true, false);
        this.setState({game:true});
    }

    handleExitGame(){
        this.setState({game:false})
        this.props.callback(false, true)
    }

    getGame(data){
        //set choosen data before launching the game
        if (data){
            if (data.mode)
                this.setState({mode:data.mode});
            if (data.type)
                this.setState({type:data.type});
            if (data.difficulty)
                this.setState({difficulty:data.difficulty})
        }
    }

    renderStart(){
        if (this.state.mode && this.state.difficulty && this.state.type){
            return(
                <View>
                    <Button
                        color={Colors.primary}
                        title={Localization.getStringOfKey("start")}
                        onPress={this.handleStartGame.bind(this)}
                    />
                </View>
            )
        }else{return(<View/>)}
    }

    renderContent(){
        if (this.state.game) {
            return (
                <GameManager type={this.state.type} mode={this.state.mode} difficulty={this.state.difficulty} updateGame={this.handleExitGame.bind(this)}/>
            )
        }else{
            return(
                <ScrollView style={styles.container}>
                    <MenuChooseMode mode={this.state.mode} type={this.state.type} difficulty={this.state.difficulty} updatePreset={this.getGame.bind(this)}/>
                    <MenuChooseType mode={this.state.mode} type={this.state.type} difficulty={this.state.difficulty } updatePreset={this.getGame.bind(this)}/>
                    <MenuChooseDifficulty mode={this.state.mode} type={this.state.type} difficulty={this.state.difficulty} updatePreset={this.getGame.bind(this)}/>
                    {this.renderStart()}
                </ScrollView>
            )
        }
    }


    render(){
        return(
            <View style={styles.container}>
                {this.renderContent()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"black",
        flex:1
    },
});
