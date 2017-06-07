import React, { Component } from 'react';
import { Alert, Button, Dimensions, TextInput, StyleSheet, View } from 'react-native';
import { isColon, replaceAt } from '../util/string';
import { getSeconds, pushDigit } from '../util/digits';
import * as timerUtils from '../util/timers';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    color: 'black',
  },
  digitsInput: {
    height: windowWidth / 6,
    fontSize: windowWidth / 6,
    textAlign: 'center',
  },
  nameInput: {
    backgroundColor: '#dfdfe1',
    fontSize: 20,
    lineHeight: 40,
    height: 40,
    margin: 20,
    borderRadius: 10,
    padding: 10
  }
});

const DEFAULT_DIGITS = '00:00:00';

export default class Create extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Create',
  });

  state = {
    name: '',
    digits: DEFAULT_DIGITS,
    digitsCaretIndex: DEFAULT_DIGITS.length
  };

  handleDigitsKeyPress = ({ nativeEvent: { key }}) => {
    if (key === 'Backspace') {
      this.setState({
        digits: DEFAULT_DIGITS,
        digitsCaretIndex: DEFAULT_DIGITS.length
      });
    }

    const currentSeconds = getSeconds(this.state.digits);
    if (key === '0' && !currentSeconds) {
      return;
    }

    if (!isNaN(key)) {
      const digits = pushDigit(this.state.digits, key);

      this.setState({
        digits
      });
    }
  };

  onSave = () => {
    const { goBack } = this.props.navigation;
    const {
      upsertTimer,
    } = this.props.screenProps;

    if (this.state.name.length === 0) {
      Alert.alert('Name must not be empty');
      return;
    }

    const seconds = getSeconds(this.state.digits);
    if (seconds === 0) {
      Alert.alert('Timer must at least be 1 second!');
      return;
    }

    console.log({seconds});

    const t = timerUtils.createTimer();
    t.name = this.state.name;
    t.duration = seconds;
    t.remaining = t.duration;
    upsertTimer(t);
    goBack();
  };

  render() {
    const { digits, digitsCaretIndex } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          autoFocus
          placeholder="Name"
          value={this.state.name}
          onChangeText={(name) => this.setState({ name })}
          style={[styles.input, styles.nameInput]}
          clearButtonMode="always"
        />
        <TextInput
          value={digits}
          style={[styles.input, styles.digitsInput]}
          keyboardType="numeric"
          onKeyPress={this.handleDigitsKeyPress}
          selection={{ start: digitsCaretIndex, end: digitsCaretIndex }}
          maxLength={DEFAULT_DIGITS.length}
        />
        <Button onPress={this.onSave} title="Save" />
      </View>
    );
  }
}
