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

    /*getCardFromRule(){
        let cards = {};
        for (let i = 0; i < GameRuler.game.length; i++){
            if (GameRuler.game[i].reference === this.props.mode){
                cards = GameRuler.game[i].cards
            }
        }
        return(cards)
    }

    getRules(){
        let rules = {};
        for (let i = 0; i < GameRuler.game.length; i++){
            if (GameRuler.game[i].reference === this.props.mode){
                rules = GameRuler.game[i].rules
            }
        }
        return(rules)
    }

    getCardPlayed(card){
        this.setState({yourCard:card});
        if (this.props.difficulty === "easy"){
            let array = this.getCardFromRule();
            let random = array[Math.floor(Math.random()*array.length)];
            this.setState({IACard: random});
            //return(random)
        }else if (this.props.difficulty === "impossible"){
            let rules = this.getRules();
            for(let i = 0; i < rules.length; i++){
                if (rules[i].reference === card){
                    let array = rules[i].loose;
                    let random = array[Math.floor(Math.random()*array.length)];
                    this.setState({IACard:random});
                }
            }
        }
    }

    getVictory(){
        if (this.state.yourCard && this.state.IACard){
            let rules = this.getRules()
            let winner = "";
            for(let i = 0; i < rules.length; i++){
                if (rules[i].reference === this.state.yourCard){
                    if (rules[i].wins.includes(this.state.IACard)){
                        return (winner = "YOU")
                    }else if (rules[i].loose.includes(this.state.IACard)){
                        return (winner = "IA")
                    }else{
                        return (winner = "draw")
                    }
                }
            }
            return(winner)
        }else{}
    }*/

    getCardPlayed(card){
        console.warn("you played: ", card)
    }


    renderMatchInfo(){
        return(
            <View>
                <Text> You played: {this.state.yourCard || ""}</Text>
                <Text> IA plays: {this.state.IACard || ""}</Text>
                <Text> Winner: null</Text>
            </View>
        )
    }

    render(){
        return(
            <View style={styles.container}>
                <ScoreBoard/>
                <View style={{flex:1}}>
                    {this.renderMatchInfo()}
                </View>
                <CardBoard cards={Rules.getCards(this.props.mode)} callback={this.getCardPlayed.bind(this)}/>
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
