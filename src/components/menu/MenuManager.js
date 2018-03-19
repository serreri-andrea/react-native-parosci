/**
 * Created by Andrea on 18/03/2018.
 */

import React, { Component }     from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image
} from 'react-native';
import GameManager              from "../game/GameManager";
import Sizes                    from "../../theme/sizes";

export default class MenuManager extends Component{

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {};
    }

    componentWillReceiveProps(props){
    }

    componentDidMount()  {
    }

    renderGame(){
        if (this.state.game){
            //this.state.callback(true);
            return(
                <GameManager/>
            )
        }else{
            return(
                <View>
                    <Image source={require('../../images/banner.png')} style={{height:Sizes.screen.height / 1.5,width:Sizes.screen.width}}/>
                    <View style={{margin:20}}>
                        <Button
                            title={"Game test"}
                            onPress={()=>{this.setState({game:true})}}
                            color={"#00BFA5"}/>
                    </View>
                </View>
            )
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
