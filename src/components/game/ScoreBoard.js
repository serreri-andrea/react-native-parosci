/**
 * Created by Andrea on 18/03/2018.
 */

import React, { Component }     from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import Rules                    from "../../lib/Rules";

export default class ScoreBoard extends Component{

    constructor(props) {
        super(props);
    }

    getWinner(){
        let winner = Rules.getVictory(this.props.mode, this.props.playerOneCard,this.props.playerTwoCard );
        if (winner === 1){
            return ("You")
        }else if (winner === 2){
            return ("Opponent")
        }else{
            return("Draw")
        }
    }


    renderMatchInfo(){
        if (this.props.playerOneCard && this.props.playerTwoCard) {
            return (
                <View>
                    <Text> You played: {this.props.playerOneCard || ""}</Text>
                    <Text> IA plays: {this.props.playerTwoCard || ""}</Text>
                    <Text> Winner: {this.getWinner()}</Text>
                </View>
            )
        }else{
            return(<View/>)
        }
    }


    render(){
        let p1Score = this.props.score && this.props.score.p1Score ? this.props.score.p1Score : 0;
        let p2Score = this.props.score && this.props.score.p2Score ? this.props.score.p2Score : 0;
        return(
            <View style={styles.container}>
                <Text> Score is : {p1Score} - {p2Score}</Text>
                {this.renderMatchInfo()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        marginTop:10,
        marginBottom:10,
        flex:1,
    },
});
