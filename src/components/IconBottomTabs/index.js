import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import IconI from 'react-native-vector-icons/Ionicons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';

class IconBottomTabs extends Component {
  render() {
    const { icon, color, messageIcon, categoryIcon } = this.props;
    const numberWrap = (number = 0) => (
      <View style={styles.numberWrap}>
        <Text style={styles.number}>{number}</Text>
      </View>
    );

    return (
      <View style={{ justifyContent: 'center', backgroundColor: 'transparent' }}>
        {icon ? (
          categoryIcon === 'Ionicons' ? (
            <IconI size={25} name={icon} style={{ color: color }} />
          ) : (
            <IconMCI size={25} name={icon} style={{ color: color }} />
          )
        ) : null}

        {messageIcon && numberWrap(15 || 0)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 20,
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  numberWrap: {
    position: 'absolute',
    top: -5,
    right: -15,
    height: 18,
    minWidth: 18,
    borderRadius: 9,
  },
  number: {
    color: 'white',
    fontSize: 12,
    marginLeft: 3,
    marginRight: 3,
  },
});

export default IconBottomTabs;
