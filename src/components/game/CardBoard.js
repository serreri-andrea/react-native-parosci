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

import Sizes                from "../../theme/sizes";

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
        if (item && item.item && item.item.images) {
            return (
                <View>
                    <TouchableHighlight onPress={this.handleChoosedCard.bind(this, item.item.reference)}
                                        underlayColor={'transparent'}>
                        <Image
                            source={this.state.card === item.item.reference ? item.item.images.selected : item.item.images.default}
                            style={{height:Sizes.screen.height / 8, width:Sizes.screen.width / 5, margin:10}}/>
                    </TouchableHighlight>
                </View>
            )
        }else{return(<View/>)}
    }

    render(){
        return(
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
