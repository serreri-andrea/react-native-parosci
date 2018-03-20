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
                <View style={{alignItems:'center'}}>
                    <Text style={styles.title}>{Localization.getStringOfKey("playerA")} {Localization.getStringOfKey("played")}:
                        <Text style={styles.res}> {Localization.getStringOfKey(this.props.playerOneCard).toUpperCase() || ""}</Text>
                    </Text>
                    <Text style={styles.title}>{Localization.getStringOfKey("playerB")} {Localization.getStringOfKey("played")}:
                        <Text style={styles.res}> {Localization.getStringOfKey(this.props.playerTwoCard).toUpperCase() || ""}</Text>
                    </Text>
                    <Text style={styles.title}>{Localization.getStringOfKey("winner")}:
                        <Text style={styles.res}> {this.getWinner()}</Text>
                    </Text>
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
                <Text style={styles.title}>{Localization.getStringOfKey("score")}:
                    <Text style={styles.res}> {p1Score} - {p2Score}</Text>
                </Text>
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
    title:{
        fontSize:18,
        color: "white",
    },
    res:{
        fontSize:18,
        color:Colors.secondary
    }
});
