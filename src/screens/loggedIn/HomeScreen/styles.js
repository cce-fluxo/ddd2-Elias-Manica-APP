import styled from "styled-components/native";

import { screenHeight, screenWidth } from "../../../constants/dimensions";
import colors from "../../../constants/colors";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${colors.fluxo};
`;

export const ScrollView = styled.ScrollView`
  margin-left: 20px;
`;

export const ImagemProjeto = styled.Image`
  width: ${screenWidth * 0.8}px;
  height: ${screenHeight * 0.25}px;
  margin-top: ${screenHeight * 0.005}px;
  margin-right: ${screenWidth * 0.04}px;
  margin-bottom: ${screenHeight * 0.005}px;
`;

export const TituloProjetos = styled.Text`
  width: ${screenWidth * 0.8}px;
  height: ${screenHeight * 0.03}px;
  font-weight: 900;
  font-size: 15px;
  line-height: 18px;
  margin-top: ${screenHeight * 0.03}px;
  margin-left: ${screenWidth * 0.049}px;
  color: ${colors.background};
`;
