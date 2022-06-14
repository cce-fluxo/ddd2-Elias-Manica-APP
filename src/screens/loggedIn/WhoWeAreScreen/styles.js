import styled from "styled-components/native";

import { screenHeight, screenWidth } from "../../../constants/dimensions";
import colors from "../../../constants/colors";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${colors.fluxo};
`;

export const TituloProjetos = styled.Text`
  width: 90%;
  font-weight: 900;
  font-size: 15px;
  line-height: 18px;
  margin-top: ${screenHeight * 0.03}px;
  margin-left: auto;
  margin-right: auto;
  color: ${colors.preto};
  text-align: center;
  display: flex;
`;

export const ImagemDiretoria = styled.Image`
  margin-top: ${screenHeight * 0.03}px;
  margin-left: auto;
  margin-right: auto;
`;

export const TextToReformedPass = styled.Text`
  font-size: 15px;
  font-weight: 400;
  color: ${colors.background};
  margin-top: ${screenHeight * 0.02}px;
  margin-left: auto;
  margin-right: auto;
`;

export const Negrito = styled.Text`
  font-weight: bold;
`;

export const Caixa = styled.Text`
  width: ${screenWidth * 0.8}px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;
