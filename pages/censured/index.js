import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Platform,
  TextInput,
  Pressable,
  StatusBar,
} from 'react-native';
import styles from './styles';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.header}>
        <View style={{ width: 100 }}></View>

        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text
            style={{
              color: 'white',
              fontSize: 17,
              fontWeight: 'bold',
            }}>
            Censura
          </Text>
        </View>
        <Pressable onPress={() => navigation.goBack()} style={{ width: 100, alignItems: 'flex-end' }}>
          <Text
            style={{
              color: 'white',
              fontSize: 17,
              marginRight: 15,
            }}>
            Cancelar
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
