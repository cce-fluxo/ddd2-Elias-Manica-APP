import styled from "styled-components/native";

import { screenHeight, screenWidth } from "../../../constants/dimensions";
import colors from "../../../constants/colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
  align-items: center;
`;

export const ImagemDuvida = styled.Image`
  width: ${screenWidth * 0.3}px;
  height: ${screenHeight * 0.25}px;
  margin-top: ${screenHeight * 0.09}px;
`;

export const Titulo = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: ${colors.fluxo};
  margin-top: ${screenHeight * 0.015}px;
`;

export const TextToReformedPass = styled.Text`
  width: 300px;
  font-size: 15px;
  font-weight: 400;
  color: ${colors.fluxo};
  margin-top: ${screenHeight * 0.02}px;
  text-align: center;
`;

export const LoginButton = styled.TouchableOpacity`
  flex-direction: row;
  align-self: center;
  justify-content: center;
  margin-top: ${screenHeight * 0.02}px;
`;

export const TextLoginButton = styled.Text`
  font-weight: 400;
  font-style: italic;
  font-size: 16px;
  color: ${colors.fluxo};
  text-decoration: underline;
`;
