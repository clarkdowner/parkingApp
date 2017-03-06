import React, { Component, PropTypes } from 'react';
import {
  ScrollView,
  View,
} from 'react-native';
import Option from './Option'; // need to create

export default class Options extends Component {

  static propTypes = {
    values: PropTypes.array.isRequired,
  //   chosen: PropTypes.number,
  //   onChoose: PropTypes.func.isRequired,
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
    //   chosen,
    //   onChoose,
    } = this.props;
    const { chosen } = this.state;

    return (
      <View>
        <ScrollView
          horizontal={true}
          // decelerate after user lifts finger
          declerationRate={0.1}
          // hide scroll indicators
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          // // do not adjust content automatically
          // automaticallyAdjustContentInsets={false}
          // // snap insterval to stop at option edges
          // snapToInterval={optionWidth}
        >
          {values.map((value, index) =>
            <View key={index}>
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