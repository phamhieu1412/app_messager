import React, {Component} from 'react';
import {View, Text, TextInput, Keyboard, TouchableOpacity} from 'react-native';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/Ionicons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

export default class Login extends Component {
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
      <View style={{flex: 1, backgroundColor: 'pink'}}>
        <View style={{flex: 1, textAlign: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 22, textAlign: 'center'}}>
            App xem crush {'<3'}
          </Text>
        </View>

        <View style={[styles.container, {flex: 6}]}>
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
            <Icon
              name="lock-closed-outline"
              size={20}
              style={styles.iconLock}
            />
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
              style={styles.buttonLogin}
              onPress={() => {
                navigation.navigate('AfterLogin');
              }}>
              Đăng nhập
            </Button>
          </View>
        </View>

        <View style={{flex: 3, flexDirection: 'column'}}>
          <View style={styles.textLoginWith}>
            <Text style={{textAlign: 'center', fontSize: 20}}>
              Đăng nhập với
            </Text>
          </View>

          <View style={styles.blockLoginWith}>
            <View style={[styles.iconLogin, {borderColor: '#1da1f2'}]}>
              <Icon name="logo-twitter" size={30} color="#1da1f2" />
            </View>
            <View style={[styles.iconLogin, {borderColor: '#f66'}]}>
              <Icon name="logo-google" size={30} color="#f66" />
            </View>
            <View style={[styles.iconLogin, {borderColor: '#3B5998'}]}>
              <Icon name="logo-facebook" size={30} color="#3B5998" />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
