/* eslint-disable no-alert */
/* eslint-disable react/no-string-refs */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-sparse-arrays */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, Platform, TextInput, Dimensions, StyleSheet, Image} from 'react-native';
import Button from 'react-native-button';
import Modal from 'react-native-modalbox';
import ImagePicker from 'react-native-image-crop-picker';
import {ActionSheet} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

import dataCrush from '../../assets/data';

const screen = Dimensions.get('window');

export default class EditModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameCrs: '',
      descriptionCrs: '',
      fileImage: [],
    };
  }

  onChangeInfo = (e) => {
    e.preventDefault();
    console.log(e);
  };

  getImageFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((img) => {
      this.onSelectImage(img);
      alert(img);
    });
  };

  getImageFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((img) => {
      this.onSelectImage(img);
      alert(img);
    });
  };

  onGetImage = () => {
    const BUTTONS = ['Lấy từ thư viện', 'Chụp ảnh', 'Hủy'];

    ActionSheet.show(
      {
        options: BUTTONS,
        cancelButtonIndex: 2,
        title: 'Chọn ảnh',
      },
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            this.getImageFromLibrary();
            break;
          case 1:
            this.getImageFromCamera();
            break;
          default:
            break;
        }
      },
    );
  };

  render() {
    const {nameCrs, descriptionCrs} = this.state;
    const {infoCrs, visiableModalEdit} = this.props;

    return (
      <Modal
        isOpen={visiableModalEdit}
        style={styles.modalEdit}
        position="center"
        backdrop={true}
      >
        <View>
          <Text style={styles.textTitle}>
            Chỉnh sửa người trong mộng
          </Text>
        </View>

        <Text style={styles.textName}>
          Tên crush
        </Text>
        <TextInput
          placeholder="Tên crush"
          value={infoCrs.name}
          editable={false}
          style={styles.inputName}
          onChangeText={(e) => this.setState({nameCrs: e})}
        />

        <Text style={styles.textName}>
          Thông tin crush
        </Text>
        <TextInput
          placeholder="Mô tả crush"
          value={infoCrs.description}
          editable={false}
          style={styles.inputName}
          onChangeText={(e) => this.setState({descriptionCrs: e})}
        />

        <Text style={styles.textName}>
          Ảnh crush
        </Text>
        <View style={styles.addImg}>
          <View style={styles.blockImage}>
            <Image source={{uri: infoCrs.avatar}} style={styles.selectedImage} />

            <Icon name="add-a-photo" size={25} onPress={this.onGetImage} style={styles.iconPhoto} />
          </View>
        </View>

        <Button
          style={{fontSize: 18, color: 'white'}}
          containerStyle={styles.buttonEdit}
          onPress={() => {
            if (nameCrs.length === 0 || descriptionCrs.length === 0) {
              alert('Nhập thông tin người mình thương vào nào <333');
              return;
            }

            var findIdCrush = dataCrush.findIndex(item => this.state.id === item.id );
            if ( findIdCrush < 0) {
                return;
            }
            dataCrush[findIdCrush].name = this.state.nameCrs;
            dataCrush[findIdCrush].description = this.state.descriptionCrs;

            this.setState({visiableModal: false});
          }}>
          Lưu lại
        </Button>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalEdit: {
    justifyContent: 'center',
    borderRadius: Platform.OS === 'ios' ? 30 : 10,
    shadowRadius: 10,
    width: screen.width - 80,
    height: (screen.height * 70) / 100,
    paddingHorizontal: 20,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  textName: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 5,
  },
  inputName: {
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 15,
    marginVertical: 5,
    borderRadius: 7,
    paddingHorizontal: 20,
  },
  buttonEdit: {
    padding: 8,
    borderRadius: 7,
    height: 40,
    backgroundColor: 'pink',
    marginHorizontal: 90,
  },
  addImg: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginBottom: 20,
  },
  blockImage: {
    position: 'relative',
  },
  selectedImage: {
    height: 125,
    width: 125,
    borderRadius: 75,
    // resizeMode: 'contain',
  },
  iconPhoto: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#dfdfdf',
    padding: 5,
    borderRadius: 15,
  },
});
