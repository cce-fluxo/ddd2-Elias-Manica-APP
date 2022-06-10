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
  width: ${screenWidth * 0.3}px;
  height: ${screenHeight * 0.25}px;
  margin-top: ${screenHeight * 0.09}px;
`;

export const TituloProjetos = styled.Text`
  font-weight: 400;
  font-style: italic;
  font-size: 50px;
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
