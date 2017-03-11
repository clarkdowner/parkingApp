import React, { Component, PropTypes } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Option from './Option';

const { width } = Dimensions.get('window');
const optionWidth = (width) / 3 - 10;

export default class Options extends Component {

  static propTypes = {
    values: PropTypes.array.isRequired,
  }

  state = {
    chosen: 0,
  }

  onChoose(index) {
    this.setState({
      chosen: index,
    });
  }

  render() {
    const {
      values,
    } = this.props;
    const { chosen } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView
          horizontal={true}
          // decelerate after user lifts finger
          declerationRate={0.1}
          // hide scroll indicators
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          // do not adjust content automatically
          automaticallyAdjustContentInsets={false}
          // snap insterval to stop at option edges
          snapToInterval={optionWidth}
          style={styles.options}
        >
          {values.map((value, index) =>
            <View key={index} style={{ width: optionWidth }}>
              <Option
                value={value}
                chosen={chosen === index}
                onChoose={() => this.onChoose(index)}
              />
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
    borderWidth: 1, 
    borderColor: 'green',
  },
  options: {
    flexDirection: 'row',
    marginRight: -300,
  },
});
