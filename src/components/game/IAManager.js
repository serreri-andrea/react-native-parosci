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

import Answers              from "../../lib/Answers";

export default class IAManager extends Component{

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {};
    }

    componentDidMount() {
        setTimeout(() => {
            let answer = Answers.answersIAEasy(this.props.mode);
            this.setState({card: answer}, () => {
                setTimeout(() => {
                    this.handleChoosedCard(this.state.card)
                }, 1000)
            })
        }, 1000)
    }


    handleChoosedCard(card){
        //this.setState({card:card});
        this.props.callback(card);
        //clearTimeout();
    }

    renderCards(item){
        return(
            <View>
                <Image source={item.item.images}
                       style={{height:50, width:50, backgroundColor:this.state.card === item.item.reference ? "pink" : "white"}} />
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
                    ItemSeparatorComponent={() => <View style={{margin:20}}/>}
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
