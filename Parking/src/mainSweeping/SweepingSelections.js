import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import Days from './Days';
import Options from './Options';

const freqOptions = ['Every', '1st and 3rd', '2nd and 4th'];
const timeOfDayOptions = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

export default class SweepingSelections extends Component {

  render() {
    return (
      <View>
        <Text>with Street Sweeping: </Text>
        <Options
          values={freqOptions}
        />
        <Days />
        <Options
          values={timeOfDayOptions}
        />
      </View>
    );
  }
}
