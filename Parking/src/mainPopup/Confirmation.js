import React, { PropTypes } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { defaultStyles } from '../styles';

const { width } = Dimensions.get('window');

const Confirmation = ({ primary, confirmPark, closePopup }) => (
  <View style={styles.container}>
    <View>
      <View style={styles.center}>
        <Text style={styles.text}>
          Confirm parking on { primary }
        </Text>
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={confirmPark}
      >
        <Text style={styles.buttonText}>Yup</Text>
      </TouchableOpacity>
    </View>
    <View> 
      <TouchableOpacity
        style={styles.center}
        onPress={closePopup}
      >
        <Text style={styles.goBackText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  </View>
)

Confirmation.propTypes = {
  primary: PropTypes.string,
  confirmPark: PropTypes.func.isRequired,
  closePopup: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 20,
  },
  text: {
    ...defaultStyles.text,
  },
  buttonContainer: {
    ...defaultStyles.button,
  },
  buttonText: {
    ...defaultStyles.text,
    ...defaultStyles.buttonText,
  },
  center: {
    alignItems: 'center',
  },
  goBackText: {
    textDecorationLine: 'underline', 
    ...defaultStyles.text,
    fontSize: 18,
    color: 'blue',
  },
})

export default Confirmation