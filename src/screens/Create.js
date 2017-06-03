import React, { Component } from 'react';
import { Dimensions, TextInput, StyleSheet, View } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  input: {
    color: 'black',
  },
  digitsInput: {
    height: windowWidth / 6,
    fontSize: windowWidth / 6,
    textAlign: 'center',
    color: 'black',
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

export default class Create extends Component {
  static navigationOptions = {
    title: 'Create',
  };

  state = {
    name: '',
    digits: '00:00:00',
  };

  handleDigitsChange = (event) => {
    this.setState({
      digits: '00:00:00'
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Name"
          value={this.state.name}
          onChangeText={(name) => this.setState({ name })}
          style={[styles.input, styles.nameInput]}
          clearButtonMode="always"
        />
        <TextInput
          value={this.state.digits}
          onChange={this.handleDigitsChange}
          style={[styles.input, styles.digitsInput]}
          keyboardType="numeric"
        />
      </View>
    );
  }
}
