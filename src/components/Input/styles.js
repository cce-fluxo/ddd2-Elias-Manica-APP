import styled from "styled-components/native";

import {screenHeight, screenWidth} from "../../constants/dimensions";
import colors from "../../constants/colors";

export const Container = styled.View`
    width: ${screenWidth * 0.87}px;
    height: 72px;
    background-color: ${colors.background};
    align-self: center;
    align-items: flex-start;
    margin-top: ${props => props.marginTop}px;
    margin-left: ${props => props.marginLeft}px;
`;

export const Title = styled.Text`
    font-size: 18px;
    color: white;
    padding-left: 20px;
`;

export const InputText = styled.TextInput`
    width: ${screenWidth * 0.87}px;
    height: 60px;
    background-color: #fff;
    border-radius: 40px;
    padding-left: 20px;
`;