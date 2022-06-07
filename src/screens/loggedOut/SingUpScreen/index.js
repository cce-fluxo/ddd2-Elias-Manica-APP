import React from "react";
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";

import { Container, ImagemInicio, Titulo, LoginButton, TextLoginButton } from "./styles";
import { screenHeight, screenWidth } from "../../../constants/dimensions";
import colors from "../../../constants/colors";

import Button from "../../../components/Button";
import Input from "../../../components/Input";

import imagemCadastro from "../../../assets/imagemCadastro.png";

const SingUpScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container
        contentContainerStyle={{ alignItems: "center" }}
        showsVerticalScrollIndicator={false}
      >
        <ImagemInicio source={imagemCadastro} />
        <Titulo> Cadastrar </Titulo>
        <Input
          marginLeft={0}
          marginTop={10}
          text="Nome"
          placeholder="Digite seu nome"
          selectionColor={colors.preto}
        />
        <Input
          marginLeft={0}
          marginTop={20}
          text="Email"
          placeholder="Digite seu email"
          selectionColor={colors.preto}
        />
        <Input
          marginLeft={0}
          marginTop={20}
          text="Senha"
          placeholder="Digite sua senha"
          selectionColor={colors.preto}
        />
        <Input
          marginLeft={0}
          marginTop={20}
          text="Confirmar senha"
          placeholder="Confirme sua senha"
          selectionColor={colors.preto}
        />
        <Button
          marginLeft={0}
          marginTop={30}
          text="Cadastrar"
          width={screenHeight * 0.2}
          height={53}
          onPress={() => console.log("cadastrar")}
        />
        <LoginButton>
          <TextLoginButton>Já possui cadastro? Clique aqui</TextLoginButton>
        </LoginButton>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default SingUpScreen;
