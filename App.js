import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import Button from './src/components/Button';
import Input from './src/components/Input';

import { screenHeight, screenWidth } from './src/constants/dimensions';
import colors from './src/constants/colors';

import LoginScrren from './src/screens/loggedOut/LoginScrren';
import SingUpScreen from './src/screens/loggedOut/SingUpScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <SingUpScreen />
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
