import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {Image, TouchableOpacity, Text, Alert} from 'react-native';

import MessageScreen from './src/screen/Message/MessageScreen';
import LoginScreen from './src/screen/Login/Login';
import RegisterScreen from './src/screen/Login/Register';

import CrushDetail from './src/screen/CrushDetail';

import Dots from './src/screen/Account/components/ThreeDots';
import AccountScreen from './src/screen/Account/AccountScreen';
import DescriptionUserScreen from './src/screen/Account/DescriptionUserScreen';
import EditNoti from './src/screen/Account/components/EditNoti';
import AddNoti from './src/screen/Account/components/AddNoti';
import FanScreen from './src/screen/Account/FanScreen';

import AnimatedScreen from './src/screen/Animated';
// import SoundScreen from './src/screen/Account/SoundScreen';

import Colors from './src/utils/Colors';
import IconTab from './src/components/IconBottomTabs';

export const Stack = createStackNavigator();

const TabMenu = createBottomTabNavigator(); //tao tab bottom

const TabLogin = createMaterialTopTabNavigator(); // tao chuyen tab top

const HomeStack = createStackNavigator();
const AccountStack = createStackNavigator();
const LoginStack = createStackNavigator();

function HomeStackScreen({navigation, route}) {
  if (route.state && route.state.routes) {
    for (let i = 0; i < route.state.routes.length; i++) {
      if (route.state.routes[i].name === "CrushDetail") {
        navigation.setOptions({tabBarVisible: false})
      }
      else {
        navigation.setOptions({tabBarVisible: true})
      }
    }
  }

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={MessageScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="DescriptionUser"
        component={DescriptionUserScreen}
      />
      <HomeStack.Screen
        name="CrushDetail"
        component={CrushDetail}
      />
    </HomeStack.Navigator>
  );
}

function DetailsScreen() {
  return (
    <AccountStack.Navigator
      tabBarOptions={{
        activeTintColor: '#444545',
        style: {backgroundColor: 'pink'},
      }}>
      <AccountStack.Screen
        name="Account"
        component={AccountScreen}
        options={{headerShown: false}}
      />
      <AccountStack.Screen
        name="DescriptionUser"
        component={DescriptionUserScreen}
        options={({navigation, route}) => ({
          headerTitle: 'Thông báo',
          headerRight: () => <Dots navigation={navigation} />,
        })}
      />
      <AccountStack.Screen
        name="EditNotiUser"
        component={EditNoti}
        options={{
          headerTitle: 'Chỉnh sửa',
          headerRight: (props) => (
            <TouchableOpacity style={{marginRight: 20, fontSize: 18}}>
              <Text>Lưu</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <AccountStack.Screen
        name="AddNotiUser"
        component={AddNoti}
        options={{
          headerTitle: 'Thông báo',
          headerRight: (props) => (
            <TouchableOpacity style={{marginRight: 20, fontSize: 18}}>
              <Text>Lưu</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <AccountStack.Screen
        name="FanScreen"
        component={FanScreen}
        options={{
          headerTitle: 'Xếp hạng FAN',
        }}
      />
      {/* <AccountStack.Screen
        name="SoundScreen"
        component={SoundScreen}
        options={{
          headerTitle: null,
          headerRight: (props) => (
            <TouchableOpacity 
              style={{
                marginRight: 20, 
                fontSize: 20, 
                backgroundColor: '#bababa', 
                borderRadius: 5,
                paddingHorizontal: 15,
                paddingVertical: 5,
              }}
            >
              <Text style={{color: 'white'}}>Xong</Text>
            </TouchableOpacity>
          ),
        }}
      /> */}
    </AccountStack.Navigator>
  );
}

function LoginStackScreen() {
  return (
    <TabLogin.Navigator
      tabBarOptions={{
        activeTintColor: '#444545',
        style: {backgroundColor: 'pink'},
      }}>
      <TabLogin.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          tabBarLabel: 'Đăng nhập',
        }}
      />
      <TabLogin.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          tabBarLabel: 'Đăng kí',
        }}
      />
    </TabLogin.Navigator>
  );
}

class AfterLoginStack extends React.Component {
  render() {
    return (
      <TabMenu.Navigator
        tabBarOptions={{
          activeTintColor: Colors.redMain,
          inactiveTintColor: Colors.blackMain,
        }}>
        <TabMenu.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Trang chủ',
            tabBarIcon: ({focused, horizontal, tintColor}) =>
              focused === false ? (
                <IconTab icon="home-outline" categoryIcon="Ionicons" />
              ) : (
                <IconTab icon="home" color={Colors.redMain} categoryIcon="Ionicons" />
              ),
          }}
        />
        <TabMenu.Screen
          name="Tài khoản"
          component={DetailsScreen}
          options={{
            tabBarLabel: 'Tài khoản',
            tabBarIcon: ({focused, horizontal, tintColor}) =>
              focused === false ? (
                <IconTab icon="account-outline" categoryIcon="MaterialCommunityIcons" />
              ) : (
                <IconTab icon="account" color={Colors.redMain} categoryIcon="MaterialCommunityIcons" />
              ),
          }}
        />
        <TabMenu.Screen
          name="Animated"
          component={AnimatedScreen}
          options={{
            tabBarLabel: 'Hiệu ứng',
            tabBarIcon: ({focused, horizontal, tintColor}) =>
              focused === false ? (
                <IconTab icon="animation-play-outline" categoryIcon="MaterialCommunityIcons" />
              ) : (
                <IconTab icon="animation-play-outline" color={Colors.redMain} categoryIcon="MaterialCommunityIcons" />
              ),
          }}
        />
      </TabMenu.Navigator>
    );
  }
}

export default class AppNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginStackScreen}
            options={{
              title: '',
              headerStyle: {
                height: 0,
              },
            }}
          />
          <Stack.Screen
            name="AfterLogin"
            component={AfterLoginStack}
            options={() => ({
              headerShown: false,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
