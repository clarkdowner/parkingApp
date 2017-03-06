import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  // TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import { defaultStyles } from './styles';
import StreetDisplay from './mainStreet/StreetDisplay';
import SweepingSelections from './mainSweeping/SweepingSelections';
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
  }

  confirmPress = () => {
    this.setState({
      confirmation: true,
    });
    this.openPopup();
  }

  openPopup = () => { // why function here??
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

  render() {
    const {
      popupIsOpen,
      primary,
      cross,
      confirmation,
    } = this.state;
    return (
      <View style={styles.container}>
        <StreetDisplay 
          // streetData={this.props.streetData}
          primary={primary}
          cross={cross}
          setPrimary={this.setPrimary}
          setCross={this.setCross}
          openPopup={this.openPopup}
        />
        <SweepingSelections />
        <TouchableHighlight
          style={styles.buttonContiner}
          onPress={this.confirmPress}
        >
          <Text style={styles.buttonText}>Repark</Text>
        </TouchableHighlight>
        <Popup
          isOpen={popupIsOpen}
          closePopup={this.closePopup}
          confirmation={confirmation}
          primary={primary}
          cross={cross}
          confirmPark={this.props.parkCar}
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
    color: 'white',
    fontSize: 18,
  },
})