/* eslint-disable no-alert */
/* eslint-disable react/no-string-refs */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-sparse-arrays */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Text,
  View,
  Platform,
  TextInput,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';
import Button from 'react-native-button';
import Modal from 'react-native-modalbox';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ActionSheet} from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';

import dataCrush from '../../assets/data';

const screen = Dimensions.get('window');

export default class AddModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameCrs: '',
      descriptionCrs: '',
      fileImage: [],
    };
  }

  onShowAddModal = () => {
    this.refs.addModalCrush.open();
  };

  onChangeInfo = (e) => {
    e.preventDefault();
    console.log(e);
  };

  createRandomKey = (numberOfCharacters) => {
    return require('random-string')({lenght: numberOfCharacters});
  };

  onSelectImage = (image) => {
    let newDataImg = this.state.fileImage;
    const source = {
      uri: image.path,
    };
    let item = {
      id: Date.now(),
      url: source,
      content: image.data,
    };

    newDataImg.push(item);

    this.setState({fileImage: newDataImg});
  }

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
    const {nameCrs, descriptionCrs, fileImage} = this.state;
    if (fileImage[0] && fileImage[0].url.uri) {
      console.log(fileImage[0].url.uri);
    }
    console.log(fileImage);
    return (
      <Modal
        ref={'addModalCrush'}
        style={styles.modalAdd}
        position="center"
        backdrop={true}
        // onClosed={() => {
        //   alert('is close'); // lam gi sau khi modal dong
        // }}
      >
        <View>
          <Text style={styles.textTitle}>Thêm người trong mộng</Text>
        </View>

        <Text style={styles.title}>Tên crush</Text>
        <TextInput
          placeholder="Nhập tên crush"
          value={nameCrs}
          style={styles.inputText}
          onChangeText={(e) => this.setState({nameCrs: e})}
        />

        <Text style={styles.title}>Thông tin crush</Text>
        <TextInput
          placeholder="Nhập mô tả crush"
          value={descriptionCrs}
          style={styles.inputText}
          onChangeText={(e) => this.setState({descriptionCrs: e})}
        />

        <Text style={styles.title}>Ảnh crush</Text>
        <View style={styles.addImg}>
          <View style={styles.blockImage}>
            {
              fileImage[0] && fileImage[0].url.uri ?
                <Image source={{uri: fileImage[0].url.uri}} style={styles.selectedImage} /> :
                <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_twOpuZjbRZi3mBmYx1F4hvLfP3kKP9f21A&usqp=CAU'}} style={styles.selectedImage} />
            }

            <Icon name="add-a-photo" size={25} onPress={this.onGetImage} style={styles.iconPhoto} />
          </View>
        </View>

        <Button
          style={{fontSize: 18, color: 'black'}}
          containerStyle={styles.btnAdd}
          onPress={() => {
            if (nameCrs.length === 0 || descriptionCrs.length === 0) {
              alert('Nhập tên người mình thương vào nào <333');
              return;
            }

            const newKey = this.createRandomKey(5);
            const newCrush = {
              id: newKey,
              name: nameCrs,
              avatar: '',
              description: descriptionCrs,
            };

            dataCrush.push(newCrush);
            this.props.parentFlatList.refreshFlatList(newKey);
            this.refs.addModalCrush.close();
          }}>
          Thêm
        </Button>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalAdd: {
    justifyContent: 'center',
    borderRadius: Platform.OS === 'ios' ? 30 : 10,
    shadowRadius: 10,
    width: screen.width - 80,
    height: (screen.height * 70) / 100,
    paddingHorizontal: 20,
  },
  textTitle: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  title: {
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 5,
  },
  inputText: {
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 15,
    marginVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 7,
  },
  btnAdd: {
    padding: 8,
    borderRadius: 7,
    height: 40,
    backgroundColor: 'pink',
    marginHorizontal: 90,
  },
  addImg: {
    // width: '100%',
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
