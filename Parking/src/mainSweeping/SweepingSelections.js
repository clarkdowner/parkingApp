import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import Days from './Days';
import Options from './Options';

export default class SweepingSelections extends Component {
  render() {
    return (
      <View>
        <Text>with Street Sweeping: </Text>
        <Options />
        <Days />
        <Options />
      </View>
    );
  }
}
