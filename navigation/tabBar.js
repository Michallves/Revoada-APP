import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import DataProvider from './context';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/home';
import Search from '../pages/search';
import Account from '../pages/account';
import Saves from '../pages/saves';

const Tab = createBottomTabNavigator();

export default function () {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'home') {
            iconName = focused ? 'home-variant' : 'home-variant-outline';
          } else if (route.name === 'search') {
            iconName = focused ? 'magnify' : 'magnify';
          } else if (route.name === 'account') {
            iconName = focused ? 'account-circle' : 'account-circle-outline';
          }

          return (
            <MaterialCommunityIcons name={iconName} size={30} color={color} />
          );
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: 'black',
          borderTopColor: '#202020',
        },
        activeTintColor: '#FFF',
        showLabel: false,
      }}>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="search" component={Search} />
      <Tab.Screen name="account" component={Account} />
    </Tab.Navigator>
  );
}
