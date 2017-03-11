import React, { Component, PropTypes } from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');

const colorDefault = 'rgba(255, 255, 255, 1)'; // white
const colorSelected = 'darkgray' //'rgba(103,58,183, 1)'; // purple

export default class Option extends Component {

  static propTypes = {
    value: PropTypes.string.isRequired,
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
      value,
      chosen,
      onChoose,
    } = this.props;
    const backgroundColorAnimation = this.state.background.interpolate({
      inputRange: [0, 100],
      outputRange: [colorDefault, colorSelected],
    });

    return (
      <TouchableOpacity
        style={{borderWidth: 1, borderColor: 'orange'}}
        activeOpacity={1} // TRY COMMENTING THIS OUT TO SEE WHAT IT DOES
        onPress={onChoose}
      >
        <Animated.View
          style={[styles.container, { backgroundColor: backgroundColorAnimation }]}
        >
          <Text
            style={{ color: chosen ? colorDefault : colorSelected }}
          >
            {value}
          </Text>
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
    borderRadius: 10,
    padding: 10,
    marginRight: 300,
    // marginLeft: 10,
    width: 110,
    // width: (width / 3) - 10;
  },
});