import React, { Component, PropTypes } from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

const Street = ({ streetName, setStreet, closePopup }) => (
  <TouchableOpacity onPress={() => { setStreet(streetName); closePopup(); }} style={{flex: 1}}>
    <Text>{ streetName }</Text>
  </TouchableOpacity>
)

Street.propTypes = {
 streetName: PropTypes.string.isRequired,
 // setStreetAndClosePopup: PropTypes.func.isRequired, 
 setStreet: PropTypes.func.isRequired,
 closePopup: PropTypes.func.isRequired,
}

export default Street