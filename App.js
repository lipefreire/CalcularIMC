import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {

  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')

  function calcularIMC() {
    alert('Peso: ' + peso + '\nAltura: ' + altura + '\n IMC: ' + peso / (altura * altura))
    setPeso('')
    setAltura('')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto1}>Peso: </Text>
      <TextInput style={styles.input} value={peso} onChangeText={(peso) => setPeso(peso)} keyboardType='number-pad'/>

      <Text style={styles.texto1}>Altura: </Text>
      <TextInput style={styles.input} value={altura} onChangeText={(altura) => setAltura(altura)} keyboardType=''/>

      <Button title={"Calcular"} onPress={calcularIMC}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto1: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 15
  },
  input: {
    width: '100%',
    padding: 15,
    backgroundColor: '#CCC',
    bordeRadius: 15,
    marginBottom: 15,
    textAlign: 'center'
  }
});

