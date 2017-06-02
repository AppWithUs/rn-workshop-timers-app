import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';
import moment from 'moment';
import lp from 'left-pad';
import {
  isRunning,
  isPaused,
  hasFinished,
  isStopped,
  getRemainingSeconds
} from '../util/timers';

// 3599 => '00:59:59'
const formatDuration = duration => {
  const m = moment.duration(duration * 1000);
  return `${lp(m.hours(), 2, '0')}:${lp(m.minutes(), 2, '0')}:${lp(m.seconds(), 2, '0')}`;
};

export default class TimerItem extends Component {

  static propTypes = {
    timer: PropTypes.object,
    startTimer: PropTypes.func,
    pauseTimer: PropTypes.func,
    resumeTimer: PropTypes.func,
    resetTimer: PropTypes.func,
  };

  intervalId = 0;

  constructor (props) {
    super(props);
    this.scheduleRerender(props);
  }

  scheduleRerender ({ timer }) {
    if (timer.running && !this.intervalId) {
      this.intervalId = setInterval(() => {
        console.log("trigger rerender");
        this.setState({ _triggerRerender: Date.now() });
      }, 200);
    } else if (!timer.running) {
      clearInterval(this.intervalId);
      this.intervalId = 0;
    }
  }

  componentWillReceiveProps(nextProps) {
    this.scheduleRerender(nextProps);
  }

  render () {
    const {
      timer,
      startTimer,
      pauseTimer,
      resumeTimer,
      resetTimer,
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>{timer.name}</Text>
          <Text style={styles.durationText}>{formatDuration(getRemainingSeconds(timer))}</Text>
        </View>
        <View style={styles.buttonContainer}>
          {isStopped(timer) &&
            <Button
              containerStyle={styles.button}
              title="Start"
              type="success"
              onPress={startTimer}
            />
          }
          {isPaused(timer) && !hasFinished(timer) &&
            <Button
              containerStyle={styles.button}
              title="Resume"
              type="success"
              onPress={resumeTimer}
            />
          }
          {isRunning(timer) &&
            <Button
              containerStyle={styles.button}
              title="Pause"
              type="warning"
              onPress={pauseTimer}
            />
          }
          {(isPaused(timer) || hasFinished(timer)) &&
            <Button
              title="Reset"
              type="danger"
              onPress={resetTimer}
            />
          }
        </View>
      </View>
    );
  }

};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'lightgray',
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  textContainer: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 8,
  },
  buttonContainer: {
    marginRight: 8,
  },
  nameText: {

  },
  durationText: {
    flex: 1,
    fontSize: 40,
  },
  button: {
    marginBottom: 4,
  }
});