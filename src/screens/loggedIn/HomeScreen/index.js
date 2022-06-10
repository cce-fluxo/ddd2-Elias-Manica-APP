import React from "react";
import {
  SafeAreaView,
  View,
  VirtualizedList,
  StyleSheet,
  Text,
  StatusBar,
  ScrollView,
  Image,
} from "react-native";

import {
  Container,
  ScrollProject,
  ImagemProjeto,
  TituloProjetos,
  TextoDentro,
  ArmazenaFoto,
} from "./styles";

import { screenHeight, screenWidth } from "../../../constants/dimensions";
import colors from "../../../constants/colors";

import Button from "../../../components/Button";
import Input from "../../../components/Input";

import fluxoLogo from "../../../assets/fluxoLogo.png";

const data = [
  {
    id: 1,
    title: "Item 1",
  },
  {
    id: 2,
    title: "Item 2",
  },
  {
    id: 3,
    title: "Item 3",
  },
  {
    id: 4,
    title: "Item 4",
  },
  {
    id: 5,
    title: "Item 5",
  },
];

const getItem = (data, index) => {
  return data[index];
};

const Item = ({ title }) => (
  <ArmazenaFoto>
    <TextoDentro>{title}</TextoDentro>
  </ArmazenaFoto>
);

const HomeScreen = () => {
  return (
    <Container>
      <TituloProjetos>eliass</TituloProjetos>
      <VirtualizedList
        data={data}
        initialNumToRender={4}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.key}
        getItemCount={(data) => data.length}
        getItem={getItem}
        horizontal
      />
      <TituloProjetos>ELIAS2</TituloProjetos>
    </Container>
  );
};

export default HomeScreen;
