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

export default class MenuChooseDifficulty extends Component{

    constructor(props) {
        super(props);
        this.state = props;
    }

    componentWillReceiveProps(props){
    }

    componentDidMount()  {
    }

    handleDifficulty(difficulty){
        this.setState({difficulty:difficulty})
        this.state.callback({difficulty:difficulty})
    }

    render(){
        if (this.state.mode && this.state.type) {
            return (
                <View style={styles.container}>
                    <Button
                        title={"easy"}
                        onPress={this.handleDifficulty.bind(this, "easy")}
                        color={this.state.difficulty=== "easy" ? Colors.secondary : Colors.primary}/>
                    <Button
                        title={"medium"}
                        onPress={this.handleDifficulty.bind(this, "medium")}
                        color={this.state.difficulty=== "medium" ? Colors.secondary : Colors.primary}/>
                    <Button
                        title={"impossible"}
                        onPress={this.handleDifficulty.bind(this, "impossible")}
                        color={this.state.difficulty=== "impossible" ? Colors.secondary : Colors.primary}/>
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
