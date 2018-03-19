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
import Colors                   from "../../theme/colors";

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
        this.setState({mode:mode})
        this.state.callback({mode:mode})
    }

    render(){
        return(
            <View style={styles.container}>
                <Button
                    title={"Rock, paper, scissors"}
                    onPress={this.handleMode.bind(this, "classic")}
                    color={this.state.mode === "classic" ? Colors.secondary : Colors.primary}/>
                <Button
                    title={"Rock, paper, scissors, lizard, spock"}
                    onPress={this.handleMode.bind(this, "extended")}
                    color={this.state.mode === "extended" ? Colors.secondary : Colors.primary}/>
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
