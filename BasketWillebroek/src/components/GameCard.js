import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableHighlight, Alert } from 'react-native';
import { Match } from "../model/Match";

export default class GameCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      match: this.props.match,
      uriUit: this.getTeamLogo(this.props.match.tUNaam),
      uriThuis: this.getTeamLogo(this.props.match.tTNaam),
    };
  }

  test(): void {
    // alert('jeff');
  }

  getTeamLogo(teamNaam: String): String {
    let baseUrl = '/Users/erikvanhoolst/Desktop/PersonalProjects/Apps/AppBW/BasketWillebroek/src/assets/';

    if (teamNaam.includes('Basket Willebroek')){
      return  baseUrl + 'FullLogoBW.png';
    } else if(teamNaam.includes('Okido Arendonk')){
      return baseUrl + '/TeamLogos/BBCOkidoArendonk.jpg';
    } else if(teamNaam.includes('Fellows Ekeren')){
      return baseUrl + '/TeamLogos/FellowsEkerenBBC.jpg';
    } else if(teamNaam.includes('Phantoms Basket Boom')){
      return baseUrl + '/TeamLogos/PhantomsBasketBoom.jpg';
    } else if(teamNaam.includes('Sobabee Zwijndrecht')){
      return baseUrl + '/TeamLogos/SobabeeZwijndrecht.jpg';
    } else if(teamNaam.includes('Schelle')){
      return baseUrl + '/TeamLogos/BBCSchelle.jpg';
    } else if(teamNaam.includes('Stabroek')){
      return baseUrl + '/TeamLogos/BasketStabroek.jpg';
    } else if(teamNaam.includes('Geranimo Bornem')){
      return baseUrl + '/TeamLogos/GeranimoBornemBasket.jpg';
    } else if(teamNaam.includes('Klein-Brabant')){
      return baseUrl + '/TeamLogos/KleinBrabantBasket.jpg';
    } else {
      return baseUrl + '/okcLogo.png';
    }

    // switch (teamNaam) {
    //   case teamNaam.includes("Basket Willebroek"):
    //     return 'baseUrl + '/FullLogoBW.png';
    //     break;
    
    //   default:
    //     return 'baseUrl + '/okcLogo.png';
    //     break;
    // }
  }

  render() {
    return (
      <TouchableHighlight style={styles.cardContainer} onPress={this.test} underlayColor={'#F8921E'} activeOpacity={1}>
        <View style={styles.container}>
          <View style={styles.leftAndRight}>
            <Image source={{uri: this.state.uriThuis}} style={styles.logoTeams}/>
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
            <Image source={{uri: this.state.uriUit}} style={styles.logoTeams}/>
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
    height: '17%',
    borderStyle: 'solid',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 5},
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
