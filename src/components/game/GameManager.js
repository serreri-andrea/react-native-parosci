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
    Image,
    ImageBackground,
} from 'react-native';
import Localization             from "../../localization/LocalizedStrings";
import ScoreBoard               from "./ScoreBoard";
import CardBoard                from "./CardBoard";
import IAManager                from "./IAManager";
import GameRuler                from "../../config/game";
import Rules                    from "../../lib/Rules";
import Answers                  from "../../lib/Answers";
import Colors                   from "../../theme/colors";

export default class GameManager extends Component{

    constructor(props) {
        super(props);
        this.turn = 0;
        this.previousCard = null;
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
            Localization.getStringOfKey("warning"),
            Localization.getStringOfKey("leave"),
            [
                {text: Localization.getStringOfKey("yes"), onPress: () => this.props.updateGame()},
                {text: Localization.getStringOfKey("cancel"), onPress:null}
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
        this.previousCard = this.state.playerOneCard;
        if (difficulty === "medium"){
            let IACard = Answers.answersIAMedium(mode, this.previousCard, card);
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

    renderEnd(){
        return(
            <Text style={styles.end}>{Localization.getStringOfKey("final")}</Text>
        )
    }

    renderGame(){
        if (this.props.type === "pve") {
            if (this.state.p1Score >= 3 || this.state.p2Score >= 3) {
                return (
                    <View style={{flex:1}}>
                        {this.renderEnd()}
                    </View>
                )
            } else {
                return (
                    <CardBoard cards={Rules.getCards(this.props.mode)} callback={this.getResponse.bind(this)}/>
                )
            }
        }else{
            if (this.state.p1Score > 3 || this.state.p2Score > 3) {
                return(
                    <View style={{flex:1}}>
                        {this.renderEnd()}
                    </View>
                )
            }else{
                return(
                    <IAManager cards={Rules.getCards(this.props.mode)} mode={this.props.mode} callback={this.getResponse.bind(this)} score={{p1Score:this.state.p1Score, p2Score:this.state.p2Score}}/>

                )
            }
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <ImageBackground source={require('../../images/background@x3.png')} style={{flex:1}}>
                    <Text style={styles.turn}>{Localization.getStringOfKey("turn")}: {this.turn} </Text>
                    <ScoreBoard playerOneCard={this.state.playerOneCard} playerTwoCard={this.state.playerTwoCard}
                                mode={this.props.mode} score={{p1Score:this.state.p1Score, p2Score:this.state.p2Score}}/>
                    {this.renderGame()}
                    <Button
                        title={Localization.getStringOfKey("back")}
                        color={Colors.secondary}
                        onPress={this.handleBack.bind(this)}/>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ececec"
    },
    turn:{
        fontSize:20,
        textAlign:'center',
        color:Colors.primary
    },
    end:{
        fontSize:25,
        textAlign:'center',
        color:Colors.secondary
    }
});
