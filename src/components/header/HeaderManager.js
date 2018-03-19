/**
 * Created by Andrea on 18/03/2018.
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import Sizes                from "../../theme/sizes";
import Colors               from "../../theme/colors";

export default class HeaderManager  extends Component{

    constructor(props) {
        super(props);
        this.state = {
            status: "home",
            ...props
        };
    }

    componentDidMount()  {
    }

    callback(state){
        this.setState({status: state});
        this.state.callback(state);
    }

    render(){
        if (this.props.display) {
            return (
                <View style={styles.container}>
                    <Text style={[styles.title, {color: this.state.status === "home" ? "#00BFA5" : "white"}]}
                          onPress={this.callback.bind(this, "home")}>Home</Text>
                    <Text style={[styles.items, {color: this.state.status === "rules" ? "#00BFA5" : "white"}]}
                          onPress={this.callback.bind(this, "rules")}>Rules</Text>
                    <Text style={[styles.items, {color: this.state.status === "about" ? "#00BFA5" : "white"}]}
                          onPress={this.callback.bind(this, "about")}>About</Text>
                </View>
            )
        }else{
            return(<View/>)
        }
    }
}

const styles = StyleSheet.create({
    title:{
        color:'white',
        textAlign:'center',
        fontSize:17,
        width:Sizes.screen.widthThird,
    },
    items:{
        color:'white',
        textAlign:'center',
        fontSize:17,
        width:Sizes.screen.widthThird,
        alignSelf:'center'
    },
    container:{
        flexDirection:'row',
        backgroundColor:'black',
        height:Sizes.navbarHeight,
        justifyContent:'center',
        alignItems:'center',
    }
});

