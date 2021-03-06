import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import HeaderManager        from "./components/header/HeaderManager";
import StatusBar            from "./components/header/StatusBarManager";
import About                from "./components/about/About";
import Rules                from "./components/rules/Rules";
import MenuManager          from "./components/menu/MenuManager";
import Sizes                from "./theme/sizes";
import Colors               from "./theme/colors";
import LocalizedStrings     from "./localization/LocalizedStrings";

type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.display = true;
        this.state = {};
    }

    componentWillReceiveProps(props){
        console.warn("receive: ", props)
    }

    componentDidMount()  {
    }

    getNavigation(state){
        //return the actual navigation view
        this.setState({status:state})
    }

    getGame(game, display){
        // return the status of the game: on/off
        this.display = display;
        this.setState({game:game})
    }

    renderContent(){
        if (this.state.status === "rules"){
            return(
                <Rules/>
            )
        }else if (this.state.status === "about"){
            return(
                <About/>
            )
        }else{
            return(
                <MenuManager callback={this.getGame.bind(this)}/>
            )
        }
    }

    render() {
        if (Platform.OS === "android") {
            return (
                <View style={{flex: 1}}>
                    <StatusBar/>
                    <HeaderManager callback={this.getNavigation.bind(this)} display={this.display}/>
                    {this.renderContent()}
                </View>
            );
        }else{
            return(
                <View style={[styles.container, {backgroundColor: Colors.failure}]}>
                    <Image source={require('./images/failure.jpg')} style={{height:Sizes.screen.height / 3,width:Sizes.screen.width}}/>
                    <Text style={styles.warning}>{LocalizedStrings.getStringOfKey("gameAvailable")}</Text>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    warning:{
        fontSize:15,
        color: "white",
        alignSelf:'center',
        textAlign: "center",
    }
});
