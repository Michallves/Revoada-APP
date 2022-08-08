import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import DataProvider from './context';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import Signin from '../pages/signin';
import Home from '../pages/home';
import Search from '../pages/search';
import Account from '../pages/account';
import MyEvents from '../pages/myEvents';
import NewEvent from '../pages/newEvent';
import Censured from '../pages/censured';
import Saves from '../pages/saves';
import Find from '../pages/find';

import TabBar from './tabBar';

const Stack = createStackNavigator();

export default ({ navigation }) => {
  return (
    <DataProvider>
      <Stack.Navigator
        initialRouteName={'tabBar'}
        screenOptions={{
          headerStyle: {
            backgroundColor: 'black',
            shadowColor: '#202020',
            shadowOpacity: 1,
            shadowOffset: {
              height: 0.50,
            },
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
          headerBlurEffect: 'light',
        }}>
        <Stack.Screen
          name="signin"
          component={Signin}
          options={{
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="tabBar"
          component={TabBar}
          options={{
            gestureEnabled: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="find"
          component={Find}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="myEvents"
          component={MyEvents}
          options={({ navigation }) => ({
            title: 'Meus Eventos',
            headerBackTitle: 'Voltar',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('newEvent')}
                style={{ marginRight: 10 }}>
                <MaterialIcons name="add" size={30} color="white" />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="newEvent"
          component={NewEvent}
           options={{
             gestureEnabled: false,
            headerShown: false,
          }}
        />
                <Stack.Screen
          name="censured"
          component={Censured}
           options={{
             gestureEnabled: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="saves"
          component={Saves}
          options={{
            title: 'Eventos Salvos',
          }}
        />
      </Stack.Navigator>
    </DataProvider>
  );
};
