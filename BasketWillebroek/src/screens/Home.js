import React, {Component} from 'react';
import {StyleSheet, Text, View, ActivityIndicator, FlatList} from 'react-native';
import NavBar from '../components/NavBar';
import GameCard from "../components/GameCard";
import {getTeamMatchesByGuid} from "../services/GameService";
import {guidHerenD} from "../assets/values";
import { Match } from "../model/Match";

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      matches: [],
      matchesSorted: []
    };
  }

  async componentDidMount(): void {
    await getTeamMatchesByGuid(guidHerenD).then(res => this.setState({matches: res, loading: false}));
    this.setState({matchesSorted: this.state.matches.sort(
        (a,b) => { return new Date(a.datumString) - new Date(b.datumString) })});
  }

  sortGames(): Match[] {
    var matches = this.state.matches;

  }

  render() {
    if (this.state.loading) {
      return (
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
          {/*<ScrollView contentContainerStyle={styles.scrollContainer}>
          {this.state.matches.map((match,i) => <GameCard key={i} match={match}/>)}
          </ScrollView>*/}

          <FlatList
              data={this.state.matchesSorted}
              style={styles.scrollContainer}
              renderItem={({item}) => (
                  <GameCard  match={item}/>
              )}
              keyExtractor={(item) => item.guid}
          />

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
    marginBottom: 10
  },
  loadingIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
