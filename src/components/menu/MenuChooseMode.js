/**
 * Created by Andrea on 18/03/2018.
 */

import React, { Component }     from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    FlatList,
    TouchableWithoutFeedback,
} from 'react-native';
import GameManager              from "../game/GameManager";
import Sizes                    from "../../theme/sizes";
import Colors                   from "../../theme/colors";
import GameMode                 from "../../config/game";
import Localization             from "../../localization/LocalizedStrings";

export default class MenuChooseMode extends Component{

    constructor(props) {
        super(props);
        this.state = props;
    }

    componentWillReceiveProps(props){
    }

    componentDidMount()  {
        //console.warn("props: ", this.props, "state: ", this.state)
    }

    handleMode(mode){
        this.setState({mode:mode});
        this.state.updatePreset({mode:mode})
    }

    /*  <Button
                        title={Localization.getStringOfKey(item.item.reference)}
                        onPress={this.handleMode.bind(this, item.item.reference)}
                        color={this.state.mode === item.item.reference ? Colors.secondary : Colors.primary}
                    />*/

    renderMode(item){
        if (item && item.item) {
            return (
                <TouchableWithoutFeedback onPress={this.handleMode.bind(this, item.item.reference)}
                                          style={{width:Sizes.screen.width, height:Sizes.screen.height / 6, backgroundColor:this.state.mode === item.item.reference ? Colors.secondary :Colors.main, alignItems:'center'}}>
                    <View style={{width:Sizes.screen.width, height:Sizes.screen.height / 6, backgroundColor:this.state.mode === item.item.reference ? Colors.secondary :Colors.main, alignItems:'center'}}>
                        <Image source={item.item.images} style={{backgroundColor:this.state.mode === item.item.reference ? Colors.secondary :Colors.main}}/>
                    </View>
                </TouchableWithoutFeedback>
            )
        }else{return(<View/>)}
    }

    render(){
        return(
            <View>
                <Text style={{fontSize:15, color:"white", backgroundColor:Colors.main, textAlign:'center', paddingTop:10, paddingBottom:10, borderBottomWidth:5}}>Game mode</Text>
                <FlatList
                    data={GameMode}
                    extraData={this.state}
                    horizontal={false}
                    renderItem={this.renderMode.bind(this)}
                    keyExtractor={(item, index) => index.toString()}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#BABDC2",
        flex:1
    },
});
