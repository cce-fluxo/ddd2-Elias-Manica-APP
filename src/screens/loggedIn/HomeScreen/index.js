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

import imagemDuvida from "../../../assets/imagemDuvida.png";
import estudoDeMateriaisMarinha from "../../../assets/estudoDeMateriaisMarinha.png";
import Rectangle24 from "../../../assets/Rectangle24.png";
import Rectangle25 from "../../../assets/Rectangle25.png";
import Rectangle26 from "../../../assets/Rectangle26.png";
import Rectangle27 from "../../../assets/Rectangle27.png";

const data = [
  {
    id: 1,
    title: "Item 1",
    nome: "jose",
    image: estudoDeMateriaisMarinha,
  },
  {
    id: 2,
    title: "Item 2",
    nome: "eliass",
    image: Rectangle24,
  },
  {
    id: 3,
    title: "Item 3",
    image: Rectangle25,
  },
  {
    id: 4,
    title: "Item 4",
    image: Rectangle26,
  },
  {
    id: 5,
    title: "Item 5",
    image: Rectangle27,
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
        renderItem={({ item }) => <ImagemProjeto source={item.image} />}
        keyExtractor={(item) => item.key}
        getItemCount={(data) => data.length}
        getItem={getItem}
        horizontal
      />
      <VirtualizedList
        data={data}
        initialNumToRender={4}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.key}
        getItemCount={(data) => data.length}
        getItem={getItem}
        horizontal
      />
      <VirtualizedList
        data={data}
        initialNumToRender={4}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.key}
        getItemCount={(data) => data.length}
        getItem={getItem}
        horizontal
      />
      <VirtualizedList
        data={data}
        initialNumToRender={4}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.key}
        getItemCount={(data) => data.length}
        getItem={getItem}
        horizontal
      />
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
