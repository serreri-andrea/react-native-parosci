/**
 * Created by Andrea on 18/03/2018.
 */

import React, { Component }     from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';
import GameManager              from "../game/GameManager";

export default class MenuManager extends Component{

    constructor(props) {
        super(props);
        this.state = props;
    }

    componentWillReceiveProps(props){
        console.warn("props: ", JSON.stringify(this.state))
    }

    componentDidMount()  {
        console.warn("mount: ", JSON.stringify(this.state))
    }

    renderGame(){
        if (this.state.game){
            //this.state.callback(true);
            return(
                <GameManager/>
            )
        }else{
            return(<Button
                title={"Game test"}
                onPress={()=>{this.setState({game:true})}}
                color={"#00BFA5"}/>)
        }
    }

    renderContent(){
        return(
            <View>
                {this.renderGame()}
            </View>
        )
    }

    render(){
        return(
            <View style={styles.container}>
                {this.renderContent()}
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
