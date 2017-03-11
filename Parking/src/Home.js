import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { defaultStyles } from './styles';
import { current_parked } from './data';

export default class Home extends Component {

  static propTypes = {
    moveCar: PropTypes.func.isRequired,
  }

  state = {
    primary: '',
    cross: '',
    expireTime: null,
  }

  componentWillMount() {
    // get from dataBase
    const primary = current_parked.on.street_name;
    const cross = current_parked.at.street_name;
    const expireTime = current_parked.expire_time;
    this.setState({
      primary,
      cross,
      expireTime,
    });
  }

  render() {
    const { moveCar } = this.props;
    const {
      primary,
      cross,
      expireTime,
    } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.mainText}>
          <Text style={styles.text}>Your car is parked</Text>
          <Text style={styles.text}>on { primary }</Text>
          <Text style={styles.text}>at { cross }</Text>
          <Text style={styles.text}>and needs to be moved</Text>
          <Text style={styles.text}>by { expireTime }</Text>
        </View>
        <TouchableHighlight
          style={styles.buttonContainer}
          onPress={moveCar}
        >
          <Text style={styles.buttonText}>Update</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...defaultStyles.appContainer,
  },
  buttonContainer: {
    ...defaultStyles.button,
  },
  text: {
    ...defaultStyles.text,
  },
  buttonText: {
    ...defaultStyles.text,
    ...defaultStyles.buttonText,
  },
  mainText: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 160,
  },
})