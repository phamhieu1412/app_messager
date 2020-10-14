import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, FlatList} from 'react-native';

import data from '../../assets/data';
import ItemFan from './components/ItemFan';
import rank from '../../assets/images/icon/pngfuel.com.png';

export default class FanScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderItem = (item) => {};

  render() {
    return (
      <View>
        {/* <Image
          source={require('../../assets/images/icon/pngfuel.com.png')}
          style={styles.itemImage}
        /> */}
        <FlatList
          data={data}
          renderItem={({item}) => <ItemFan item={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemButtonFan: {
    backgroundColor: 'gray',
    color: 'white',
    borderRadius: 4,
  },
  itemImage: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
});
