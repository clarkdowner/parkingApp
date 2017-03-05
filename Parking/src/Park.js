import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  // TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import { defaultStyles } from './styles';
import ParkStreetSelect from './ParkStreetSelect';
import ParkSweepingSelect from './ParkSweepingSelect';

export default class Park extends Component {

  static propTypes = {
    streetData: PropTypes.array.isRequired,
  }

  render() {
    return (
      <View>
        <ParkStreetSelect streetData={this.props.streetData} />
        <ParkSweepingSelect />
        <TouchableHighlight
          style={styles.buttonContiner}
        >
          <Text style={styles.buttonText}>Repark Car</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContiner: {
    ...defaultStyles.button,
  },
  buttonText: {
    ...defaultStyles.text,
    color: 'white',
    fontSize: 18,
  },
})