import styled from "styled-components/native";

import { screenHeight, screenWidth } from "../../../constants/dimensions";
import colors from "../../../constants/colors";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${colors.background};
`;

export const ScrollProject = styled.VirtualizedList`
  background-color: "#f9c2ff";
  height: 150;
  justify-content: "center";
`;

export const ImagemProjeto = styled.Image`
  width: ${screenWidth * 0.6}px;
  height: ${screenHeight * 0.25}px;
  margin-top: ${screenHeight * 0.005}px;
  margin-right: ${screenWidth * 0.04}px;
  margin-left: ${screenWidth * 0.04}px;
`;

export const TituloProjetos = styled.Text`
  width: 300px;
  height: 27px;
  font-weight: 900;
  font-size: 15px;
  line-height: 18px;
  margin-top: ${screenHeight * 0.04}px;
  margin-left: ${screenWidth * 0.04}px;
  color: ${colors.fluxo};
`;

export const ArmazenaFoto = styled.View`
  background-color: pink;
  height: 150px;
  justify-content: center;
  margin: 8px 16px;
  padding: 20px;
`;

export const TextoDentro = styled.Text`
  font-size: 50px;
`;
