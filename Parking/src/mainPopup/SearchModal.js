import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { street_table } from '../data';
import Street from './Street';

export default class SearchModal extends Component {

  static propTypes = {
    setPrimary: PropTypes.func,
    setCross: PropTypes.func,
    primary: PropTypes.bool, // use when Redux is brought in
    animateClose: PropTypes.func,
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
      setPrimary,
      setCross,
      animateClose,
    } = this.props;
    //const setStreet = primary ? setPrimary : setCross;

    return (
      <View style={styles.container}>
        <TextInput
          {...this.props}
          style={[styles.text, styles.textInput]}
          value={searchTerm}
          onChange={this.handleTextChange}
        />
        {/* add button here with onPress={setPrimary(searchTerm)} */}
        {userFilteredStreets.map((street, index) => 
          <View key={index} style={{height: 40, backgroundColor: 'red', borderWidth: 2}}>
            <Street
              setStreet={() => setPrimary(street)}
              streetName={street}
              animateClose={animateClose}
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