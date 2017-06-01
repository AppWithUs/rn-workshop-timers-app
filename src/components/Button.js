import React, { Component, PropTypes } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class Button extends Component {

  static propTypes = {
    onPress: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    containerStyle: PropTypes.any,
  };

  render () {
    const { onPress, title, containerStyle } = this.props;

    return (
      <TouchableOpacity
        style={[styles.container, containerStyle]}
        onPress={onPress}
      >
        <Text style={styles.text}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#56D93A',
    paddingVertical: 2,
    paddingHorizontal: 12,
    alignItems: 'center',
    borderRadius: 4,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});