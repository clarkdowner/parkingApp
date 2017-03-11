import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { defaultStyles } from '../styles';


import Iconset from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';

// const icon = iconset['ios-add-circle-outline'];
// const icon = (<Icon name='rocket' size={30})

export default class StreetSelect extends Component {

  static propTypes = {
    compKey: PropTypes.string.isRequired,
    openPopup: PropTypes.func.isRequired,
    streetName: PropTypes.string.isRequired,
    primarySelectToggle: PropTypes.func.isRequired,
  }

  streetRender(streetName) {
    return (
      <Text style={styles.text}>
        { streetName.length > 0 
            ? streetName
            : this.renderDefault()
        }
      </Text>
    );
  }

  renderDefault() {
    const { compKey } = this.props;
    return (
        <Text style={styles.greyedText}> add { compKey } street</Text>
    );
  }

  render() {
    const { 
      compKey,
      primarySelectToggle,
      openPopup,
      streetName,
    } = this.props;
    const placeholderText = 'add ' + compKey + ' street';
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={ streetName.length > 0 ? styles.text : styles.greyedText }
          onPress={() => { primarySelectToggle(compKey === 'primary'); openPopup(); }}
        >
           {this.streetRender(streetName)}
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // borderColor: 'blue',
    // flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    width: 250,
  },
  text: {
    ...defaultStyles.text,
    // textDecorationLine: 'underline',
    // fontWeight: 'bold',
    // padding: 10,
  },
  greyedText: {
    ...defaultStyles.text,
    textDecorationLine: 'underline',
    color: 'grey',
    fontStyle: 'italic',
    // underlineColor: 'grey',
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    // fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    // color: '#48BBEC',
  },
});
