import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    height: 50,
    justifyContent: 'center',
    borderBottomWidth: 0.25,
    borderBottomColor: '#404040',
  },
  item: {
    backgroundColor: '#404040',
    padding: 60,
    marginTop: 15,
    marginHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
  },
  title: {
    flex: 1,
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  viewTextInput: {
    justifyContent: 'center',
    backgroundColor: 'blue',
    height: 30,
  },
  textInput: {
    backgroundColor: 'gray',
    borderRadius: 5,
    height: 30,
    marginHorizontal: 15,
  },
});

export default styles;
