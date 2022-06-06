import React from "react";
import { View } from "react-native";

import { Container, Title, InputText } from "./styles";

const Input = ({
  marginTop,
  marginLeft,
  text,
  placeholder,
  selectionColor,
}) => {
  return (
    <Container
      marginTop={marginTop}
      marginLeft={marginLeft}
      text={text}
      placeholder={placeholder}
    >
      <Title> {text} </Title>
      <InputText placeholder={placeholder} selectionColor={selectionColor} />
    </Container>
  );
};

export default Input;
