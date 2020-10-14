import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';

export default class ThreeDots extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  _menu = null;

  setMenuRef = (ref) => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  editNotiUser = () => {
    const {navigation} = this.props;
    navigation.navigate('EditNotiUser');
    this.hideMenu();
  };

  addNotiUser = () => {
    const {navigation} = this.props;
    navigation.navigate('AddNotiUser');
    this.hideMenu();
  };

  deleteNotiUser = () => {
    const {navigation} = this.props;
    navigation.navigate('Account');
    this.hideMenu();
  };

  render() {
    return (
      <View style={{marginHorizontal: 10}}>
        <Menu
          ref={this.setMenuRef}
          button={
            <TouchableOpacity onPress={this.showMenu}>
              <Icon name="dots-vertical" size={30} />
            </TouchableOpacity>
          }>
          <MenuItem onPress={this.editNotiUser}>Chỉnh sửa</MenuItem>
          <MenuDivider />

          <MenuItem onPress={this.addNotiUser}>Tạo mới</MenuItem>
          <MenuDivider />

          <MenuItem onPress={this.deleteNotiUser}>Xóa</MenuItem>
        </Menu>
      </View>
    );
  }
}
