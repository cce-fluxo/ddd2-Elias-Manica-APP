import styled from "styled-components/native";

import { screenHeight, screenWidth } from "../../../constants/dimensions";
import colors from "../../../constants/colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
  align-items: center;
`;

export const Logo = styled.Image`
  width: 225px;
  height: 225px;
  margin-top: 85px;
`;

export const SignUpButton = styled.TouchableOpacity`
  flex-direction: row;
  align-self: center;
  justify-content: center;
  margin-top: 20px;
`;

export const TextButton = styled.Text`
  font-weight: 400;
  font-style: italic;
  font-size: 16px;
  color: ${colors.fluxo};
  text-decoration: underline;
`;

export const TextButtonSenha = styled.Text`
  font-weight: 400;
  font-style: italic;
  font-size: 16px;
  color: ${colors.fluxo};
  text-decoration: underline;
  margin-left: 140px;
`;
