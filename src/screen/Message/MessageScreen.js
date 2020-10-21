/* eslint-disable no-alert */
/* eslint-disable react/no-string-refs */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-sparse-arrays */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Root} from 'native-base';

import data from '../../assets/data';
import styles from '../../assets/styles';
import Item from './Item';

import AddModal from './AddModal';
import EditModal from './EditModal';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteRowKey: null,
      infoCrs: {},
      visiableModalEdit: false,
    };

    // props.navigation.setOptions({ title: props.route.params.title});
  }

  static navigationOptions = {
    // Sets the title of the Header
    title: 'Home',
  };

  refreshFlatList = (activeKey) => {
    this.setState({deleteRowKey: activeKey});

    this.refs.flatListCrush.scrollToEnd(); // tu dong truot xuong phan tu cuoi cung vua them
  };

  onAddCrush = () => {
    this.refs.refAddModal.onShowAddModal();
  };

  onEditCrush = (infoCrush) => {
    this.setState({ infoCrs: infoCrush, visiableModalEdit: true });
  };

  render() {
    const {infoCrs, visiableModalEdit} = this.state;
    const {navigation} = this.props;

    return (
      <Root>
        <View style={styles.wrapper}>
          <View
            style={{
              backgroundColor: 'pink',
              height: 60,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flex: 9}}>
              <Text style={styles.title}>Crush {'<3'}.</Text>
            </View>

            <View style={{flex: 1}}>
              <TouchableOpacity
                onPress={() => this.onAddCrush()}>
                <Icon name="adduser" style={{fontSize: 30}} />
              </TouchableOpacity>
            </View>
          </View>

          <FlatList
            ref={'flatListCrush'}
            data={data}
            renderItem={({item}) => (
              <Item item={item} refreshFlatList={this.refreshFlatList} onEditCrush={this.onEditCrush} navigation={navigation} />
            )}
            keyExtractor={(item) => item.id.toString()}
            parentFlatList={this}
            onEditCrush={this.onEditCrush}
          />

          <AddModal ref={'refAddModal'} parentFlatList={this} />
          <EditModal visiableModalEdit={visiableModalEdit} infoCrs={infoCrs} />
        </View>
      </Root>
    );
  }
}

export default Home;
