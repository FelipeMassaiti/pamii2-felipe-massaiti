import React, { useState } from "react";
import {Image} from "react-native";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Alert 
} from "react-native";

export default function App() {

  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  function entrar() {
    Alert.alert("Login", "Botão entrar pressionado");
  }

  function criarConta() {
    Alert.alert("Conta", "Criar nova conta");
  }

  return (
    <View style={styles.container}>

      <Image source={require("../../assets/images/X-Logo.png")} style={{ width: 100, height: 100 }} />

      <TextInput
        style={styles.input}
        placeholder="Telefone, email ou usuário"
        value={usuario}
        onChangeText={setUsuario}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.botaoLogin} onPress={entrar}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={criarConta}>
        <Text style={styles.criarConta}>Criar conta</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  logo: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  botaoLogin: {
    width: '100%',
    height: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 20,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  criarConta: {
    color: '#007bff',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});