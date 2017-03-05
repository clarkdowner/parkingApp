import React, { Component, PropTypes } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Day from './Day';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default class DaysSelector extends Component {

  // static propTypes = {
  //   chosen: PropTypes.array.isRequired,
  //   onChoose: PropTypes.func.isRequired,
  // }

  render() {
    const chosen = [0,1,0,1,0,0,0];
    const onChoose = (index) => index;
    return (
      <View>
        <ScrollView
          horizontal={true}
        >
          {days.map((day, index) =>
            <View key={index}>
              <Day 
                day={day}
                chosen={!!chosen[index]}
                onChoose={() => onChoose(index)}
              />
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}