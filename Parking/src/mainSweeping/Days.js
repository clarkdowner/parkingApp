import React, { Component, PropTypes } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Day from './Day';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default class Days extends Component {

  // static propTypes = {
  //   chosen: PropTypes.array.isRequired,
  //   onChoose: PropTypes.func.isRequired,
  // }

  state = {
    chosen: [0,0,0,0,0,0,0],
  }

  onChoose(index) {
    const { chosen } = this.state;
    const chosenUpdate = [...chosen];
    chosenUpdate[index] = !chosen[index];
    this.setState({
      chosen: chosenUpdate,
    });
  }

  render() {
    const { chosen } = this.state; 
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
                onChoose={() => this.onChoose(index)}
              />
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}