import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
// import Button from 'react-native-button';
import AddVoice from '../../components/PlaySound/index';

import styles from './styles';

export default class FanBlock extends Component {
  render() {
    const {parent} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.fanTitle}>
          <Icon
            name="notification"
            size={20}
            color="#F77171"
            style={{flex: 1}}
          />
          <Text style={{flex: 8, fontSize: 16}}>Hiu hiu nha ...!</Text>

          <TouchableOpacity
            onPress={() => {
              parent.navigation.navigate('DescriptionUser');
            }}
            style={{flex: 1}}>
            <IconIon name="chevron-forward-sharp" size={20} />
          </TouchableOpacity>
        </View>

        <View style={styles.fanFollow}>
          <View style={styles.fan_follow}>
            <Text style={{fontSize: 22}}>11</Text>
            <Text style={{fontSize: 16}}>Fan</Text>
          </View>

          <View style={styles.fan_follow}>
            <Text style={{fontSize: 22}}>16</Text>
            <Text style={{fontSize: 16}}>Người theo dõi</Text>
          </View>
        </View>

        <View >
          <AddVoice child={parent} />
        </View>

        <View style={styles.fanRank}>
          <View style={styles.fan_rank}>
            <Text style={{fontSize: 24}}>Xếp hạng Fan</Text>
          </View>

          <View style={styles.fan_rank}>
            <Image
              source={require('../../assets/images/account/girl1.jpg')}
              style={styles.fan_rank_image}
            />
            <Image
              source={require('../../assets/images/account/girl2.jpg')}
              style={styles.fan_rank_image}
            />
            <Image
              source={require('../../assets/images/account/girl3.jpg')}
              style={styles.fan_rank_image}
            />

            <TouchableOpacity
              style={[styles.fan_rank, {marginLeft: 5}]}
              onPress={() => parent.navigation.navigate('FanScreen')}>
              <IconIon
                name="chevron-forward-sharp"
                size={20}
                style={{flex: 1}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
