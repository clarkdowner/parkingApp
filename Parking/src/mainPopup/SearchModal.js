import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { street_table } from '../data';
import Street from './Street';

export default class SearchModal extends Component {

  static propTypes = {
    setStreet: PropTypes.func,
    closePopup: PropTypes.func,
  }
  
  state = {
    searchTerm: '',
  }

  componentWillMount() {
    // call to database
    const userSavedStreets = street_table.map(street => street.street_name);
    userSavedStreets.sort();
    userFilteredStreets = userSavedStreets;
    this.setState({
      userSavedStreets,
      userFilteredStreets,
    });
  }

  handleTextChange = ({ nativeEvent }) => {
    const { text } = nativeEvent;
    this.setState({
      searchTerm: text,
    });
    this.filterStreets(text);
  }

  filterStreets(term) {
    const { userSavedStreets } = this.state;
    const filterStreets = term.length < 1 ? userSavedStreets : userSavedStreets.filter((elem) =>
      elem.toLowerCase().indexOf(term.toLowerCase()) > -1
    );
    const userFilteredStreets = filterStreets.length > 0 ? filterStreets : [ term ];
    this.setState({
      userFilteredStreets,
    });
  }

  render() {
    const {
      searchTerm,
      userFilteredStreets,
    } = this.state;
    const { 
      setStreet,
      closePopup,
    } = this.props;

    return (
      <View style={styles.container}>
        <View>
          <TextInput
            {...this.props}
            placeholder='Street Name'
            style={[styles.text, styles.textInput]}
            value={searchTerm}
            onChange={this.handleTextChange}
          />
          <TouchableOpacity
            onPress={() => { setStreet(searchTerm); closePopup() }}
          >
            <Text>+</Text>
          </TouchableOpacity>
        </View>
        {userFilteredStreets.map((street, index) => 
          <View key={index} style={{height: 40, backgroundColor: 'red', borderWidth: 2}}>
            <Street
              streetName={street}
              setStreet={setStreet}
              closePopup={closePopup}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'black',
    // borderRadius: 1,
    borderWidth: 1,
    backgroundColor: 'white',
  },
  textInput: {
    backgroundColor: 'blue',
    height: 50,
  },
  text: {
    color: 'black',
    fontSize: 24,
  },
});