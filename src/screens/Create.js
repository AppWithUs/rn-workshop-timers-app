import React, { Component } from 'react';
import { Dimensions, TextInput, StyleSheet, View } from 'react-native';
import { isColon, replaceAt } from '../util/string';

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
  static navigationOptions = {
    title: 'Create',
  };

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

    if (this.state.digitsCaretIndex === 0) {
      return;
    }

    if (!isNaN(key)) {
      const replaceIndex = isColon(this.state.digits[this.state.digitsCaretIndex - 1] === ':') ?
        this.state.digitsCaretIndex - 2 :
        this.state.digitsCaretIndex - 1;

      const digits = replaceAt(this.state.digits, replaceIndex, key);
      const nextReplaceIndex = replaceIndex - 1;

      this.setState({
        digits,
        digitsCaretIndex: isColon(digits[nextReplaceIndex]) ? nextReplaceIndex : replaceIndex
      });
    }
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
      </View>
    );
  }
}
