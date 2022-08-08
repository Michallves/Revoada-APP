import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    height: 50,
    justifyContent: 'center',
          borderBottomWidth: 0.20,
    borderBottomColor: '#202020',
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
titleCategory:{
      color: 'white',
    fontSize: 23,
    fontWeight: "bold",
    marginLeft: 7.5,
    marginVertical: 15,
}
});

export default styles;
