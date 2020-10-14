/* eslint-disable no-alert */
/* eslint-disable react/no-string-refs */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-sparse-arrays */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, FlatList, TouchableHighlight, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Button from 'react-native-button';

import styles from '../styles';


class ItemFan extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const {item} = this.props;

    return (
        <View style={styles.itemContainer}>
            <View style={styles.itemInfoFan}>
                <Image source={{uri: item.avatar}} style={styles.itemImage} />

                <Text>{item.name}</Text>
            </View>

            <Button style={styles.itemButtonFan}>FAN</Button>
        </View>
    );
  }
}

export default ItemFan;
