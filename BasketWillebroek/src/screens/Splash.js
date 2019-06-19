import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Image, Alert} from 'react-native';
import SplashScreen from "react-native-splash-screen";
import NavBar from '../components/NavBar';
import { getTeamLogo } from '../services/GameService';
import { guidHerenD } from '../assets/values';

export default class Splash extends Component {

  async GetTeamLogos(): void {
    var response = await getTeamLogo(guidHerenD);
    // Alert.alert("Team Logos", "jeff");
  }

  render() {
    return (
        <View style={styles.container}>
          <NavBar/>
          <View style={styles.mainContainer}>
            <Button 
              onPress={this.GetTeamLogos}
              title={"Fetch Team Logos"}
            />
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
