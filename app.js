import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Routes from './navigation/routes';

const Stack = createStackNavigator();

export default () => {
  return (
      <NavigationContainer>
        <StatusBar
          style={'light'}
          translucent={true}
          backgroundColor={'transt'}
        />
        <Routes />
      </NavigationContainer>
  );
};
