/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import MainApp from './src/main';

export default class TimersApp extends Component {
  render() {
    return (
      <MainApp />
    );
  }
}

AppRegistry.registerComponent('TimersApp', () => TimersApp);
