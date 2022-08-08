import React, { useState, useEffect, Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Pressable,
  SafeAreaView,
  Image,
  ScrollView,
  Platform,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import { SearchBar } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Category } from '../../components/category';
import { useData } from '../../navigation/context';

export default ({ navigation }) => {
  const [search, setSearch] = useState('');
  const { categories } = useData();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => navigation.navigate('find')}
          style={styles.textInput}>
          <SearchBar
            placeholder="Buscar"
            editable={false}
            pointerEvents="none"
            platform={Platform.OS === 'ios' ? 'ios' : 'android'}
            containerStyle={{
              backgroundColor: 'black',
              height: 37,
              marginHorizontal: 7,
            }}
            selectionColor={'white'}
            inputStyle={{ color: 'white' }}
            inputContainerStyle={{
              backgroundColor:
                Platform.OS === 'ios' ? '#252525' : 'transparent',
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
        </Pressable>
      </View>

      <FlatList
        keyboardShouldPersistTaps={true}
        data={categories}
        numColumns={2}
        ListHeaderComponent={() => (
          <Text style={styles.titleCategory}>Categorias</Text>
        )}
        contentContainerStyle={{marginHorizontal: 7.5}}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Category item={item} />}
      />
    </SafeAreaView>
  );
};
