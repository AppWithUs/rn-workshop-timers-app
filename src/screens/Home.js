import React, { Component } from 'react';
import { View, Button, FlatList, StyleSheet } from 'react-native';
import TimerItem from '../components/TimerItem';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Timers',
  };

  render() {

    const { navigate } = this.props.navigation;
    const { timers } = this.props.screenProps;

    return (
      <View style={styles.container}>
        <Button title="show detail" onPress={() => navigate('Detail')} />
        <FlatList
          style={styles.list}
          data={timers}
          renderItem={({item}) => <TimerItem timer={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
});
