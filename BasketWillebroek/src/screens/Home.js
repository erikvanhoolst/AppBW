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
    await this.sortGames();
  }

  sortGames(): void {
    let matches = this.state.matches;
    matches.sort(function(a,b) {
      let year = a.datumString.substring(6);
      let month = a.datumString.substring(3,5);
      let day = a.datumString.substring(0,2);
      let date1 = new Date(year,month,day);

      let year2 = b.datumString.substring(6);
      let month2 = b.datumString.substring(3,5);
      let day2 = b.datumString.substring(0,2);
      let date2 = new Date(year2,month2,day2);

      return date1 - date2;
    });

    this.setState({matchesSorted: matches});
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
