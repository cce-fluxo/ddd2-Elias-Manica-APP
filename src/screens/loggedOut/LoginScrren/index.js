import React from "react";
import { View } from "react-native";

import { Container, Logo, SignUpButton, TextButton } from "./styles";
import { screenHeight, screenWidth } from "../../../constants/dimensions";
import colors from "../../../constants/colors";

import Button from "../../../components/Button";
import Input from "../../../components/Input";

import fluxoLogo from "../../../assets/fluxoLogo.png"

const LoginScrren = () => {
  return (
    <Container>
      <Logo source = {fluxoLogo}/>
      <Input
        marginLeft={0}
        marginTop={15}
        text="E-mail"
        placeholder="Digite seu E-mail"
        selectionColor={colors.preto}
      />
      <Input
        marginLeft={0}
        marginTop={40}
        text="Senha"
        placeholder="Digite sua senha"
        selectionColor={colors.preto}
      />
      <Button
        marginLeft={0}
        marginTop={96}
        text="Entrar"
        width={screenHeight * 0.2}
        height={53}
        onPress={() => console.log("entrar")}
      />
      <SignUpButton>
        <TextButton>Cadastre-se</TextButton>
      </SignUpButton>
    </Container>
  );
};

export default LoginScrren;
