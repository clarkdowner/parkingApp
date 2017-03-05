import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { current_parked, street_table } from './data';
import { defaultStyles } from './styles';

export default class Home extends Component {

  static propTypes = {
    // need parked data to render
    parkedData: PropTypes.object.isRequired,
    moveCar: PropTypes.func.isRequired,
  }

  render() {
    const { parkedData, moveCar } = this.props;

    return (
      <View>
        <Text style={styles.text}>Your car is parked</Text>
        <Text style={styles.text}>on {parkedData.on.street_name}</Text>
        <Text style={styles.text}>at {parkedData.at.street_name}</Text>
        <Text style={styles.text}>and needs to be moved</Text>
        <Text style={styles.text}>by {parkedData.expire_time}</Text>
        <TouchableHighlight
          style={styles.buttonContainer}
          onPress={moveCar}
        >
          <Text style={styles.buttonText}>Moved It</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    ...defaultStyles.button,
  },
  text: {
    ...defaultStyles.text,
  },
  buttonText: {
    ...defaultStyles.text,
    color: 'white',
    fontSize: 18,
  },
})