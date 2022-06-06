import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import Button from './src/components/Button';
import Input from './src/components/Input';

import { screenHeight, screenWidth } from './src/constants/dimensions';
import colors from './src/constants/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Fluxo 123</Text>
      <Button marginLeft={0} marginTop= {10} text = "Entrar" width={screenHeight * 0.20} height={53} onPress={() => console.log("entrar")} />
      <Button marginLeft={0} marginTop= {10} text = "Cadastrar" width={screenHeight * 0.37} height={53} onPress={() => console.log("cadastrar")} />
      <Input marginLeft={0} marginTop= {10} text = "E-mail" placeholder= "Digite seu E-mail" selectionColor={colors.preto}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FA7D21',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
