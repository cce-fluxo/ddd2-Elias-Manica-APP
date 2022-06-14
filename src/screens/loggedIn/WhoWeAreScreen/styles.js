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

export const Caixa = styled.View`
  width: ${screenWidth * 0.34}px;
  height: ${screenHeight * 0.3}px;
`;
