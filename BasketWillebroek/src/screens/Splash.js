import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Image, Alert} from 'react-native';
import NavBar from '../components/NavBar';


export default class Splash extends Component {

   render() {
    return (
        <View style={styles.container}>
          <NavBar/>
          <View style={styles.mainContainer}>
            <Text>My Name Jeff</Text>
          </View>
        </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
});
