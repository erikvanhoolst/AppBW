import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';

export default class Splash extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Image
              source={require('../assets/FullLogoBW.png')}
              style={{width: 300, height: 150}}/>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8921E',
  }
});
