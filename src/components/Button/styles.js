import styled from "styled-components/native";

import {screenHeight, screenWidth} from "../../constants/dimensions";
import Colors from "../../constants/colors";

export const Container = styled.TouchableOpacity`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    margin-left: ${(props) => props.marginLeft}px;
    margin-top: ${(props) => props.marginTop}px;
    align-self: center;
    align-items: center;
    justify-content: center;
    background-color: ${Colors.fluxo};
    border-radius: 40px;
`;

export const ButtonText = styled.Text`
    font-size: 15px;
    text-align: center;
    color: #000;
`;