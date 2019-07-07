import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableHighlight, Alert} from 'react-native';
import {Match} from "../model/Match";

export default class GameCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      match: this.props.match,
    };
  }

  test(): void {
    // alert('jeff');
  }

  getTeamLogo(teamGuid: String): String {
    var baseUrl = "https://vblcb.wisseq.eu/vbldata/organisatie/";
    var extraUrl = "_Small.jpg";
    var orgId = teamGuid.substring(0,8);

    return baseUrl + orgId + extraUrl;
  }

  render() {
    return (
        <TouchableHighlight style={styles.cardContainer} onPress={this.test} underlayColor={'#F8921E'}
                            activeOpacity={1}>
          <View style={styles.container}>
            <View style={styles.leftAndRight}>
              <Image source={{uri: this.getTeamLogo(this.state.match.tTGUID)}} style={styles.logoTeams}/>
              <Text style={styles.textTeams}>{this.state.match.tTNaam}</Text>
            </View>
            <View style={styles.midView}>
              <View style={styles.topMid}>
                <Text style={styles.textMatchInfo}>{this.state.match.datumString}</Text>
                <Text style={styles.textMatchInfo}>{this.state.match.beginTijd}</Text>
              </View>
              <View style={styles.centerMid}>
                <Text style={styles.textMatchInfo}>{this.state.match.uitslag}</Text>
              </View>
              <View style={styles.bottomMid}>
                <Text style={styles.textMatchInfo}>{this.state.match.accNaam}</Text>
              </View>
            </View>
            <View style={styles.leftAndRight}>
              <Image source={{uri: this.getTeamLogo(this.state.match.tUGUID)}} style={styles.logoTeams}/>
              <Text style={styles.textTeams}>{this.state.match.tUNaam}</Text>
            </View>
          </View>
        </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    height: 120,
    borderStyle: 'solid',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.6,
    shadowRadius: 3,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  leftAndRight: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    textAlign: 'center',
    marginTop: '3%',
    marginBottom: '3%'
  },
  midView: {
    flex: 1,
    borderStyle: 'solid',
    borderLeftWidth: 2,
    borderRightWidth: 2,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  topMid: {
    flex: 1,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  centerMid: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  bottomMid: {
    flex: 1,
    borderStyle: 'solid',
    borderTopWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  textTeams: {
    fontSize: 10,
    fontFamily: 'Verdana',
    textAlign: 'center',
    margin: 4
  },
  textMatchInfo: {
    fontSize: 11,
    fontFamily: 'Verdana',
    textAlign: 'center',
    margin: 1
  },
  logoTeams: {
    width: '95%',
    height: '55%',
    resizeMode: 'contain',
  }
});
