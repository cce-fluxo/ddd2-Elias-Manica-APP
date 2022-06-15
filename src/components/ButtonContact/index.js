import React from "react";

import { Container, TextButtonContact } from "./style";

const ButtonContact = ({
  marginLeft,
  marginTop,
  text,
  width,
  height,
  onPress,
}) => {
  return (
    <Container
      marginLeft={marginLeft}
      marginTop={marginTop}
      text={text}
      width={width}
      height={height}
      onPress={onPress}
    >
      <TextButtonContact>{text}</TextButtonContact>
    </Container>
  );
};

export default ButtonContact;
