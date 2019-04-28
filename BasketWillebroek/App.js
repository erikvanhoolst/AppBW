/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator} from "react-navigation";
import Home from "./src/screens/Home";
import Splash from "./src/screens/Splash";
import SplashScreen from 'react-native-splash-screen';
import Icons from 'react-native-vector-icons/Ionicons';

type Props = {};

const TestNavigator = createStackNavigator(
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

const BottomNavigator = createBottomTabNavigator(
    {
      Home: { screen: Home },
      Splash: { screen: Splash },
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor}) => {
          const { routeName } = navigation.state;
          let IconComponent = Icons;
          let iconName;
          if (routeName === 'Home') {
            iconName = 'ios-home';
          } else if (routeName === 'Splash'){
            iconName = 'ios-basketball';
          }
          return <IconComponent name={iconName} size={25} color={tintColor} />;
        }
      }),
      tabBarOptions: {
        activeTintColor: '#F8921E',
        inactiveTintColor: 'gray'
      }

    }
);

const RootSwitch = createSwitchNavigator({Home, BottomNavigator});

const AppContainer = createAppContainer(BottomNavigator);



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


