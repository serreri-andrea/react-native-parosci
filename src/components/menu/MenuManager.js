/**
 * Created by Andrea on 18/03/2018.
 */

import React, { Component }     from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image
} from 'react-native';
import GameManager              from "../game/GameManager";
import Sizes                    from "../../theme/sizes";
import Colors                   from "../../theme/colors";
import MenuChooseType           from "./MenuChooseType";
import MenuChooseMode           from "./MenuChooseMode";
import MenuChooseDifficulty     from "./MenuChooseDifficulty";

export default class MenuManager extends Component{

    constructor(props) {
        super(props);
        this.props = props;
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
        /*this.props.callback({game:true});
        this.setState({game:true});*/
        console.warn("START: ", this.state)
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
                        color={"#15133c"}
                        title="start game"
                        onPress={this.handleStartGame.bind(this)}
                    />
                </View>
            )
        }else{return(<View/>)}
    }

    renderContent(){
        if (this.state.game) {
            return (
                <GameManager type={this.state.type} mode={this.state.mode} difficulty={this.state.difficulty} callback={this.handleExitGame.bind(this)}/>
            )
        }else{
            return(
                <View style={styles.container}>
                    <MenuChooseMode mode={this.state.mode} type={this.state.type} difficulty={this.state.difficulty} callback={this.getGame.bind(this)}/>
                    <MenuChooseType mode={this.state.mode} type={this.state.type} difficulty={this.state.difficulty }callback={this.getGame.bind(this)}/>
                    <MenuChooseDifficulty mode={this.state.mode} type={this.state.type} difficulty={this.state.difficulty} callback={this.getGame.bind(this)}/>
                    {this.renderStart()}
                </View>
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
        backgroundColor:"#BABDC2",
        flex:1
    },
});
