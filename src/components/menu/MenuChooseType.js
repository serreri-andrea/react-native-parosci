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
    TouchableWithoutFeedback
} from 'react-native';
import GameManager              from "../game/GameManager";
import Sizes                    from "../../theme/sizes";
import Colors                   from "../../theme/colors";
import GameType                 from "../../config/game";
import Localization             from "../../localization/LocalizedStrings";

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
        this.state.updatePreset({type:type})
    }
/*<TouchableWithoutFeedback onPress={this.handleType.bind(this, "pve")}
 style={{width:Sizes.screen.width, height:Sizes.screen.height / 6, backgroundColor:this.state.type === "pve" ? Colors.secondary :Colors.main, alignItems:'center'}}>
 <View style={{width:Sizes.screen.width, height:Sizes.screen.height / 6, backgroundColor:this.state.type === "pve" ? Colors.secondary :Colors.main, alignItems:'center'}}>
 <Image source={require("../../images/mode/mode_pve.png")} style={{backgroundColor:this.state.type === "pve" ? Colors.secondary :Colors.main}}/>
 </View>
 </TouchableWithoutFeedback>
 <TouchableWithoutFeedback onPress={this.handleType.bind(this, "eve")}
 style={{width:Sizes.screen.width, height:Sizes.screen.height / 6, backgroundColor:this.state.type === "eve" ? Colors.secondary :Colors.main, alignItems:'center'}}>
 <View style={{width:Sizes.screen.width, height:Sizes.screen.height / 6, backgroundColor:this.state.type === "eve" ? Colors.secondary :Colors.main, alignItems:'center'}}>
 <Image source={require("../../images/mode/mode_eve.png")} style={{backgroundColor:this.state.type === "eve" ? Colors.secondary :Colors.main}}/>
 </View>
 </TouchableWithoutFeedback>*/


    render(){
        if (this.state.mode) {
            return(
                <View>
                    <Text style={{fontSize:15, color:"white", backgroundColor:"#455A64", textAlign:'center', paddingTop:10, paddingBottom:10, borderBottomWidth:1 , borderTopWidth:1}}>TYPE DE PARTIE</Text>
                    <TouchableWithoutFeedback onPress={this.handleType.bind(this, "pve")}
                                              style={{width:Sizes.screen.width, height:Sizes.screen.height / 6, backgroundColor:this.state.type === "pve" ? Colors.secondary :Colors.main, alignItems:'center'}}>
                        <View style={{width:Sizes.screen.width, height:Sizes.screen.height / 6, backgroundColor:this.state.type === "pve" ? Colors.secondary :Colors.main, alignItems:'center'}}>
                            <Image source={require("../../images/mode/mode_pve.png")} style={{backgroundColor:this.state.type === "pve" ? Colors.secondary :Colors.main}}/>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.handleType.bind(this, "eve")}
                                              style={{width:Sizes.screen.width, height:Sizes.screen.height / 6, backgroundColor:this.state.type === "eve" ? Colors.secondary :Colors.main, alignItems:'center'}}>
                        <View style={{width:Sizes.screen.width, height:Sizes.screen.height / 6, backgroundColor:this.state.type === "eve" ? Colors.secondary :Colors.main, alignItems:'center'}}>
                            <Image source={require("../../images/mode/mode_eve.png")} style={{backgroundColor:this.state.type === "eve" ? Colors.secondary :Colors.main}}/>
                        </View>
                    </TouchableWithoutFeedback>
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
