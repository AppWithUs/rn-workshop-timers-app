import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/Home';
import DetailScreen from './screens/Detail';

const MainNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Detail: { screen: DetailScreen },
});

const DEMO_TIMERS = [
  {
    key: '849de632-363b-41e1-bc41-557005b83870',
    name: 'Spargel',
    duration: 600,
    remaining: 600,
    started: null,
    running: false,
  },
  {
    key: '849de632-363b-41e1-bc41-557005b83871',
    name: 'Kartoffeln',
    duration: 1800,
    remaining: 0,
    started: null,
    running: false,
  },
  {
    key: '849de632-363b-41e1-bc41-557005b83872',
    name: 'Soße',
    duration: 300,
    remaining: 299,
    started: null,
    running: false,
  },
  {
    key: '849de632-363b-41e1-bc41-557005b83873',
    name: 'Schnitzel',
    duration: 6300,
    remaining: 6300,
    started: null,
    running: false,
  }
];

export default class MainApp extends Component {

  state = {
    timers: DEMO_TIMERS,
  };

  render() {
    const { timers } = this.state;

    return (
      <MainNavigator screenProps={{
        timers,
      }}/>
    );
  }
};
