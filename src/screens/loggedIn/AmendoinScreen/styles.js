import styled from "styled-components/native";

import { screenHeight, screenWidth } from "../../../constants/dimensions";
import colors from "../../../constants/colors";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${colors.fluxo};
`;

export const TituloProjetos = styled.Text`
  width: 300px;
  height: 27px;
  font-weight: 900;
  font-size: 15px;
  line-height: 18px;
  margin-top: ${screenHeight * 0.04}px;
  margin-left: ${screenWidth * 0.04}px;
  color: ${colors.colors};
`;

export const Imagem = styled.Image`
  width: 100%;
  height: 245px;
`;

export const Text = styled.Text`
  width: 90%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  line-height: 18px;
  letter-spacing: -0.3px;
  color: ${colors.preto};
`;

export const Topicos = styled.Text`
  font-weight: bold;
  font-size: ${screenHeight * 0.021}px;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;
