import React, { Component, PropTypes } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class StreetSelect extends Component {

  static propTypes = {
    openPopup: PropTypes.func.isRequired,
    streetName: PropTypes.string.isRequired,
  }

  render() {
    const {
      openPopup,
      streetName,
    } = this.props;
    return (
      <View>
        <TouchableOpacity
          onPress={openPopup}
        >
          <Text>
            { streetName } +
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}