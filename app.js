import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { auth } from './firebase';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [user, setUser] = useState(null);

  return (
    <View style={styles.container}>
      {user ? (
        <View style={styles.box}>
          <Text style={styles.textoLogado}>Logado como: {user.email}</Text>
          <Button 
            title="Sair (Logout)" 
            color="red"
            onPress={() => signOut(auth).then(() => setUser(null))} 
          />
        </View>
      ) : (
        <View style={styles.box}>
          <Text style={styles.titulo}>Autenticação Firebase</Text>

          <TextInput 
            placeholder="E-mail" 
            value={email} 
            onChangeText={setEmail}
            style={styles.input} 
          />
          <TextInput 
            placeholder="Senha" 
            secureTextEntry 
            value={senha} 
            onChangeText={setSenha}
            style={styles.input} 
          />

          <Button 
            title="Cadastrar" 
            onPress={() => 
              createUserWithEmailAndPassword(auth, email, senha)
                .then(res => { setUser(res.user); Alert.alert('Sucesso', 'Cadastrado!'); })
                .catch(err => Alert.alert('Erro', err.message))
            } 
          />

          <View style={styles.espacoBotao}>
            <Button 
              title="Entrar (Login)" 
              onPress={() => 
                signInWithEmailAndPassword(auth, email, senha)
                  .then(res => { setUser(res.user); Alert.alert('Sucesso', 'Logado!'); })
                  .catch(err => Alert.alert('Erro', err.message))
              } 
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'grey',
  },
  box: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  textoLogado: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 12,
    borderRadius: 5,
  },
  espacoBotao: {
    marginTop: 10,
  },
});