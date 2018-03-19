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
    FlatList
} from 'react-native';
import GameManager              from "../game/GameManager";
import Sizes                    from "../../theme/sizes";
import Colors                   from "../../theme/colors";
import GameType                 from "../../config/game";

export default class MenuChooseType extends Component{

    constructor(props) {
        super(props);
        this.state = props;
    }

    componentWillReceiveProps(props){
    }

    componentDidMount()  {
    }

    handleType(type){
        this.setState({type:type})
        this.state.callback({type:type})
    }

    render(){
        if (this.state.mode) {
            return(
                <View>
                    <Button
                        title={"pve"}
                        onPress={this.handleType.bind(this, "pve")}
                        color={this.state.type === "pve" ? Colors.secondary : Colors.primary}/>
                    <Button
                        title={"pvp"}
                        onPress={this.handleType.bind(this, "pvp")}
                        color={this.state.type === "pvp" ? Colors.secondary : Colors.primary}/>
                </View>
            )
        }else{return(<View/>)}
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#BABDC2",
        flex:1
    },
});
