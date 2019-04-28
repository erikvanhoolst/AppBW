import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import SplashScreen from "react-native-splash-screen";
import NavBar from '../components/NavBar';

export default class Splash extends Component {

  render() {
    return (
        <View style={styles.container}>
          <NavBar/>
          <View style={styles.mainContainer}>
            <Image
                source={require('../assets/FullLogoBW.png')}
                style={{width: 300, height: 150}}/>
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
    //backgroundColor: '#F8921E',
    backgroundColor: 'white'
  }
});
