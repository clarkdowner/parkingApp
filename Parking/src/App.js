import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
// import Confirmation from './Confirmation';
import Home from './Home';
import Park from './Park';
import { current_parked, street_table } from './data';

export default class App extends Component {
  
  state = {
    homeScreen: true,
  };

  moveCar = () => {
    this.setState({ homeScreen: false });
  }

  renderRoot(ComponentToRender) {
    const streetData = street_table;
    const parkedData = current_parked;
    return (
      <View style={styles.appContainer}>
        <ComponentToRender 
          parkedData={parkedData}
          streetData={streetData}
          moveCar={this.moveCar}
        />
      </View>
    );
  }

  render() {
    const { homeScreen } = this.state;
    return homeScreen ? this.renderRoot(Home) : this.renderRoot(Park);
  }
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 20,
  },
})
