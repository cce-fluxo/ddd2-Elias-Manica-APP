import styled from "styled-components/native";

import { screenHeight, screenWidth } from "../../../constants/dimensions";
import colors from "../../../constants/colors";

export const Container = styled.ScrollView`
    flex: 1;
    background-color: ${colors.background};
`;

export const ImagemInicio = styled.Image`
    width: 100px;
    height: 100px;
    margin-top: 70px;
`;

export const Titulo = styled.Text`
    font-size: 20px;
    font-weight: 500;
    color: ${colors.fluxo};
    margin-top: 15px;
`;

export const LoginButton = styled.TouchableOpacity`
    flex-direction: row;
    align-self: center;
    justify-content: center;
    margin-top: 20px;
`;

export const TextLoginButton = styled.Text`
    font-weight: 400;
    font-style: italic;
    font-size: 16px;
    color: ${colors.fluxo};
    text-decoration: underline;
`;