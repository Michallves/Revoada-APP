import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
      width: '100%',
    height: 100,
    flexDirection: "row",
    alignItems: 'center',
        borderBottomWidth: 0.20,
    borderBottomColor: '#202020',
  },
  title:{
    color: 'white',
    fontSize: 20,
  },
  imageAccount:{
    height: 60,
    width: 60,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#404040',
    marginLeft: 15,
    marginTop: 10,
  },
  nameAccount:{
    color: 'white',
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 10,
  },
  button:{
    widht: '100%',
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
        borderBottomWidth: 0.20,
    borderBottomColor: '#202020',
  },
});

export default styles;
