import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';

export default class TimerItem extends Component {

  static propTypes = {
    timer: PropTypes.object,
  };

  render () {
    const { timer } = this.props;

    return (
      <View>
        <Text>{JSON.stringify(timer)}</Text>
      </View>
    );
  }


};