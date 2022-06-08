import React from "react";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";

import {
  Container,
  ImagemDuvida,
  Titulo,
  TextToReformedPass,
  LoginButton,
  TextLoginButton,
} from "./styles";

import { screenHeight, screenWidth } from "../../../constants/dimensions";
import colors from "../../../constants/colors";

import Button from "../../../components/Button";
import Input from "../../../components/Input";

import imagemDuvida from "../../../assets/imagemDuvida.png";
import fluxoLogo from "../../../assets/fluxoLogo.png";

import routes from "../../../routes";

const ForgetPasswordScreen = ({ navigation }) => {
  return (
    <Container>
      <ImagemDuvida source={imagemDuvida} />
      <Titulo> Esqueci minha senha </Titulo>
      <TextToReformedPass>
        {" "}
        Para redefinir sua senha, informe o e-mail cadastrado na sua conta e lhe
        enviaremos um link com as instruções{" "}
      </TextToReformedPass>
      <Input
        marginLeft={0}
        marginTop={30}
        text="E-mail cadastrado"
        placeholder="Digite seu e-mail cadastrado"
        selectionColor={colors.preto}
      />
      <Button
        marginLeft={0}
        marginTop={30}
        text="Enviar"
        width={screenHeight * 0.2}
        height={53}
        onPress={() => console.log("enviar")}
      />
      <LoginButton
        onPress={() => {
          navigation.navigate(routes.LoginScrren);
        }}
      >
        <TextLoginButton>Cancelar</TextLoginButton>
      </LoginButton>
    </Container>
  );
};

export default ForgetPasswordScreen;
