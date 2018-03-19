/**
 * Created by Andrea on 18/03/2018.
 */

import React, { Component }     from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    BackHandler,
    Alert,
} from 'react-native';
import ScoreBoard               from "./ScoreBoard";
import CardBoard                from "./CardBoard";
import GameRuler                from "../../config/game";
import Rules                    from "../../lib/Rules";
import Answers                  from "../../lib/Answers";

export default class GameManager extends Component{

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {};
    }

    componentDidMount()  {
        /* BackHandler.addEventListener('hardwareBackPress', function() {
             this.props.callback(false)
             return true;
         });*/
    }

    componentWillUnmount(){
    }

    handleBack(){
        Alert.alert(
            "Warning",
            "Do you want to exit the game ?",
            [
                {text: "yes", onPress: () => this.props.callback()},
                {text: "no", onPress:null}
            ],
            {cancelable: false}
        )
    }

    getResponse(card){
        this.setState({playerTwoCard:Answers.answersIAEasy(this.props.mode), playerOneCard:card})
    }

    getWinner(){
        let winner = Rules.getVictory(this.state.playerOneCard,this.state.playerTwoCard );
        if (winner === 1){
            return ("You")
        }else if (winner === 2){
            return ("Opponent")
        }else{
            return("Draw")
        }
    }


    renderMatchInfo(){
        if (this.state.playerOneCard && this.state.playerTwoCard) {
            return (
                <View>
                    <Text> You played: {this.state.playerOneCard || ""}</Text>
                    <Text> IA plays: {this.state.playerTwoCard || ""}</Text>
                    <Text> Winner: {this.getWinner()}</Text>
                </View>
            )
        }else{
            return(<View/>)
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <ScoreBoard/>
                <View style={{flex:1}}>
                    {this.renderMatchInfo()}
                </View>
                <CardBoard cards={Rules.getCards(this.props.mode)} callback={this.getResponse.bind(this)}/>
                <Button
                title="back"
                color="pink"
                onPress={this.handleBack.bind(this)}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    },
});
