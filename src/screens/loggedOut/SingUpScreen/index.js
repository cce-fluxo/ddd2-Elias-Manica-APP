import React from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

import {
  Container,
  ImagemInicio,
  Titulo,
  LoginButton,
  TextLoginButton,
} from "./styles";
import { screenHeight, screenWidth } from "../../../constants/dimensions";
import colors from "../../../constants/colors";

import Button from "../../../components/Button";
import Input from "../../../components/Input";

import imagemCadastro from "../../../assets/imagemCadastro.png";
import routes from "../../../routes";

const SingUpScreen = ({ navigation }) => {
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
          marginTop={screenHeight * 0.02}
          text="Nome"
          placeholder="Digite seu nome"
          selectionColor={colors.preto}
          autoCapitalize="words"
        />
        <Input
          marginLeft={0}
          marginTop={screenHeight * 0.02}
          text="Email"
          placeholder="Digite seu email"
          selectionColor={colors.preto}
          keyboardType="email-address"
        />
        <Input
          marginLeft={0}
          marginTop={screenHeight * 0.02}
          text="Senha"
          placeholder="Digite sua senha"
          selectionColor={colors.preto}
          secureTextEntry
        />
        {/*  <Input
          marginLeft={0}
          marginTop={20}
          text="Confirmar senha"
          placeholder="Confirme sua senha"
          selectionColor={colors.preto}
  />  */}
        <Button
          marginLeft={0}
          marginTop={screenHeight * 0.035}
          text="Cadastrar"
          width={screenHeight * 0.2}
          height={screenHeight * 0.067}
          onPress={() => console.log("cadastrar")}
        />
        <LoginButton
          onPress={() => {
            navigation.navigate(routes.LoginScrren);
          }}
        >
          <TextLoginButton>Já possui cadastro? Clique aqui</TextLoginButton>
        </LoginButton>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default SingUpScreen;
