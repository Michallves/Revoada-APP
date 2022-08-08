import React, { useState, useEffect, Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Image,
  ScrollView,
  Platform,
  TextInput,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import styles from './styles';
import { SearchBar } from 'react-native-elements';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Item } from '../../components/item';
import { useData } from '../../navigation/context';

export default ({ navigation }) => {
  const [search, setSearch] = useState(' ');
  const { DATA } = useData();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleHeader}>Eventos</Text>
      </View>
      <FlatList
        keyboardShouldPersistTaps={true}
        contentInsetAdjustmentBehavior="automatic"
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item item={item} />}
      />
    </SafeAreaView>
  );
};
