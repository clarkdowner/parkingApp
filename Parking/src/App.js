import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
// import Confirmation from './Confirmation';
import Home from './Home';
import Main from './Main';
import { Provider } from 'react-redux';
import { store } from './store';

export default class App extends Component {
  
  state = {
    homeScreen: true,
  }

  moveCar = () => {
    this.setState({
      homeScreen: false,
    });
  }

  parkCar = () => {
    // write to DB with new parked data
    this.setState({
      homeScreen: true,
    });
  }

  renderRoot(ComponentToRender) {
    return (
      <Provider store={store}>
        <View style={styles.appContainer}>
          <ComponentToRender 
            moveCar={this.moveCar}
            parkCar={this.parkCar}
          />
        </View>
      </Provider>
    );
  }

  render() {
    const { homeScreen } = this.state;
    return homeScreen ? this.renderRoot(Home) : this.renderRoot(Main);
  }
}

const styles = StyleSheet.create({
  appContainer: {
    marginTop: 20,
    // alignItems: 'center',
    // justifyContent: 'space-between',
    flex: 1,
  },
})
