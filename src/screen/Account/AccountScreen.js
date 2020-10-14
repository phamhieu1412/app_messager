import React, {Component} from 'react';
import {Text, View, ImageBackground, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Button from 'react-native-button';

import styles from './styles';
import FanBlock from './FanBlock';
import FuncBlock from './FuncBlock';

const screen = Dimensions.get('window');

export default class AccountScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.blockImage}>
          <ImageBackground
            source={require('../../assets/images/account/user.jpg')}
            style={{width: screen.width, flex: 1}}>
            <View
              style={{
                flex: 2,
                alignItems: 'flex-end',
                marginRight: 15,
                paddingTop: 20,
              }}>
              <Button>
                <Icon name="edit" size={30} />
              </Button>
            </View>

            <View style={{flex: 6}} />

            <View style={{flex: 2, marginLeft: 30}}>
              <Text style={{fontSize: 20, color: 'white'}}>Híu híu ...!</Text>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.blockFan}>
          <FanBlock parent={this.props} />
        </View>

        <View style={styles.blockFunc}>
          <FuncBlock />
        </View>
      </View>
    );
  }
}
