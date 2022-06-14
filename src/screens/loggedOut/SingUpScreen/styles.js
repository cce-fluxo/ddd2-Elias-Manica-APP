import styled from "styled-components/native";

import { screenHeight, screenWidth } from "../../../constants/dimensions";
import colors from "../../../constants/colors";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${colors.background};
`;

export const ImagemInicio = styled.Image`
  width: ${screenWidth * 0.35}px;
  height: ${screenHeight * 0.16}px;
  margin-top: ${screenHeight * 0.09}px;
`;

export const Titulo = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: ${colors.fluxo};
  margin-top: ${screenHeight * 0.02}px;
`;

export const LoginButton = styled.TouchableOpacity`
  flex-direction: row;
  align-self: center;
  justify-content: center;
  margin-top: ${screenHeight * 0.023}px;
`;

export const TextLoginButton = styled.Text`
  font-weight: 400;
  font-style: italic;
  font-size: 16px;
  color: ${colors.fluxo};
  text-decoration: underline;
`;
