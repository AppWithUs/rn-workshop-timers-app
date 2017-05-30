import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Timers',
  };

  render() {

    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>Home</Text>
        <Button title="show detail" onPress={() => navigate('Detail')} />
      </View>
    );
  }
}
