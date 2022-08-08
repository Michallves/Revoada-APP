import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export function Item({ item }) {
  return (
    <TouchableOpacity style={styles.item}>
      <View style={styles.left}>
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>{item.title}</Text>
        <View>
          <Text style={styles.hours}>{item.hours}</Text>
          <Text style={styles.localion}>{item.type}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <View style={styles.date}>
          <Text style={styles.day}>{item.day}</Text>
          <Text style={styles.month}>{item.month}</Text>
        </View>
        <TouchableOpacity>
          <MaterialIcons name="bookmark-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#363636',
    height: 120,
    flexDirection: 'row',
    marginTop: 15,
    marginHorizontal: 15,
    borderRadius: 9,
    borderWidth: 1,
    borderColor:'#202020',
  },
  left: {
    width: 120,
  },
  image:{
    flex: 1,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
  },
  right: {
    alignItems: 'center',
    width: 60,
    justifyContent: 'space-around',
  },
  date: {
    alignItems: 'center',
  },
  day: {
    color: 'white',
    fontSize: 30,
  },
  month: {
    color: 'white',
    fontSize: 12,
  },
  body: {
    flex: 1,
    margin: 10,
    justifyContent: 'space-around',
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
  hours: {
    color: 'white',
    fontSize: 16,
  },
  localion: {
    color: 'white',
    fontSize: 16,
  },
});
