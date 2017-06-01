import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';
import moment from 'moment';
import lp from 'left-pad';

// 3599 => '00:59:59'
const formatDuration = duration => {
  const m = moment.duration(duration * 1000);
  return `${lp(m.hours(), 2, '0')}:${lp(m.minutes(), 2, '0')}:${lp(m.seconds(), 2, '0')}`;
};

export default class TimerItem extends Component {

  static propTypes = {
    timer: PropTypes.object,
  };

  render () {
    const { timer } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>{timer.name}</Text>
          <Text style={styles.durationText}>{formatDuration(timer.duration)}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            containerStyle={styles.button}
            title="Start"
            type="success"
            onPress={() => {}}
          />
          <Button
            title="Reset"
            type="warning"
            onPress={() => {}}
          />
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