import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#182522',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    marginBottom: 20,
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    margin: 5,
    borderRadius: 7,
  },
  login: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  containerBotoes: {
    marginTop: 10,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  containerToken: {
    marginTop: 20,
    width: '90%',
    borderWidth: 0.5,
    borderColor: '#FFF',
    borderRadius: 7,
  },
  tituloToken: {
    textAlign: 'center',
    color: '#FFF',
    margin: 10,
  },
  conteudoToken: {
    color: '#FFF',
    paddingHorizontal: 10,
  },
  separador: {
    marginVertical: 8,
    borderBottomColor: '#FFF',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderWidth: 1,
  },
  containerListaElogios: {
    backgroundColor: '#182522',
  },
});

export default styles;
