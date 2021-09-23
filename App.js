import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  Button,
  FlatList,
} from 'react-native';
import api from './src/services/api';

// https://github.com/halleygondim/api_node_backend

export default function App() {
  function Elogio({data}) {
    return (
      <View style={{backgroundColor: '#999', margin: 3, flexDirection: 'row'}}>
        <Text>{data.name}</Text>
        <Button title="X" onPress={() => handleDelete(data.id)}></Button>
      </View>
    );
  }
  const [user, setUser] = useState({});
  const [token, setToken] = useState('');
  const [acao, setAcao] = useState('');
  const [list, setList] = useState([]);

  async function handleAutenticate() {
    try {
      const response = await api.post('/login', user);
      setToken(response.data);
      setAcao('Autenticação Concluída');
      Keyboard.dismiss();
    } catch (error) {
      console.log('ERRO' + error);
    }
  }

  async function handleListaTags() {
    try {
      const response = await api.get('/tags', {
        headers: {Authorization: `Bearer ${token}`},
      });
      setList(response.data);
      setAcao('Listou os dados');
    } catch (error) {
      console.log('ERRO' + error);
    }
  }

  function handleDeslogar() {
    api.defaults.headers.common = {
      Authorization: 'Bearer ' + null,
    };
    setToken('');
    setListagem([]);
    setAcao('Saiu da aplicação');
  }

  async function handleDelete() {
    try {
      const response = await api.delete('/tags/' + id, {
        headers: {Authorization: `Bearer ${token}`},
      });
    } catch (error) {
      console.log('ERRO' + error);
    }
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.texto}>Consumindo uma api node</Text>

        <Text>E-mail</Text>
        <TextInput
          value={user.email}
          onChangeText={email => setUser({...user, email})}
          placeholder="Digite o E-mail..."
        />
        <Text>Senha</Text>
        <TextInput
          value={user.password}
          onChangeText={password => setUser({...user, password})}
          placeholder="Digite a senha..."
          password={true}
        />
        <View>
          <Button title="Logar" onPress={handleAutenticate}></Button>
          <Button title="Listar" onPress={handleListaTags}></Button>
        </View>

      <View>
        <Text>Token</Text>
        <Text>{token}</Text>
        <Text>Ação</Text>
        <Text>{acao}</Text>
      </View>
      </View>

      <View>
        <FlatList
          data={list}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Elogio data={item} />}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#182522',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
