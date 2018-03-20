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

    renderCards(item){
        return(
            <View>
                <TouchableHighlight onPress={this.handleChoosedCard.bind(this, item.item.reference)}>
                    <Image source={item.item.images}
                           style={{height:50, width:50, backgroundColor:this.state.card === item.item.reference ? "pink" : "white"}} />
                </TouchableHighlight>
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
