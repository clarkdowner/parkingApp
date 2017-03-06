import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { defaultStyles } from '../styles';

export default class Confirmation extends Component {

  static propTypes = {
    primary: PropTypes.string,
    confirmPark: PropTypes.func.isRequired,
  }

  render() {
    const {
      primary,
      confirmPark,
    } = this.props;
    return (
      <View>
        <Text>
          Your car is parked on { primary }
        </Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={confirmPark}
        >
          <Text>Done</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    ...defaultStyles.button,
  },
})