import styled from "styled-components/native";

import { screenHeight, screenWidth } from "../../../constants/dimensions";
import colors from "../../../constants/colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
  align-items: center;
`;

export const ImagemDuvida = styled.Image`
  width: 200px;
  height: 200px;
  margin-top: 70px;
`;

export const Titulo = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: ${colors.fluxo};
  margin-top: 15px;
`;

export const TextToReformedPass = styled.Text`
  width: 300px;
  font-size: 15px;
  font-weight: 400;
  color: ${colors.fluxo};
  margin-top: 40px;
  text-align: center;
`;

export const LoginButton = styled.TouchableOpacity`
  flex-direction: row;
  align-self: center;
  justify-content: center;
  margin-top: 20px;
`;

export const TextLoginButton = styled.Text`
  font-weight: 400;
  font-style: italic;
  font-size: 16px;
  color: ${colors.fluxo};
  text-decoration: underline;
`;
