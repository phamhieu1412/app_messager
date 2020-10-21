import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import ViewMoreText from 'react-native-view-more-text';

class CrushDetail extends Component {
  constructor(props) {
    super(props);
    // this.state = {}
  }

  componentDidMount() {
    const { navigation } = this.props;

    navigation.setOptions({
      headerTitle: null,
    });
  }

  renderViewMore = (onPress) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.btnShowMore}>
        <Text style={{fontWeight: 'bold'}}>Xem thêm</Text>
        <IconAntDesign name="down" size={15} color='red'/>
      </TouchableOpacity>
    );
  };
  renderViewLess = (onPress) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.btnShowMore}>
        <Text style={{fontWeight: 'bold'}}>Thu gọn</Text>
        <IconAntDesign name="up" size={15} color='red'/>
      </TouchableOpacity>
    );
  };

  render() {
    const { item } = this.props.route.params;
    const arrayColors = ['#00A651', '#ED1C24', '#00A3FF'];
    const arrayInterests = [];
    for (let i = 0; i < item.interests.length; i++) {
      arrayInterests.push({
        id: item.interests[i].id,
        name: item.interests[i].name,
        color: arrayColors[i],
      });
    }

    return (
      <View style={styles.container}>
        <Image source={{ uri: item.avatar }} style={styles.ImgAvatar} />

        <View style={styles.InfoCrs}>
          <View style={styles.Interests}>
            {arrayInterests.map((item) => (
              <View
                style={{
                  backgroundColor: item.color,
                  padding: 7,
                  marginHorizontal: 7,
                  marginVertical: 7,
                  borderRadius: 6,
                }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>{item.name}</Text>
              </View>
            ))}
          </View>

          <View style={styles.Info}>
            <Text style={{ fontSize: 28 }}>
              {item.name}, {item.age}
            </Text>
            <Text style={{ fontSize: 22, opacity: 0.7 }}>{item.address}</Text>

            <View style={styles.phoneNumber}>
              <IconFeather name="phone-call" size={20} />

              <Text style={{ fontSize: 18, opacity: 0.7, paddingHorizontal: 5 }}>{item.phone}</Text>
            </View>
          </View>

          <View style={styles.borderBot} />

          <ViewMoreText
            numberOfLines={2}
            renderViewMore={this.renderViewMore}
            renderViewLess={this.renderViewLess}
            textStyle={{ textAlign: 'center', marginHorizontal: 30, marginVertical: 15 }}>
            <Text style={{fontSize: 14}}>{item.description}</Text>
          </ViewMoreText>
        
          <View style={styles.AblumImages}>
            <Text style={{fontSize: 18}}>Album</Text>
            
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Interests: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Info: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  borderBot: {
    borderBottomColor: '#eaeaea',
    borderBottomWidth: 1,
    marginHorizontal: 20,
  },
  phoneNumber: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnShowMore: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  AblumImages: {
    margin: 10,
    
  },  
  ImgAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    position: 'absolute',
    zIndex: 2,
    top: Dimensions.get('window').height * 0.1,
    marginHorizontal: Dimensions.get('window').width * 0.4,
  },
  InfoCrs: {
    height: Dimensions.get('window').height * 0.7,
    borderRadius: 7,
    marginHorizontal: 15,
    marginTop: Dimensions.get('window').height * 0.15,
    paddingTop: Dimensions.get('window').height * 0.1,
    position: 'relative',
    borderWidth: 1,
    borderColor: 'gray',
  },
});

export default CrushDetail;
