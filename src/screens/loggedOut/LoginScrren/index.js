import React from 'react';
import { View } from 'react-native';

import { Container } from './styles';
import { screenHeight, screenWidth } from '../../../constants/dimensions';
import colors from '../../../constants/colors';

import Button from '../../../components/Button';
import Input from '../../../components/Input';

const LoginScrren = () => {
  return <Button marginLeft={0} marginTop= {10} text = "Entrar" width={screenHeight * 0.20} height={53} onPress={() => console.log("entrar")} />;
  <Input marginLeft={0} marginTop= {10} text = "E-mail" placeholder= "Digite seu E-mail" selectionColor={colors.preto}/>;
}

export default LoginScrren;