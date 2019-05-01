import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Platform, ActivityIndicator} from 'react-native';
import NavBar from '../components/NavBar';
import GameCard from "../components/GameCard";
import {getTeamMatchesByGuid} from "../services/GameService";
import {guidHerenD} from "../assets/values";
import {Match} from "../model/Match";


export default class Home extends Component {
  async componentDidMount(): void {
    let matchesCall = await getTeamMatchesByGuid(guidHerenD).then();
    this.setState({loading: false});
    this.setState({matches: matchesCall});
    //console.log(matchesCall);
    //console.log(this.state.matches);
  }

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      matches: [],
    };

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
          <GameCard/>
          <GameCard/>
          <GameCard/>
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
