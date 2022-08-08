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
} from 'react-native';
import styles from './styles';
import { SearchBar } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { Item } from '../../components/item';
import { useData } from '../../navigation/context';

export default ({ navigation }) => {
  const [search, setSearch] = useState('');
  const { DATA } = useData();

  useEffect(() => {
    this.input.focus();
  });

  useEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        // search bar options
      },
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <SearchBar
          placeholder="Buscar"
          onChangeText={setSearch}
          value={search}
          platform={Platform.OS === 'ios' ? 'ios' : 'android'}
          containerStyle={{
            backgroundColor: 'black',
            height: 37,
            marginHorizontal: 7,
          }}
          selectionColor={'white'}
          inputStyle={{ color: 'white' }}
          inputContainerStyle={{
            backgroundColor: Platform.OS === 'ios' ? '#252525' : 'transparent',
            height: 35,
          }}
          cancelButtonProps={{ color: 'white' }}
          cancelButtonTitle={'Cancelar'}
          onCancel={() => navigation.goBack()}
          ref={(input) => {
            this.input = input;
          }}
          showCancel={true}
          showLoading={false}
          cancelIcon={{ color: 'white' }}
          searchIcon={Platform.OS === 'ios' ? {} : { color: 'white' }}
          clearIcon={Platform.OS === 'ios' ? {} : { color: 'white' }}
        />
      </View>
      <FlatList
        keyboardShouldPersistTaps={true}
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item item={item} />}
      />
    </SafeAreaView>
  );
};
