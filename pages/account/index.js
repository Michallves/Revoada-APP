import React, { useState, useEffect, Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import styles from './styles';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import firebase from '../../Config/firebase';

export default ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.header}>
    <View style={styles.imageAccount}>
    </View>
    
    <Text style={styles.nameAccount}>Michael Alves</Text>
    </View>
      <ScrollView>
       <TouchableOpacity
          onPress={() => navigation.navigate('')}
          style={styles.button}>
          <MaterialCommunityIcons
            name="account-circle-outline"
            size={30}
            color="white"
            style={{ marginLeft: 15 }}
          />
          <Text
            style={{ flex: 1, marginLeft: 10, color: 'white', fontSize: 15 }}>
            Conta
          </Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={30}
            color="#A7A6A6"
            style={{ marginRight: 15 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('myEvents')}
          style={styles.button}>
          <MaterialIcons
            name="event"
            size={30}
            color="white"
            style={{ marginLeft: 15 }}
          />
          <Text
            style={{ flex: 1, marginLeft: 10, color: 'white', fontSize: 15 }}>
            Meus Eventos
          </Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={30}
            color="#A7A6A6"
            style={{ marginRight: 15 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('saves')}
          style={styles.button}>
          <MaterialIcons
            name="bookmark-outline"
            size={30}
            color="white"
            style={{ marginLeft: 15 }}
          />
          <Text
            style={{ flex: 1, marginLeft: 10, color: 'white', fontSize: 15 }}>
            Eventos Salvos
          </Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={30}
            color="#A7A6A6"
            style={{ marginRight: 15 }}
          />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
