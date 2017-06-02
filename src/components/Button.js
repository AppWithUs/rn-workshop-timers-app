import React, { Component, PropTypes } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const COLORS = {
  success: '#56D93A',
  warning: '#FD9B38',
  danger: '#E5252B',
};

export default class Button extends Component {

  static propTypes = {
    onPress: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    containerStyle: PropTypes.any,
    type: PropTypes.oneOf(['success', 'warning', 'danger'])
  };

  static defaultProps = {
    type: 'success',
  };

  render () {
    const { onPress, title, containerStyle, type } = this.props;

    return (
      <TouchableOpacity
        style={[styles.container, { backgroundColor: COLORS[type] }, containerStyle]}
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
    backgroundColor: 'black',
    paddingVertical: 1,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderRadius: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#A6A6A6',
    width: 108,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});