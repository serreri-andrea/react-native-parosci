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
import IAManager                from "./IAManager";
import GameRuler                from "../../config/game";
import Rules                    from "../../lib/Rules";
import Answers                  from "../../lib/Answers";

export default class GameManager extends Component{

    constructor(props) {
        super(props);
        this.turn = 0;
        this.state = {
            p1Score:0,
            p2Score:0,
        }
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
                {text: "yes", onPress: () => this.props.updateGame()},
                {text: "no", onPress:null}
            ],
            {cancelable: false}
        )
    }

    updateScore(cardA, cardB){
        let winner = Rules.getVictory(this.props.mode, cardA,cardB);
        let p1Score= this.state.p1Score;
        let p2Score = this.state.p2Score;
        if (winner === 1){
            this.setState({p1Score: p1Score + 1})
        }else if (winner === 2){
            this.setState({p2Score: p2Score + 1})
        }else{
            this.setState({p1Score: p1Score, p2Score: p2Score})
        }
    }

    getResponse(card){
        this.turn = this.turn + 1;
        let difficulty = this.props.difficulty;
        let mode = this.props.mode;
        if (difficulty === "medium"){
            let IACard = Answers.answersIAEasy(mode);
            this.updateScore(card, IACard);
            this.setState({playerTwoCard:IACard})
        }else if (difficulty === "hard"){
            let IACard = Answers.answersIACheat(mode, card);
            this.updateScore(card, IACard);
            this.setState({playerTwoCard:IACard})
        }else{
            let IACard = Answers.answersIAEasy(mode);
            this.updateScore(card, IACard);
            this.setState({playerTwoCard:IACard})
        }
        this.setState({playerOneCard:card, card:null})
    }

    getPlays(){
        if (this.props.type === "pve"){
            return(
                <CardBoard cards={Rules.getCards(this.props.mode)} callback={this.getResponse.bind(this)}/>

            )
        }else{
            return(
                <IAManager cards={Rules.getCards(this.props.mode)} mode={this.props.mode} callback={this.getResponse.bind(this)}/>
            )
        }
    }

    renderGame(){
        if (this.state.p1Score >= 3  || this.state.p2Score >= 3){
            return(
                <View>
                    <Text> game if finished with, p1 score : {this.state.p1Score} and p2 score: {this.state.p2Score}</Text>
                </View>
            )
        }else{
            return(
                <View>
                    {this.getPlays()}
                </View>
            )
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Text> TOUR : {this.turn} </Text>
                <ScoreBoard playerOneCard={this.state.playerOneCard} playerTwoCard={this.state.playerTwoCard}
                            mode={this.props.mode} score={{p1Score:this.state.p1Score, p2Score:this.state.p2Score}}/>
                {this.renderGame()}
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
