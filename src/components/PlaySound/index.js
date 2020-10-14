import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from 'react-native-button';

class PlaySound extends Component {
  render() {
    const {child} = this.props;

    return (
      <View style={styles.sound}>
        <View style={styles.blockSound}>
          <Button onPress={() => {child.navigation.navigate("SoundScreen")}}>
            <Icon name="microphone" size={20} color="white" />

            <Text style={{ color: 'white', marginLeft: 10 }}>Thêm giọng nói đại diện</Text>
          </Button>
        </View>

        <View style={styles.blockHeart}>
          <Icon name="heart" size={20} color="#bababa" />

          <Text style={{ marginHorizontal: 5 }}>0</Text>
        </View>
      </View>
    );
  }
}

export default PlaySound;

const styles = StyleSheet.create({
  sound: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 15,
  },
  blockSound: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#363636',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 50,
  },
  blockHeart: {
    display: 'flex',
    flexDirection: 'row',
  },
});
