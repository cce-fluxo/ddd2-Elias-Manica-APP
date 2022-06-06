import React from "react";
import { View } from "react-native";

import { Container, ButtonText } from "./styles";

const Button = ({ marginLeft, marginTop, text, width, height, onPress }) => {
  return (
    <Container
      marginLeft={marginLeft}
      marginTop={marginTop}
      text={text}
      width={width}
      height={height}
      onPress={onPress}
    >
      <ButtonText> {text} </ButtonText>
    </Container>
  );
};

export default Button;
