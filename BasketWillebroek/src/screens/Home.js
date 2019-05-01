import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Platform, ActivityIndicator} from 'react-native';
import NavBar from '../components/NavBar';
import GameCard from "../components/GameCard";
import {getTeamMatchesByGuid} from "../services/GameService";
import {guidHerenD} from "../assets/values";
import {Match} from "../model/Match";


export default class Home extends Component {
  async componentDidMount(): void {
    await getTeamMatchesByGuid(guidHerenD).then(res => this.setState({matches: res}));
    this.setState({loading: false});
    console.log(this.state.matches);
  }

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      matches: [],
    };

    //setTimeout(async () => getTeamMatchesByGuid(guidHerenD).then(response => this.setState({matches: response})), 3000);
    //getTeamMatchesByGuid(guidHerenD).then(response => this.setState({matches: response}));

    //this.state.matches = getTeamMatchesByGuid(guidHerenD);
    //console.log("constructor van home: "+ this.state.matches);
  }


  render() {
    if(this.state.loading){
      return(
          <View style={styles.container}>
            <NavBar/>
            <View style={[styles.mainContainer, {alignItems: 'center', justifyContent: 'center'}]}>
              <ActivityIndicator size={'large'}/>
            </View>
          </View>
      )
    }

    return (
      <View style={styles.container}>
        <NavBar/>
        <View style={styles.mainContainer}>
          <GameCard match={this.state.matches[1]}/>
          <GameCard match={this.state.matches[1]}/>
          <GameCard match={this.state.matches[1]}/>
          <GameCard match={this.state.matches[1]}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: Platform.OS === "ios" ? 30 : 0
  },
  mainContainer: {
    flex: 1,

  }
});
