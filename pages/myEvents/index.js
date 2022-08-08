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
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
};
