import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class TimerItem extends Component {

  static propTypes = {
    timer: PropTypes.object,
  };

  render () {
    const { timer } = this.props;

    return (
      <View style={styles.container}>
        <Text>{timer.name}</Text>
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
    height: 64,
    backgroundColor: 'white',
  }
});