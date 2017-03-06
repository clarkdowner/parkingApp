import React, { Component, PropTypes } from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Confirmation from './Confirmation';
import SearchModal from './SearchModal';

const { width, height } = Dimensions.get('window');

export default class Popup extends Component {
  
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closePopup: PropTypes.func.isRequired,
    confirmation: PropTypes.bool.isRequired,
    confirmPark: PropTypes.func.isRequired,
    primary: PropTypes.string,
    setPrimary: PropTypes.func,
    setCross: PropTypes.func,
  }

  state = {
    position: new Animated.Value(this.props.isOpen ? 0 : height),
    visible: this.props.isOpen,
  };

  componentWillReceiveProps(nextProps) {
    if (!this.props.isOpen && nextProps.isOpen) {
      this.animateOpen();
    } else if (this.props.isOpen && ! nextProps.isOpen) {
      this.animateClose();
    }
  }

  animateOpen() {
    // update state first
    this.setState({
      visible: true,
    }, () => {
      // then slide up
      Animated.timing(
        this.state.position, { toValue: 0 } // top of screen
      ).start();
    });
  }

  animateClose = () => {
    // slide down first
    Animated.timing(
      this.state.position, { toValue: height} // bottom of screen
    ).start(() => 
      // then update state
      this.setState({
        visible: false,
      })
    );
  }

  renderComponent(confirmation) {
    const {
      primary,
      confirmPark,
      setPrimary,
      setCross,
    } = this.props;
    if (confirmation) {
      return (
        <Confirmation
          primary={primary}
          confirmPark={confirmPark}
        />
      );
    } else {
      return (
        <SearchModal
          setPrimary={setPrimary}
          setCross={setCross}
          animateClose={this.animateClose}
        />
      );
    }
  }

  render() {
    const {
      position,
      visible,
    } = this.state;
    const {
      closePopup,
      confirmation,
    } = this.props;
    // render nothing if not visible
    if (!visible) {
      return null;
    }
    return (
      <View style={styles.container}>
        {/* closes popup if user taps on background */}
        <TouchableWithoutFeedback onPress={ closePopup }>
          <Animated.View style={styles.backdrop} />
        </TouchableWithoutFeedback>
        <Animated.View
          style={[styles.modal, {
            transform: [{ translateY: position }, { translateX: 0 }]
          }]}
        >
          { this.renderComponent(confirmation) }
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject, // fill up all screen
    justifyContent: 'flex-end', // align popup at the bottom
    backgroundColor: 'transparent', // transparent background
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    opacity: 0.2,
  },
  modal: {
    height: height * (2 / 3), // take up two thirds of screen
    backgroundColor: 'white',
  },
});