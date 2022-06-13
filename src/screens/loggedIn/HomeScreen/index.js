import React from "react";
import { VirtualizedList } from "react-native";

import {
  Container,
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
import Rectangle28 from "../../../assets/Rectangle28.png";
import Rectangle29 from "../../../assets/Rectangle29.png";
import Rectangle30 from "../../../assets/Rectangle30.png";
import Rectangle31 from "../../../assets/Rectangle31.png";
import Rectangle32 from "../../../assets/Rectangle32.png";

// Muito import, até que parte o front fica responsável?

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

// criar duas datas? back?

const data2 = [
  {
    id: 6,
    title: "Item 6",
    nome: "jose",
    image: Rectangle28,
  },
  {
    id: 7,
    title: "Item 7",
    nome: "eliass",
    image: Rectangle29,
  },
  {
    id: 8,
    title: "Item 8",
    image: Rectangle30,
  },
  {
    id: 9,
    title: "Item 9",
    image: Rectangle31,
  },
  {
    id: 10,
    title: "Item 10",
    image: Rectangle32,
  },
];

const getItem = (data, index) => {
  return data[index];
};

const getItem2 = (data2, index) => {
  return data2[index];
};

const Item = ({ title }) => (
  <ArmazenaFoto>
    <TextoDentro>{title}</TextoDentro>
  </ArmazenaFoto>
);

const HomeScreen = () => {
  return (
    <Container>
      <TituloProjetos>Máquinas e Equipamentos</TituloProjetos>
      <VirtualizedList
        data={data}
        initialNumToRender={4}
        renderItem={({ item }) => <ImagemProjeto source={item.image} />}
        keyExtractor={(item) => item.key}
        getItemCount={(data) => data.length}
        getItem={getItem}
        horizontal
      />
      <TituloProjetos>Tecnologia e Automação</TituloProjetos>
      <VirtualizedList
        data={data2}
        initialNumToRender={4}
        renderItem={({ item }) => <ImagemProjeto source={item.image} />}
        keyExtractor={(item) => item.key}
        getItemCount={(data2) => data2.length}
        getItem={getItem2}
        horizontal
      />
      <TituloProjetos>Engenharia Química e Alimentos</TituloProjetos>
      <VirtualizedList
        data={data}
        initialNumToRender={4}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.key}
        getItemCount={(data) => data.length}
        getItem={getItem}
        horizontal
      />
      <TituloProjetos>Gestão e Otimização de Processos</TituloProjetos>
      <VirtualizedList
        data={data}
        initialNumToRender={4}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.key}
        getItemCount={(data) => data.length}
        getItem={getItem}
        horizontal
      />
      <TituloProjetos>Arquitetura, Construção Civil e Energia</TituloProjetos>
      <VirtualizedList
        data={data}
        initialNumToRender={4}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.key}
        getItemCount={(data) => data.length}
        getItem={getItem}
        horizontal
      />
      <TituloProjetos>Gestão e Criação de Negócios</TituloProjetos>
      <VirtualizedList
        data={data}
        initialNumToRender={4}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.key}
        getItemCount={(data) => data.length}
        getItem={getItem}
        horizontal
      />
    </Container>
  );
};

export default HomeScreen;
