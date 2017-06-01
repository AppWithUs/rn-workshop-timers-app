import React, { Component } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import TimerItem from '../components/TimerItem';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Timers',
  };

  render() {

    const { navigate } = this.props.navigation;
    const { timers } = this.props.screenProps;

    return (
      <View>
        <Button title="show detail" onPress={() => navigate('Detail')} />
        <FlatList
          data={timers}
          renderItem={({item}) => <TimerItem timer={item} />}
        />
      </View>
    );
  }
}
