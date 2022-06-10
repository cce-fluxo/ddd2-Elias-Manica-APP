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

const DATA = [];

const getItem = (data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: `${index + 1}`,
});

const getItemCount = () => 10;

// quantidade de itens

const Item = ({ title }) => (
  <ArmazenaFoto>
    <TextoDentro>{title}</TextoDentro>
  </ArmazenaFoto>
);

const HomeScreen = () => {
  return (
    <Container>
      <TituloProjetos>elias</TituloProjetos>
      <VirtualizedList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        getItemCount={getItemCount}
        getItem={getItem}
        horizontal
      />
      <TituloProjetos>ELIAS2</TituloProjetos>
      <VirtualizedList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        getItemCount={getItemCount}
        getItem={getItem}
        horizontal
      />
      <TituloProjetos>Elias3</TituloProjetos>
      <VirtualizedList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        getItemCount={getItemCount}
        getItem={getItem}
        horizontal
      />
      <VirtualizedList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        getItemCount={getItemCount}
        getItem={getItem}
        horizontal
      />
      <VirtualizedList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        getItemCount={getItemCount}
        getItem={getItem}
        horizontal
      />
      <VirtualizedList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        getItemCount={getItemCount}
        getItem={getItem}
        horizontal
      />
    </Container>
  );
};

export default HomeScreen;
