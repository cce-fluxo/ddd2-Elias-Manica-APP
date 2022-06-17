import React from "react";

import { Container, Title, InputText } from "./styles";

const Input = ({
  marginTop,
  marginLeft,
  text,
  placeholder,
  selectionColor,
  secureTextEntry,
  autoCapitalize,
  value,
  maxLength,
  keyboardType,
  onChangeText,
}) => {
  return (
    <Container
      marginTop={marginTop}
      marginLeft={marginLeft}
      text={text}
      placeholder={placeholder}
    >
      <Title> {text} </Title>
      <InputText
        placeholder={placeholder}
        selectionColor={selectionColor}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
        value={value}
        maxLength={maxLength}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
      />
    </Container>
  );
};

export default Input;
