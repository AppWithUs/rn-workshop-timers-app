import React, { Component } from 'react';
import { View, Button, FlatList, StyleSheet } from 'react-native';
import TimerItem from '../components/TimerItem';

export default class Home extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Timers',
    headerBackTitle: 'Back',
    headerRight: <Button onPress={() => navigation.navigate('Create')} title="Create" />,
  });

  intervalId = 0;

  constructor (props) {
    super(props);
    this.state = {
      _triggerRerender: Date.now(),
    };
    this.scheduleRerender(props);
  }

  componentWillReceiveProps(nextProps) {
    this.scheduleRerender(nextProps);
  }

  scheduleRerender (props) {
    const { timers } = props.screenProps;
    const someRunning = timers.some(t => t.running);
    if (someRunning && !this.intervalId) {
      this.intervalId = setInterval(() => {
        this.setState({ _triggerRerender: Date.now() });

      }, 200);
    } else if (!someRunning) {
      clearInterval(this.intervalId);
      this.intervalId = 0;
    }
  }

  render() {

    const { navigate } = this.props.navigation;
    const {
      timers,
      startTimer,
      pauseTimer,
      resumeTimer,
      resetTimer,
    } = this.props.screenProps;

    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={timers}
          extraData={this.state}
          renderItem={({item}) => (
            <TimerItem
              timer={item}
              startTimer={startTimer.bind(null, item.key)}
              pauseTimer={pauseTimer.bind(null, item.key)}
              resumeTimer={resumeTimer.bind(null, item.key)}
              resetTimer={resetTimer.bind(null, item.key)}
            />
          )}
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
