import styled from "styled-components/native";

import { screenHeight, screenWidth } from "../../../constants/dimensions";
import colors from "../../../constants/colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
  align-items: center;
`;

export const Logo = styled.Image`
  width: ${screenWidth * 0.7}px;
  height: ${screenHeight * 0.26}px;
  margin-top: ${screenHeight * 0.1}px;
`;

export const SignUpButton = styled.TouchableOpacity`
  flex-direction: row;
  align-self: center;
  justify-content: center;
  margin-top: ${screenHeight * 0.01}px;
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
  margin-left: ${screenHeight * 0.17}px;
`;
