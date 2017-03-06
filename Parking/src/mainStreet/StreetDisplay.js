import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
} from 'react-native';
import StreetSelect from './StreetSelect';

export default class StreetDisplay extends Component {

  static propTypes = {
    // streetData: PropTypes.array.isRequired,
    primary: PropTypes.string,
    cross: PropTypes.string,
    openPopup: PropTypes.func.isRequired,
    primarySelect: PropTypes.bool,
    primarySelectToggle: PropTypes.func,
  }

  render() {
    const {
      primary, 
      cross,
      openPopup,
      primarySelect,
      primarySelectToggle,
    } = this.props;

    return (
      <View>
        <Text>Car is parked</Text>
        <View>
          <Text>on </Text>
          <StreetSelect 
            key='primary'
            openPopup={openPopup}
            streetName={primary}
          />
        </View>
        <View>
          <Text>at </Text>
          <StreetSelect
            key='cross'
            openPopup={openPopup}
            streetName={cross}
          />
        </View>
      </View>
    );
  }
}
