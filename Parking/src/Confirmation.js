import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { defaultStyles } from './styles';

export default class Confirmation extends Component {

  static propTypes = {
    primary: PropTypes.string,
  }

  render() {
    return (
      <View>
        <Text>
          Your car is parked on { this.props.primary }
        </Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.confirmPark}
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