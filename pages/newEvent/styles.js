import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderBottomWidth: 0.2,
    borderColor: '#202020',
  },
  viewHeader: {
    height: 290,
    borderBottomWidth: 0.2,
    borderColor: '#202020',
  },
  viewIconImage: {
    widht: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewImage: {
    widht: '100%',
    height: '100%',
  },
  image: {
    widht: '100%',
    height: '100%',
  },
  viewInfos: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.2,
    borderColor: '#202020',
    height: 60,
    justifyContent: 'space-between',
  },
  textInput: {
    flex: 1,
    fontSize: 17,
    color: '#EEEEEE',
    height: 30,
    marginVertical: 10,
    marginLeft: 20,
  },
  titleButton: {
    color: 'white',
    fontSize: 18,
    marginLeft: 15,
  },
  textButton: {
    color: '#A7A6A6',
    fontSize: 16,
    marginLeft: 15,
  },
  textButtonDisabled: {
    color: '#A7A6A6',
    fontSize: 18,
    marginLeft: 15,
  },
  viewDate: {
    backgroundColor: '#363636',
    height: 35,
    borderRadius: 7,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textData: {
    color: 'white',
    fontSize: 17,
    marginHorizontal: 10,
  },
});

export default styles;
