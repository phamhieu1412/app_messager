import React, {Component} from 'react';
import {View, Text, TextInput, Keyboard, TouchableOpacity} from 'react-native';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAntd from 'react-native-vector-icons/AntDesign';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      secureTextEntryPassword: true,
      iconName: 'eye-outline',
    };
  }

  iconPress = () => {
    let iconNamePassword = this.state.secureTextEntryPassword
      ? 'eye-off-outline'
      : 'eye-outline';

    this.setState({
      secureTextEntryPassword: !this.state.secureTextEntryPassword,
      iconName: iconNamePassword,
    });
  };

  render() {
    const {navigation} = this.props;

    return (
      <View style={[styles.container, {flex: 1}]}>
        <Text style={styles.textLogin}>Tên</Text>
        <View style={styles.block}>
          <IconAntd name="user" size={20} style={styles.iconName} />
          <TextInput style={styles.inputName} />
        </View>

        <Text style={styles.textLogin}>Email</Text>
        <View style={styles.block}>
          <IconMaterial
            name="email-outline"
            size={20}
            style={styles.iconEmail}
          />
          <TextInput style={styles.inputEmail} />
        </View>

        <Text style={styles.textLogin}>Mật khẩu</Text>
        <View style={styles.block}>
          <Icon name="lock-closed-outline" size={20} style={styles.iconLock} />
          <TextInput
            style={styles.inputPassword}
            autoCompleteType="password"
            onSubmitEditing={Keyboard.dismiss}
            secureTextEntry={this.state.secureTextEntryPassword}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />

          <TouchableOpacity onPress={this.iconPress} style={styles.iconEye}>
            <Icon name={this.state.iconName} size={20} />
          </TouchableOpacity>
        </View>

        <View style={styles.viewButtonLogin}>
          <Button
            style={styles.buttonRegister}
            onPress={() => navigation.navigate('LoginScreen')}>
            Đăng kí
          </Button>
        </View>
      </View>
    );
  }
}
