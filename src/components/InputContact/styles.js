import styled from "styled-components/native";

import { screenHeight, screenWidth } from "../../constants/dimensions";
import colors from "../../constants/colors";

export const Container = styled.View`
  width: ${screenWidth * 0.87}px;
  height: 90px;
  background-color: ${colors.fluxo};
  align-self: center;
  align-items: flex-start;
  margin-top: ${(props) => props.marginTop}px;
  margin-left: ${(props) => props.marginLeft}px;
`;

export const TitleContact = styled.Text`
  font-size: 18px;
  color: black;
  padding-left: 20px;
`;

export const TextInputContact = styled.TextInput`
  width: ${screenWidth * 0.87}px;
  height: 60px;
  background-color: #fff;
  border-radius: 40px;
  padding-left: 20px;
  border: 1px;
  border-color: ${colors.background};
`;
