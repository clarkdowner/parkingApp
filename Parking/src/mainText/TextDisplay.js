import React, { Component, PropTypes } from 'react';
import {
  Dimensions,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import StreetSelect from './StreetSelect';
import { defaultStyles } from '../styles';

const { width, height } = Dimensions.get('window');

const StreetDisplay = ({ primary, cross, openPopup, primarySelect, primarySelectToggle }) => (
  <View style={styles.box}>
    {/*<View style={styles.streetSelectView}>*/}
      <Text style={styles.text}>Car is parked</Text>
    {/*</View>*/}
    <View style={styles.streetSelectView}>
      <Text style={styles.text}>on </Text>
      <StreetSelect 
        key='primary'
        compKey='primary'
        openPopup={openPopup}
        streetName={primary}
        primarySelectToggle={primarySelectToggle}
      />
    </View>
    <View style={styles.streetSelectView}>
      <Text style={styles.text}>at </Text>
      <StreetSelect
        key='cross'
        compKey='cross'
        openPopup={openPopup}
        streetName={cross}
        primarySelectToggle={primarySelectToggle}
      />
    </View>
    <Text style={styles.text}>with Street Sweeping: </Text>
  </View>
)

StreetDisplay.propTypes = {
  primary: PropTypes.string,
  cross: PropTypes.string,
  openPopup: PropTypes.func.isRequired,
  primarySelect: PropTypes.bool,
  primarySelectToggle: PropTypes.func,
}

const styles = StyleSheet.create({
  box: {
    // borderWidth: 1,
    // borderColor: 'black',
    height: height / 2,
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'center'
    flex: 1,
  },
  text: {
    ...defaultStyles.text,
    // marginBottom: 15,
  },
  streetSelectView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 290,
    marginBottom: 15,
  },
})

export default StreetDisplay
