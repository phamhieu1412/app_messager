/* eslint-disable prettier/prettier */
/* eslint-disable no-sparse-arrays */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import Swipeout from 'react-native-swipeout'; // thu vien scroll trai phai
import Icon from 'react-native-vector-icons/FontAwesome5';// thu vien ho tro icon cua antd, material
import styles from '../../assets/styles';
import dataCrush from '../../assets/data';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRowKey: null,
      numberOfRefresh: 0,
    };
  }

  onOpen = () => {
    this.setState({
      activeRowKey: this.props.item.id,
    });
  };

  onClose = () => {
    if (this.state.activeRowKey !== null) {
      this.setState({
        activeRowKey: null,
      });
    }
  };
  render() {
    const {item, navigation} = this.props;
    const swipeSettings = {
      autoClose: true,
      onOpen: this.onOpen,
      onClose: this.onClose,
      left: [
        {
          onPress: () => {},
          component: (
            <View style={styles.item}>
              <View style={[styles.inItem, {backgroundColor: '#45BBAC'}]}>
                <Icon
                  style={styles.icon}
                  name="camera"
                  size={16}
                />
              </View>
            </View>
          ),
          backgroundColor: 'white',
        },
        {
          onPress: () => {},
          component: (
            <View style={styles.item}>
              <Icon name="phone" size={30} color="#900" />
            </View>
          ),
          backgroundColor: 'white',
        },
        {
          onPress: () => {},
          component: (
            <View style={styles.item}>
              <Icon name="video" style={styles.icon} />
            </View>
          ),
          backgroundColor: 'white',
        },
        ,
      ],
      right: [
        {
          onPress: () => {
            // this.props.parentFlatList.refs.refEditModal.onShowEditModal(dataCrush[this.props.activeRowKey], this);
            this.props.onEditCrush(this.props.item);
          },
          component: (
            <View style={styles.item}>
                <Icon name="bars" style={[styles.icon, { color: 'black' }]} />
            </View>
          ),
          backgroundColor: 'white',
        },
        {
          onPress: () => {},
          component: (
            <View style={styles.item}>
              <Icon name="bell" style={[styles.icon, {color: 'green'}]} />
            </View>
          ),
          backgroundColor: 'white',
        },
        {
          onPress: () => {
            const key = this.state.activeRowKey;
            Alert.alert('Xóa crush :((((', 'Bạn có muốn xóa người mình thương???', [
              {text: 'Không', onPress: () => console.log('xóa xóa'), style: 'cancel'},
              {text: 'Xóa luôn', onPress: () => {
                dataCrush.splice(item.id - 1, 1);
                this.props.refreshFlatList(key);
              }},
            ],
            { cancelable: true}
            );
          },
          component: (
            <View style={styles.item}>
              <Icon name="trash" style={[styles.icon, { color: 'red' }]} />
            </View>
          ),
          backgroundColor: 'white',
        },
      ],
      rowId: this.props.item.id,
      sextionId: 1,
    };

    return (
      <Swipeout {...swipeSettings} backgroundColor="white">
        <TouchableOpacity onPress={() => navigation.navigate('CrushDetail', { item })}>
          <View style={styles.container}>
            <View style={styles.bgAvatar}>
              <Image source={{uri: item.avatar}} style={styles.avatar} />
            </View>

            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text numberOfLines={1}>{item.description}</Text>
            </View>

            <View style={styles.bgScreen}>
              <Image source={{uri: item.avatar}} style={styles.avatarScreen} />
            </View>
          </View>
        </TouchableOpacity>
      </Swipeout>
    );
  }
}

export default Item;
