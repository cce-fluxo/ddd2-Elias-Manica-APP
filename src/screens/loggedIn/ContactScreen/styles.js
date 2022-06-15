import styled from "styled-components/native";

import { screenHeight, screenWidth } from "../../../constants/dimensions";
import colors from "../../../constants/colors";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${colors.fluxo};
`;

export const TituloProjetos = styled.Text`
  height: ${screenHeight * 0.04}px;
  font-weight: 900;
  font-size: 19px;
  line-height: 18px;
  margin-top: ${screenHeight * 0.04}px;
  margin-left: auto;
  margin-right: auto;
  color: ${colors.preto};
`;

export const Etapas = styled.View`
  width: 90%;
  margin-left: ${screenWidth * 0.04}px;
  flex-direction: row;
  margin-bottom: ${screenWidth * 0.04}px;
`;

export const Contac = styled.Text`
  font-size: 15px;
  margin-left: ${screenWidth * 0.01}px;
  text-align: justify;
`;

export const TextoNormal = styled.Text`
  width: 90%;
  font-size: 17px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const Negrito = styled.Text`
  font-weight: bold;
`;
