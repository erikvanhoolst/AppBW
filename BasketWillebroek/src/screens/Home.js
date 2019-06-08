import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Platform, ActivityIndicator, FlatList, ScrollView} from 'react-native';
import NavBar from '../components/NavBar';
import GameCard from "../components/GameCard";
import {getTeamMatchesByGuid} from "../services/GameService";
import {guidHerenD} from "../assets/values";


export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      matches: [],
    };
  }

  async componentDidMount(): void {
    await getTeamMatchesByGuid(guidHerenD).then(res => this.setState({matches: res}));
    this.setState({loading: false});
  }

  render() {
    if(this.state.loading){
      return(
          <View style={styles.container}>
            <NavBar/>
            <View style={styles.loadingIndicator}>
              <ActivityIndicator size={'large'}/>
            </View>
          </View>
      )
    }

    return (
      <View style={styles.container}>
        <NavBar/>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {this.state.matches.map((match, i) => <GameCard key={i} match={match}/>)}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollContainer: {
    flex: 1,
    
  },
  loadingIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
