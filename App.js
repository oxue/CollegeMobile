/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {createStackNavigator, createAppContainer} from 'react-navigation';

import SignupScreen from './components/SignupScreen';
import LoginScreen from './components/LoginScreen';

const MainNavigator = createStackNavigator({
  Home: SignupScreen,
  Login: LoginScreen,
},{
  initialRouteName: 'Login'
});

const App = createAppContainer(MainNavigator);

export default App;
