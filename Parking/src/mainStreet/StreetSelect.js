import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class StreetSelect extends Component {

  static propTypes = {
    openPopup: PropTypes.func.isRequired,
    streetName: PropTypes.string.isRequired,
  }

  render() {
    const {
      openPopup,
      streetName,
    } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={openPopup}
        >
          <Text>
            { streetName } +
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
  }
})