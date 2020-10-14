import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 40,
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  textLogin: {
    color: 'black',
    fontSize: 20,
    marginBottom: 5,
    width: '100%',
    textAlign: 'left',
  },
  //Login
  //Email
  block: {
    width: '100%',
    backgroundColor: '#ffcdd5',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconEmail: {
    flex: 1,
    marginLeft: 10,
    color: 'gray',
  },
  inputEmail: {
    flex: 8,
  },
  //password
  iconLock: {
    flex: 1,
    marginLeft: 10,
    color: 'gray',
  },
  inputPassword: {
    flex: 8,
  },
  iconEye: {
    flex: 1,
    marginRight: 10,
  },
  viewButtonLogin: {
    width: '100%',
  },
  buttonLogin: {
    padding: 10,
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 7,
    borderColor: 'pink',
    backgroundColor: 'orange',
    color: 'white',
  },
  //Register
  //Name
  iconName: {
    flex: 1,
    marginLeft: 10,
    color: 'gray',
  },
  inputName: {
    flex: 8,
  },
  buttonRegister: {
    padding: 10,
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 7,
    borderColor: 'pink',
    backgroundColor: 'orange',
    color: 'white',
  },
  //Login with
  textLoginWith: {
    textAlign: 'center',
    flex: 2,
  },
  blockLoginWith: {
    backgroundColor: 'pink',
    flex: 8,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    borderColor: 'pink',
    marginTop: 20,
  },
  iconLogin: {
    borderWidth: 2,
    borderRadius: 50,
    padding: 5,
  },
});

export default styles;
