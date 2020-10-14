import React, {Component} from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

class DescriptionUserScreen extends Component {
  render() {
    return (
      <View style={[styles.container, {marginHorizontal: 20, marginTop: 15}]}>
        <Text>Híu híu nha ...</Text>
      </View>
    );
  }
}

export default DescriptionUserScreen;
