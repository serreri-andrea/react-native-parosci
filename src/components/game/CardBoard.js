/**
 * Created by Andrea on 18/03/2018.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    TouchableHighlight
} from 'react-native';

export default class CardBoard extends Component{

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {};
    }

    handleChoosedCard(card){
        this.setState({card:card})
        this.props.callback(card)
    }

    renderCardImage(card){
        if (card === "rock")
            return(
                <TouchableHighlight onPress={this.handleChoosedCard.bind(this, "rock")}>
                    <Image source={require("../../images/rock.png")} style={{height:50, width:50, backgroundColor:this.state.card === "rock" ? "pink" : "white"}}/>
                </TouchableHighlight>
            );
        else if (card === "scissors")
            return(
                <TouchableHighlight onPress={this.handleChoosedCard.bind(this, "scissors")}>
                    <Image source={require("../../images/scissors.png")} style={{height:50, width:50, backgroundColor:this.state.card === "scissors" ? "pink" : "white"}} />
                </TouchableHighlight>
            );
        else if (card === "lizard")
            return(
                <TouchableHighlight onPress={this.handleChoosedCard.bind(this, "lizard")}>
                    <Image source={require("../../images/lizard.png")} style={{height:50, width:50, backgroundColor:this.state.card === "lizard" ? "pink" : "white"}} />
                </TouchableHighlight>
            )
        else if (card === "spock")
            return(
                <TouchableHighlight onPress={this.handleChoosedCard.bind(this, "spock")}>
                    <Image source={require("../../images/spock.png")} style={{height:50, width:50, backgroundColor:this.state.card === "spock" ? "pink" : "white"}} />
                </TouchableHighlight>
            )
        else
            return(
                <TouchableHighlight onPress={this.handleChoosedCard.bind(this, "paper")}>
                    <Image source={require("../../images/paper.png")} style={{height:50, width:50, backgroundColor:this.state.card === "paper" ? "pink" : "white"}}/>
                </TouchableHighlight>
            );
    }

    renderCards(item){
        return(
            <View>
                {this.renderCardImage(item.item)}
            </View>
        )
    }

    render(){
        return(
            <View style={styles.container}>
                <FlatList

                    data={this.props.cards}
                    extraData={this.state}
                    horizontal={true}
                    renderItem={this.renderCards.bind(this)}
                    keyExtractor={(item, index) => index.toString()}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        marginBottom:10,
        flexDirection:"row",
        justifyContent:'center'
    },
});
