import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export function Category({ item }) {
  return (
    <TouchableOpacity style={styles.item}>
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      />
        <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#363636',
    height: 100,
    flex: 1,
    marginBottom: 15,
    marginHorizontal: 7.5,
    borderRadius: 9,
        borderWidth: 1,
    borderColor:'#202020',
  },
  image: {
    flex: 1,
    borderRadius: 8,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: "bold",
    position: 'absolute',
    flex:1,
    paddingTop: 10,
    paddingLeft: 10,
    textShadowColor: 'black',
    textShadowOffset: 10,
    textShadowRadius: 10,
    shadowOpacity: 10,
    shadowOffset: 10,
    shadowRadius: 10,
  },
});
