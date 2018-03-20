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
import Sizes                from "../../theme/sizes";

export default class IAManager extends Component{

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.timeout = setInterval(() => {
            let answer = Answers.answersIAEasy(this.props.mode);
            this.setState({card: answer});
            this.handleChoosedCard(answer);
        }, 2000)
    }

    componentWillReceiveProps(props){
    }


    handleChoosedCard(card){
        if (this.props.score && (this.props.score.p1Score >= 3 || this.props.score.p2Score>= 3)){
            clearInterval(this.timeout);
            clearTimeout(this.timeout);
        }else {
            if (this.props && this.props.callback && typeof this.props.callback === "function")
             this.props.callback(card)
        }
    }

    renderCards(item){
        if (item && item.item) {
            return (
                <View>
                    <Image source={this.state.card === item.item.reference ? item.item.images.selected : item.item.images.default}
                           style={{height:Sizes.screen.height / 8, width:Sizes.screen.width / 5, margin:10}} />
                </View>
            )
        }else{return(<View/>)}
    }

    render(){
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.cards}
                    extraData={this.state}
                    numColumns={3}
                    columnWrapperStyle={styles.container}
                    ItemSeparatorComponent={() => <View style={{margin:0}}/>}
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
        justifyContent:'center',
        alignItems:"center",
    },
});
