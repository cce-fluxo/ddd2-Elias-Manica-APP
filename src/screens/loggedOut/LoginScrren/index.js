import React from "react";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";

import {
  Container,
  Logo,
  SignUpButton,
  TextButton,
  TextButtonSenha,
} from "./styles";
import { screenHeight, screenWidth } from "../../../constants/dimensions";
import colors from "../../../constants/colors";

import Button from "../../../components/Button";
import Input from "../../../components/Input";

import fluxoLogo from "../../../assets/fluxoLogo.png";
import { AntDesign } from "@expo/vector-icons";
import routes from "../../../routes";

const LoginScrren = ({ navigation }) => {
  async function Requisicao() {
    try {
    } catch {}
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Logo source={fluxoLogo} />
        <Input
          marginLeft={0}
          marginTop={screenHeight * 0.015}
          text="E-mail"
          placeholder="Digite seu E-mail"
          selectionColor={colors.preto}
          keyboardType="email-address"
        />
        <Input
          marginLeft={0}
          marginTop={screenHeight * 0.01}
          text="Senha"
          placeholder="Digite sua senha"
          selectionColor={colors.preto}
          secureTextEntry
        />
        <SignUpButton
          onPress={() => {
            navigation.navigate(routes.ForgetPasswordScreen);
          }}
        >
          <TextButtonSenha>Esqueci minha senha</TextButtonSenha>
        </SignUpButton>
        <Button
          marginLeft={0}
          marginTop={screenHeight * 0.069}
          text="Entrar"
          width={screenHeight * 0.2}
          height={screenHeight * 0.06}
          onPress={() => console.log("entrar")}
        />
        <SignUpButton
          onPress={() => {
            navigation.navigate(routes.SingUpScreen);
          }}
        >
          <AntDesign name="user" size={24} color={colors.fluxo} />
          <TextButton>Cadastre-se</TextButton>
        </SignUpButton>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default LoginScrren;
