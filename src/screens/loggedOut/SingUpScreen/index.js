import React from 'react';
import { View } from 'react-native';

import { Container } from './styles';
import { screenHeight,screenWidth } from '../../../constants/dimensions';
import colors from '../../../constants/colors';

import Button from '../../../components/Button';
import Input from '../../../components/Input';

const SingUpScreen = () => {
  return <Button marginLeft={0} marginTop= {10} text = "Cadastrar" width={screenHeight * 0.37} height={53} onPress={() => console.log("cadastrar")} />;
}

export default SingUpScreen;