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
        this.state = {};
    }

    handleChoosedCard(card){
        this.setState({card:card});
        this.props.callback(card)
    }

    renderCards(item){
        return(
            <View>
                <TouchableHighlight onPress={this.handleChoosedCard.bind(this, item.item.reference)} underlayColor={'transparent'}>
                    <Image source={this.state.card === item.item.reference ? item.item.selected : item.item.images}
                           style={{height:50, width:50, backgroundColor: "transparent"}} />
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
                    ItemSeparatorComponent={() => <View style={{margin:10}}/>}
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
