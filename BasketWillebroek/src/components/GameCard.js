import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableHighlight, Alert} from 'react-native';

export default class GameCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      match: this.props.match,
    };

    console.log("Constructor van gamecard: " + this.state.match);
  }

  test(): void {
    Alert.alert(this.props.match);
  }

  render() {
    return (
      <TouchableHighlight style={styles.cardContainer} onPress={this.test} underlayColor={'#F8921E'} activeOpacity={1}>
        <View style={styles.container}>
          <View style={styles.leftAndRightView}>
            <Image source={require('../assets/FullLogoBW.png')} style={{width: 100, height: 50}}/>
          </View>
          <View style={styles.midView}>
            <View style={styles.topMid}>
              <Text>{this.state.match}</Text>
            </View>
            <View style={styles.centerMid}>
              <Text>110-123</Text>
            </View>
            <View style={styles.bottomMid}>
              <Text>De Schalk</Text>
            </View>
          </View>
          <View style={styles.leftAndRightView}>
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
    height: 110,
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
  leftAndRightView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
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
    alignItems: 'center'

  },
  centerMid: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomMid: {
    flex: 1,
    borderStyle: 'solid',
    borderTopWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
