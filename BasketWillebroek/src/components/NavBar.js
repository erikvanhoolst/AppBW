import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Platform, Image} from 'react-native';

export default class NavBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/FullLogoBW.png')}
          style={{width: 100, height: 50, marginTop: 30}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8921E',
    height: 80
  }
});
