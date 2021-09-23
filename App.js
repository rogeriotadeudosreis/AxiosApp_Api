import React, {useState} from 'react';
import {Text, View, TextInput, Keyboard, Button, FlatList} from 'react-native';
import styles from './src/assets/styles';
import api from './src/services/api';

// https://github.com/halleygondim/api_node_backend

export default function App() {
  function Elogio({data}) {
    return (
      <View style={styles.containerElogio}>
        <Text style={styles.elogio}>{data.name}</Text>
        <Button
          title="Del"
          color="red"
          onPress={() => handleDelete(data.id)}
        ></Button>
      </View>
    );
  }
  const [user, setUser] = useState({});
  const [token, setToken] = useState('');
  const [acao, setAcao] = useState('');
  const [list, setList] = useState([]);

  const Separador = () => <View style={styles.separador} />;

  async function handleAutenticate() {
    try {
      const response = await api.post('/login', user);
      setToken(response.data);
      setAcao('Autenticação Concluída');
      alert(acao);
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
    setList([]);
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

        <Text style={styles.login}>Login do Usuário</Text>
        <Separador />
        <TextInput
          style={styles.input}
          value={user.email}
          onChangeText={email => setUser({...user, email})}
          placeholder="Digite o E-mail..."
        />
        <TextInput
          style={styles.input}
          value={user.password}
          onChangeText={password => setUser({...user, password})}
          placeholder="Digite a senha..."
          password={true}
        />
        <View style={styles.containerBotoes}>
          <Button
            color="blue"
            title="Logar"
            onPress={handleAutenticate}></Button>
          <Button
            color="brown"
            title="Listar"
            onPress={handleListaTags}></Button>
          <Button
            color="red"
            title="Delete"
            onPress={handleDelete}></Button>
          <Button
            color="green"
            title="Logout"
            onPress={handleDeslogar}></Button>
        </View>

        <View style={styles.containerToken}>
          <Text style={styles.tituloToken}>( Token )</Text>
          <Text style={styles.conteudoToken}>{token}</Text>
        </View>
      </View>

      <View style={styles.containerListaElogios}>
        <FlatList
          data={list}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Elogio data={item} />}
        />
      </View>
    </>
  );
}
