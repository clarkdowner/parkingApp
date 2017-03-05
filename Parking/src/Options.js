import React, { Component, PropTypes } from 'react';
import {
  ScrollView,
  View,
} from 'react-native';
import Option from './Option'; // need to create

export default class Options extends Component {

  // static propTypes = {
  //   values: PropTypes.array.isRequired,
  //   chosen: PropTypes.array.isRequired,
  //   onChoose: PropTypes.func.isRequired,
  // }

  render() {
    // const {
    //   values,
    //   chosen,
    //   onChoose,
    // } = this.props;
    const values = ['Every', '1st and 3rd', '2nd and 4th'];
    const chosen = [1];
    const onChoose = (index) => index;
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
                chosen={chosen.includes(index)}
                onChoose={() => onChoose(index)}
              />
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}