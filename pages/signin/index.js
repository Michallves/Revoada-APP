import React, { useState, useEffect, Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import firebase from '../../Config/firebase';

export default ({ navigation }) => {


  return (
    <SafeAreaView style={styles.container}>
    <MaterialIcons name="event-note" size={150} color="white" />
      <TouchableOpacity onPress={() => navigation.navigate('home')} style={styles.buttonFacebook}>
      <Text style={styles.title}>
      Entrar
      </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
