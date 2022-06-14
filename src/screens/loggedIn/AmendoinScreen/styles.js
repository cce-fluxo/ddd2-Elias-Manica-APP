import styled from "styled-components/native";

import { screenHeight, screenWidth } from "../../../constants/dimensions";
import colors from "../../../constants/colors";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${colors.background};
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
