import React, { Component } from 'react';
import {
  StyleSheet,
  // Text,
  TextInput,
  View,
} from 'react-native';

export default class SearchModal extends Component {

  // take in props to hangle onTextChange
  
  state = {
    searchTerm: 'afdfsfa',
  }

  handleTextChange = ({ nativeEvent }) => {
    const { text } = nativeEvent;
    // this.props.onTextChange(text);
    this.setState({
      searchTerm: text,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          {...this.props}
          style={styles.text}
          value={this.state.searchTerm}
          onChange={this.handleTextChange}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    borderColor: 'black',
    borderRadius: 1,
    borderWidth: 1,
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
    fontSize: 24,
  },
});