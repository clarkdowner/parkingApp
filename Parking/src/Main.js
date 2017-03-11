import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { defaultStyles } from './styles';
import StreetDisplay from './mainText/TextDisplay';
import SweepingSelections from './mainOptions/SweepingSelections';
import Popup from './mainPopup/Popup';

export default class Main extends Component {

  static propTypes = {
    parkCar: PropTypes.func.isRequired,
  }

  state = {
    popupIsOpen: false,
    confirmation: false,
    primary: '',
    cross: '',
    primarySelect: true,
  }

  confirmPress = () => {
    this.setState({
      confirmation: true,
    });
    this.openPopup();
  }

  openPopup = () => {
    this.setState({
      popupIsOpen: true,
    });
  }

  closePopup = () => {
    this.setState({
      popupIsOpen: false,
      confirmation: false,
    });
  }

  setStreet = (streetName) => {
    this.state.primarySelect ? this.setPrimary(streetName) : this.setCross(streetName);
  }

  setPrimary = (streetName) => {
    const primary = streetName;
    this.setState({
      primary,
    });
  }

  setCross = (streetName) => {
    const cross = streetName;
    this.setState({
      cross,
    })
  }

  primarySelectToggle = (bool) => {
    this.setState({
      primarySelect: bool,
    });
  }

  render() {
    const {
      popupIsOpen,
      primary,
      cross,
      confirmation,
      setStreet,
    } = this.state;
    return (
      <View style={styles.container}>
        <StreetDisplay 
          primary={primary}
          cross={cross}
          openPopup={this.openPopup}
          primarySelectToggle={this.primarySelectToggle}
        />
        <SweepingSelections />
        <TouchableHighlight
          underlayColor='#99d9f4'
          style={styles.buttonContiner}
          onPress={this.confirmPress}
        >
          <Text style={styles.buttonText}>Park</Text>
        </TouchableHighlight>
        <Popup
          isOpen={popupIsOpen}
          closePopup={this.closePopup}
          openPopup={this.openPopup}
          confirmation={confirmation}
          primary={primary}
          cross={cross}
          confirmPark={this.props.parkCar}
          setStreet={this.setStreet}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...defaultStyles.appContainer,
  },
  buttonContiner: {
    ...defaultStyles.button,
  },
  buttonText: {
    ...defaultStyles.text,
    ...defaultStyles.buttonText,
  },
})