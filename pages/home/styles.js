import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    backgroundColor: 'black',
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
        borderBottomWidth: 0.20,
    borderBottomColor: '#202020',
  },
  titleHeader: {
    color: 'white',
    fontSize: 32,
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
