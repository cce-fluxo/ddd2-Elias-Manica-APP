import React from "react";

import { Container, TitleContact, TextInputContact } from "./styles";

const InputContact = ({
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
      <TitleContact>{text}</TitleContact>
      <TextInputContact
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

export default InputContact;
