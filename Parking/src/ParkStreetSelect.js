import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
} from 'react-native';
import StreetSelect from './StreetSelect';

export default class ParkStreetSelect extends Component {

  static propTypes = {
    streetData: PropTypes.array.isRequired,
  }

  state = {
    primary: '',
    cross: '',
  }

  render() {
    const { primary, cross } = this.state;
    return (
      <View>
        <Text>Car is parked</Text>
        <View>
          <Text>on { primary }</Text>
          <StreetSelect />
        
        </View>
        <View>
          <Text>at { cross }</Text>
          <StreetSelect />

        </View>
      </View>
    );
  }
}
