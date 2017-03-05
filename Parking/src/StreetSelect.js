import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class StreetSelect extends Component {

  openStreetSearch() {

  }

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={this.openStreetSearch}
        >
          <Text>
            +
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}