import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  //khoi anh
  blockImage: {
    flex: 3,
  },
  // khoi fan
  blockFan: {
    flex: 4,
    borderBottomColor: '#D4D4D5',
    borderBottomWidth: 1,
  },
  fanTitle: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#D4D4D5',
    paddingHorizontal: 25,
    borderRadius: 3,
  },
  fanFollow: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  fan_follow: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  fanRank: {
    flex: 4,
    flexDirection: 'row',
  },
  fan_rank: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fan_rank_image: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginHorizontal: 2,
  },
  // khoi chuc nang
  blockFunc: {
    flex: 3,
    marginTop: 20,
  },
  func_changeDark: {
    flexDirection: 'row',
    marginHorizontal: 40,
    marginBottom: 20,
  },
  func_logout: {
    flexDirection: 'row',
    marginHorizontal: 40,
    marginBottom: 20,
  },
  func_deleteAC: {
    flexDirection: 'row',
    marginHorizontal: 40,
    marginBottom: 20,
  },
  func_text: {
    fontSize: 18,
    marginLeft: 10,
  },
  //style  danh sach FAN
  itemContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 15,
  },
  itemInfoFan: {
    flex: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImage: {
    width: (width * 15) / 100,
    height: (width * 15) / 100,
    borderRadius: (width * 10) / 100,
    marginRight: 20,
  },
  itemButtonFan: {
    flex: 4,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'gray',
    color: 'white',
    textAlign: 'center',
  },
});

export default styles;
