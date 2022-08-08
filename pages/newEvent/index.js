import React, { useState, useEffect, useRef, Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
  TextInput,
  Pressable,
  StatusBar,
  DatePickerIOS,
} from 'react-native';
import styles from './styles';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Modalize } from 'react-native-modalize';
import * as ImagePicker from 'expo-image-picker';
import firebase from '../../Config/firebase';
import db from '../../Config/database';
import storage from '../../Config/storage';
import uuid from 'react-native-uuid';
import { useData } from '../../navigation/context';
import DateTimePicker from '@react-native-community/datetimepicker';

export default ({ navigation }) => {
  const { user } = useData();

  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [localization, setLocalization] = useState('');

  const [category, setCategory] = useState('');
  const [privacy, setPrivacy] = useState('');
  const [censored, setCensored] = useState('');
  const [description, setDescription] = useState('');
  const [canceled, setCanceled] = useState(false);

  function addEvent() {
    db.collection('business')
      .doc(user.uid)
      .collection('items')
      .add({
        image,
        name,
        date: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        navigation.goBack();
      });
  }

  const pickGallery = async () => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const [dateStart, setDateStart] = useState(new Date());
  const [showDateStart, setShowDateStart] = useState(false);
  const [showTimeStart, setShowTimeStart] = useState(false);

  const onChangeDateStart = (event, selectedDate) => {
    setDateStart(selectedDate);
  };

  function showDatepickerStart() {
    setShowTimeStart(false);
    setShowDateEnd(false);
    setShowTimeEnd(false);
    setShowDateStart(!showDateStart);
  }

  function showTimepickerStart() {
    setShowDateStart(false);
    setShowDateEnd(false);
    setShowTimeEnd(false);
    setShowTimeStart(!showTimeStart);
  }

  const [dateEnd, setDateEnd] = useState(new Date());
  const [showDateEnd, setShowDateEnd] = useState(false);
  const [showTimeEnd, setShowTimeEnd] = useState(false)

    const onChangeDateEnd = (event, selectedDate) => {
    setDateEnd(selectedDate);
  };

  function showDatepickerEnd() {
    setShowTimeStart(false);
    setShowDateStart(false);
    setShowTimeEnd(false);
    setShowDateEnd(!showDateEnd);
  }

  function showTimepickerEnd() {
    setShowTimeStart(false);
    setShowDateStart(false);
    setShowDateEnd(false);
    setShowTimeEnd(!showTimeEnd);
  }

  const meses = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ];

  function adicionaZero(numero) {
    if (numero <= 9) return '0' + numero;
    else return numero;
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()} style={{ width: 100 }}>
          <Text
            style={{
              color: 'white',
              fontSize: 17,
              marginLeft: 15,
            }}>
            Cancelar
          </Text>
        </Pressable>

        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text
            style={{
              color: 'white',
              fontSize: 17,
              fontWeight: 'bold',
            }}>
            Novo Evento
          </Text>
        </View>
        <View style={{ width: 100, alignItems: 'flex-end' }}>
          <Text
            style={{
              color: '#007aff',
              fontSize: 17,
              fontWeight: 'bold',
              marginRight: 15,
            }}>
            Adicionar
          </Text>
        </View>
      </View>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={10}>
        <ScrollView keyboardShouldPersistTaps={true}>
          <Pressable style={styles.viewHeader} onPress={() => pickGallery()}>
            {image === '' ? (
              <View style={styles.viewIconImage}>
                <MaterialIcons
                  name="add-photo-alternate"
                  size={120}
                  color={'white'}
                />
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: 'white',
                    marginTop: 10,
                  }}>
                  Adicionar foto
                </Text>
              </View>
            ) : (
              <View style={styles.viewImage}>
                <Image source={{ uri: image }} style={styles.image} />
              </View>
            )}
          </Pressable>
          <View style={styles.viewInfos}>
          <Text style={styles.titleButton}>Nome do evento</Text>
            <TextInput
              value={name}
              onChangeText={() => setName()}
              placeholder={'Nome do evento'}
              placeholderTextColor={'#A7A6A6'}
              keyboardAppearance={'dark'}
              clearButtonMode={'while-editing'}
              style={styles.textInput}
            />
          </View>

          <Pressable
            onPress={() => navigation.navigate('')}
            style={styles.viewInfos}>
            <View>
              <Text style={styles.titleButton}>Localização</Text>
              {localization !== '' ? (
                <Text style={styles.textButton}>{localization}</Text>
              ) : (
                <></>
              )}
            </View>

            <MaterialIcons
              name="keyboard-arrow-right"
              size={30}
              color="#A7A6A6"
              style={{ marginRight: 10 }}
            />
          </Pressable>

          <View style={{ flex: 1 }}>
            <Pressable
              onPress={() => showDatepickerStart()}
              style={styles.viewInfos}>
              <Text style={styles.titleButton}>Começa</Text>
              <View style={{ flexDirection: 'row', marginRight: 10 }}>
                <Pressable
                  onPress={() => showDatepickerStart()}
                  style={styles.viewDate}>
                  <Text
                    style={{
                      color:
                        showDateStart === false 
                          ? 'white'
                          : '#007aff',
                      fontSize: 17,
                      marginHorizontal: 10,
                    }}>
                    {(
                      dateStart.getDate() +
                      ' de ' +
                      meses[dateStart.getMonth()] +
                      '. de ' +
                      dateStart.getFullYear()
                    ).toLocaleString()}
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => showTimepickerStart()}
                  style={styles.viewDate}>
                  <Text
                    style={{
                      color:
                        showTimeStart === false 
                          ? 'white'
                          : '#007aff',
                      fontSize: 17,
                      marginHorizontal: 10,
                    }}>
                    {(
                      adicionaZero(dateStart.getHours()) +
                      ':' +
                      adicionaZero(dateStart.getMinutes())
                    ).toLocaleString()}
                  </Text>
                </Pressable>
              </View>
            </Pressable>
            <View style={showDateStart === true || showTimeStart === true ? ({ borderBottomWidth: 0.2, borderColor: '#202020' }):({})}>
              {showDateStart && (
                <DateTimePicker
                  value={dateStart}
                  mode={'date'}
                  display={'spinner'}
                  themeVariant={'dark'}
                  locale="pt-BR"
                  onChange={onChangeDateStart}
                />
              )}
              {showTimeStart && (
                <DateTimePicker
                  value={dateStart}
                  mode={'time'}
                  display={'spinner'}
                  themeVariant={'dark'}
                  locale="pt-BR"
                  onChange={onChangeDateStart}
                />
              )}
            </View>
          </View>

          <View style={{ flex: 1 }}>
            <Pressable
              onPress={() => showDatepickerEnd()}
              style={styles.viewInfos}>
              <Text style={styles.titleButton}>Termina</Text>
              <View style={{ flexDirection: 'row', marginRight: 10 }}>
                <Pressable
                  onPress={() => showDatepickerEnd()}
                  style={styles.viewDate}>
                  <Text
                    style={{
                      color:
                        showDateEnd === false 
                          ? 'white'
                          : '#007aff',
                      fontSize: 17,
                      marginHorizontal: 10,
                    }}>
                    {(
                      dateEnd.getDate() +
                      ' de ' +
                      meses[dateEnd.getMonth()] +
                      '. de ' +
                      dateEnd.getFullYear()
                    ).toLocaleString()}
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => showTimepickerEnd()}
                  style={styles.viewDate}>
                  <Text
                    style={{
                      color:
                        showTimeEnd === false 
                          ? 'white'
                          : '#007aff',
                      fontSize: 17,
                      marginHorizontal: 10,
                    }}>
                    {(
                      adicionaZero(dateEnd.getHours()) +
                      ':' +
                      adicionaZero(dateEnd.getMinutes())
                    ).toLocaleString()}
                  </Text>
                </Pressable>
              </View>
            </Pressable>
            <View style={showDateEnd === true || showTimeEnd === true ? ({ borderBottomWidth: 0.2, borderColor: '#202020' }):({})}>
              {showDateEnd && (
                <DateTimePicker
                  value={dateEnd}
                  mode={'date'}
                  display={'spinner'}
                  themeVariant={'dark'}
                  locale="pt-BR"
                  onChange={onChangeDateEnd}
                />
              )}
              {showTimeEnd && (
                <DateTimePicker
                  value={dateEnd}
                  mode={'time'}
                  display={'spinner'}
                  themeVariant={'dark'}
                  locale="pt-BR"
                  onChange={onChangeDateEnd}
                />
              )}
            </View>
          </View>

          <Pressable
            onPress={() => navigation.navigate('')}
            style={styles.viewInfos}>
            <View>
              <Text style={styles.titleButton}>Categoria</Text>
              {category !== '' ? (
                <Text style={styles.textButton}>{category}</Text>
              ) : (
                <></>
              )}
            </View>

            <MaterialIcons
              name="keyboard-arrow-right"
              size={30}
              color="#A7A6A6"
              style={{ marginRight: 10 }}
            />
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('')}
            style={styles.viewInfos}>
            <View>
              <Text style={styles.titleButton}>Privacidade</Text>

              <Text style={styles.textButton}>
                {privacy !== '' ? privacy : 'Escolher privacidade'}
              </Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={30}
              color="#A7A6A6"
              style={{ marginRight: 10 }}
            />
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('censured')}
            style={styles.viewInfos}>
            <View>
              <Text style={styles.titleButton}>Censura</Text>
              {censored !== '' ? (
                <Text style={styles.textButton}>{censored}</Text>
              ) : (
                <></>
              )}
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={30}
              color="#A7A6A6"
              style={{ marginRight: 10 }}
            />
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('')}
            style={styles.viewInfos}>
            <View>
              <Text style={styles.titleButton}>Descrição</Text>
              <Text style={styles.textButton}>
                {description !== '' ? description : 'Adicione uma descrição'}
              </Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={30}
              color="#A7A6A6"
              style={{ marginRight: 10 }}
            />
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};
