import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import HeaderManager      from "./components/header/HeaderManager";
import StatusBar          from "./components/header/StatusBarManager";
import About              from "./components/about/About";
import Rules              from "./components/rules/Rules";
import MenuManager        from "./components/menu/MenuManager";
import Sizes              from "./theme/sizes";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = props;
    }

    componentWillReceiveProps(props){
        console.warn("PROPS: ", JSON.stringify(this.state))
    }

    componentDidMount()  {
      console.warn("index: ", JSON.stringify(this.state))
    }

    getNavigation(state){
        this.setState({status:state})
    }

    getGame(game){
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
              <MenuManager game={this.state.game}/>
            )
        }
    }

    render() {
        return (
            <View style={{flex:1}}>
              <StatusBar/>
              <HeaderManager callback={this.getNavigation.bind(this)}/>
                {this.renderContent()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
