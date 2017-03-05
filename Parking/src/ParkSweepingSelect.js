import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import DaysSelector from './DaysSelector';
import Options from './Options';

export default class ParkSweepingSelect extends Component {
  render() {
    return (
      <View>
        <Text>with Street Sweeping: </Text>
        <Options />
        <DaysSelector />
        <Options />
      </View>
    );
  }
}
