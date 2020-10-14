import React, {Component} from 'react';
import {Text, View, Switch, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

export default class AddNoti extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEnabled: false,
      contentNoti: '',
      countCharacters: 0,
    };
  }

  toggleSwitch = () => {
    this.setState({isEnabled: !this.state.isEnabled});
  };

  changeNoti = (text) => {
    this.setState({
      contentNoti: text,
      countCharacters: text.length,
    });
  };

  render() {
    const {isEnabled, countCharacters, contentNoti} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.blockInput}>
          <TextInput
            maxLength={200}
            placeholder="Đăng thông báo!"
            multiline={true}
            onChangeText={this.changeNoti}
          />
          <Text style={styles.textCharacter}>{`(${countCharacters}/200)`}</Text>
        </View>

        <View style={styles.blockNoti}>
          <Text style={styles.notiText}>Thông báo</Text>
          <Switch
            style={styles.notiSwitch}
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#5191fc' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={this.toggleSwitch}
            value={isEnabled}
          />
        </View>

        <View style={{flex: 4}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blockInput: {
    flex: 2,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    marginVertical: 10,
    position: 'relative',
  },
  textCharacter: {
    fontSize: 11,
    color: '#88888a',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  blockNoti: {
    flex: 1,
    marginVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notiText: {
    flex: 1,
  },
  notiSwitch: {
    flex: 1,
  },
});
