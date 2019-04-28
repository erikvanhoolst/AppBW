import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Platform} from 'react-native';
import NavBar from '../components/NavBar';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavBar/>
        <View style={styles.mainContainer}>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: Platform.OS === "ios" ? 30 : 0
  },
  mainContainer: {

  }
});
