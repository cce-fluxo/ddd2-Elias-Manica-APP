import styled from "styled-components/native";

import { screenHeight, screenWidth } from "../../../constants/dimensions";
import colors from "../../../constants/colors";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${colors.background};
  align-items: center;
`;

export const ScrollProject = styled.VirtualizedList`
  background-color: "#f9c2ff";
  height: 150;
  justify-content: "center";
`;
