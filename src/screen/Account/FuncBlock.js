import React, {Component} from 'react';
import {Text, View, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import Button from 'react-native-button';

import styles from './styles';

class FuncBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEnabled: false,
    };
  }

  toggleSwitch = () => {
    this.setState({isEnabled: !this.state.isEnabled});
  };

  render() {
    const {isEnabled} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.func_changeDark}>
          <View style={{flex: 8, flexDirection: 'row', alignItems: 'center'}}>
            <IconIon name="moon" size={25} />
            <Text style={styles.func_text}>Chế độ tối</Text>
          </View>

          <Switch
            style={{flex: 2}}
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#5191fc' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={this.toggleSwitch}
            value={isEnabled}
          />
        </View>

        <View style={styles.func_logout}>
          <Button>
            <Icon name="logout" size={25} />
            <Text style={styles.func_text}>Đăng xuất</Text>
          </Button>
        </View>

        <View style={styles.func_deleteAC}>
          <Button>
            <Icon name="delete" size={25} />
            <Text style={styles.func_text}>Xóa tài khoản</Text>
          </Button>
        </View>
      </View>
    );
  }
}

export default FuncBlock;
