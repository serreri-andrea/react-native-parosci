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
import Localization             from "../../localization/LocalizedStrings";
import Colors                   from "../../theme/colors";

export default class ScoreBoard extends Component{

    constructor(props) {
        super(props);
    }

    getWinner(){
        let winner = Rules.getVictory(this.props.mode, this.props.playerOneCard,this.props.playerTwoCard );
        if (winner === 1){
            return (Localization.getStringOfKey("playerA"))
        }else if (winner === 2){
            return (Localization.getStringOfKey("playerB"))
        }else{
            return(Localization.getStringOfKey("draw"))
        }
    }


    renderMatchInfo(){
        if (this.props.playerOneCard && this.props.playerTwoCard) {
            return (
                <View>
                    <Text>{Localization.getStringOfKey("playerA")} {Localization.getStringOfKey("played")}: {this.props.playerOneCard || ""}</Text>
                    <Text>{Localization.getStringOfKey("playerB")} {Localization.getStringOfKey("played")}: {this.props.playerTwoCard || ""}</Text>
                    <Text>{Localization.getStringOfKey("winner")}: {this.getWinner()}</Text>
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
                <Text>{Localization.getStringOfKey("score")}: {p1Score} - {p2Score}</Text>
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
