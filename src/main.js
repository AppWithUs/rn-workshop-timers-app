import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/Home';
import DetailScreen from './screens/Detail';
import * as timerUtils from './util/timers';

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
    timers: DEMO_TIMERS
  };

  findTimer = key => {
    const { timers } = this.state;
    const timer = timers.filter(t => t.key === key);
    if (timer.length === 1) {
      return timer[0];
    } else {
      return null;
    }
  };

  startTimer = key => {
    console.log("START", key);
    const timer = this.findTimer(key);
    if (!timer) return;
    timerUtils.startTimer(timer);
    this.upsertTimer(timer);
  };

  pauseTimer = key => {
    const timer = this.findTimer(key);
    if (!timer) return;
    timerUtils.pauseTimer(timer);
    this.upsertTimer(timer);
  };

  resumeTimer = key => {
    this.startTimer(key); // same logic
  };

  resetTimer = key => {
    const timer = this.findTimer(key);
    if (!timer) return;
    timerUtils.resetTimer(timer);
    this.upsertTimer(timer);
  };

  upsertTimer = timer => {
    let { timers } = this.state;

    if (timers.some(t => t.key === timer.key)) {
      timers = timers.map(t => {
        if (t.key === timer.key)
          return timer;
        else
          return t;
      });
    } else {
      timers.push(timer);
    }

    this.setState({ timers });
  };

  render() {
    const { timers } = this.state;

    return (
      <MainNavigator screenProps={{
        timers,
        startTimer: this.startTimer,
        pauseTimer: this.pauseTimer,
        resumeTimer: this.resumeTimer,
        resetTimer: this.resetTimer,
        upsertTimer: this.upsertTimer,
      }}/>
    );
  }
};
