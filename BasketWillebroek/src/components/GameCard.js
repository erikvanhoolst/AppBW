import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableHighlight, Alert} from 'react-native';
import {Match} from "../model/Match";

export default class GameCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      match: this.props.match,
      loading: true,
    };
  }

  test(): void {
    Alert.alert('Match Details', this.state.match);
  }

  render() {
    return (
      <TouchableHighlight style={styles.cardContainer} onPress={this.test} underlayColor={'#F8921E'} activeOpacity={1}>
        <View style={styles.container}>
          <View style={styles.leftAndRight}>
            <Image source={require('../assets/FullLogoBW.png')} style={{width: 100, height: 50}}/>
          </View>
          <View style={styles.midView}>
            <View style={styles.topMid}>
              <Text>{this.state.match.beginTijd}</Text>
            </View>
            <View style={styles.centerMid}>
              <Text>{this.state.match.uitslag}</Text>
            </View>
            <View style={styles.bottomMid}>
              <Text>{this.state.match.accNaam}</Text>
            </View>
          </View>
          <View style={styles.leftAndRight}>
            <Image source={require('../assets/okcLogo.png')} style={{width: 80, height: 80, resizeMode: 'center'}}/>
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
    height: '18%',
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
    justifyContent: 'center',
    textAlign: 'center'
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
  }
});
