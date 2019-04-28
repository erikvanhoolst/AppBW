/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from "react-navigation";
import Home from "./src/screens/Home";
import Splash from "./src/screens/Splash";
import SplashScreen from 'react-native-splash-screen';

type Props = {};

const AppNavigator = createStackNavigator(
    {
      Home: {
        screen: Home,
        navigationOptions: {
          header: null
        }
      },
      Splash: {
        screen: Splash,
        navigationOptions: {
          header: null
        }
      }
    },
    {
      initialRouteName: "Home",
    });

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component<Props> {
  componentDidMount(): void {
    SplashScreen.hide();
  }

  render() {
    return (
        <AppContainer/>
    );
  }
}


