import React, { Component, PropTypes } from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

export default class Street extends Component {

  static propTypes = {
    setStreet: PropTypes.func.isRequired,
    streetName: PropTypes.string.isRequired,
    animateClose: PropTypes.func.isRequired,
  }

  setStreetAndClosePopup() {
    this.props.setStreet();
    // close popup
    this.props.animateClose();
  }

  render() {
    const {
      // setStreet,
      streetName,
    } = this.props;
    return (
      <TouchableOpacity onPress={() => this.setStreetAndClosePopup()} style={{flex: 1}}>
        <Text>{ streetName }</Text>
      </TouchableOpacity>
    );
  }

}