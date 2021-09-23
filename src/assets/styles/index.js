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
    justifyContent: 'space-between',
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
  elogio: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  containerElogio: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    margin: 5,
    marginHorizontal: 20,
    borderRadius: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  botaoDelete: {
    color: 'red',
  },
});

export default styles;
