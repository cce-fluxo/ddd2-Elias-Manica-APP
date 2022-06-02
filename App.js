import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Button from './src/components/Button';

import { screenHeight, screenWidth } from './src/constants/dimensions';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Fluxo 123</Text>
      <Button marginLeft={0} marginTop= {10} text = "Entrar" width={screenHeight * 0.20} height={53} onPress={() => console.log("entrar")} />
      <Button marginLeft={0} marginTop= {10} text = "Cadastrar" width={screenHeight * 0.37} height={53} onPress={() => console.log("cadastrar")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2701F',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
