import React, { Component, PropTypes } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const colorDefault = 'rgba(255, 255, 255, 1)'; // white
const colorSelected = 'rgba(0, 0, 0, 1)'; // black

export default class Day extends Component {
  
  static propTypes = {
    day: PropTypes.string.isRequired,
    chosen: PropTypes.bool.isRequired,
    onChoose: PropTypes.func.isRequired,
  }

  state = {
    background: new Animated.Value(0),
  }

  componentWillMount() {
    if (this.props.chosen) {
      this.animateSelect();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.chosen && nextProps.chosen) {
      this.animateSelect();
    } else if (this.props.chosen && !nextProps.chosen) {
      this.animateDeselect();
    }
  }

  animateSelect() {
    Animated.timing(this.state.background, {
      toValue: 100,
      duration: 200,
    }).start();
  }

  animateDeselect() {
    Animated.timing(this.state.background, {
      toValue: 0,
      duration: 200,
    }).start();
  }

  render() {
    const {
      day,
      chosen,
      onChoose,
    } = this.props;
    const backgroundColorAnimation = this.state.background.interpolate({
      inputRange: [0, 100],
      outputRange: [colorDefault, colorSelected],
    });

    return (
      <TouchableOpacity onPress={onChoose}>
        <Animated.View style={[styles.container, { backgroundColor: backgroundColorAnimation }]}>
          <Text style={{ color: chosen ? colorDefault : colorSelected }}>{day.charAt(0)}</Text>
        </Animated.View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: colorSelected,
    borderWidth: 1,
    // borderRadius: 10,
    padding: 10,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    width: 45,
  },
});