import React from "react";
import { View } from "react-native";

import {
  Container,
  TituloProjetos,
  ImagemDiretoria,
  TextToReformedPass,
  Caixa,
  Negrito,
  Valores,
} from "./styles";

import colors from "../../../constants/colors";

import diretoria from "../../../assets/diretoria.png";
import { Entypo, FontAwesome, Fontisto } from "@expo/vector-icons";

const WhoWeAreScreen = () => {
  return (
    <Container>
      <TituloProjetos>
        A Fluxo Consultoria é uma empresa sem fins lucrativos, que realiza
        projetos em diversas áreas da Engenharia, além de projetos de
        Arquitetura. Abrangemos todos os cursos da Escola Politécnica, da Escola
        de Química e da Faculdade de Arquitetura e Urbanismo da UFRJ, uma das
        maiores instituições de ensino do país. Todo nosso trabalho tem a sua
        supervisão, bem como mentorias de grandes empresas do mercado.
      </TituloProjetos>
      <ImagemDiretoria source={diretoria} />
      <TextToReformedPass>
        <Entypo name="book" size={24} color={colors.preto} />
        <Negrito>Nossa Missão</Negrito>
      </TextToReformedPass>
      <Caixa>
        Promover acesso ao conhecimento, impactando o Brasil com projetos de
        engenharia.
      </Caixa>
      <TextToReformedPass>
        <Fontisto name="like" size={24} color={colors.preto} />
        <Negrito>Nossa Visão</Negrito>
      </TextToReformedPass>
      <Caixa>
        Sermos a Empresa Júnior referência em entregar soluções aplicáveis,
        garantindo o sucesso dos nossos clientes através de projetos
        multidisciplinares.
      </Caixa>
      <TextToReformedPass>
        <FontAwesome name="handshake-o" size={24} color={colors.preto} />
        <Negrito>Nossos Valores</Negrito>
      </TextToReformedPass>
      <Caixa>
        Nossos Valores Atitude de Dono, Sentimento de Time, Honestidade e
        Transparência, Humildade e Excedência, Foco no Cliente, Sede por
        Desenvolvimento e Orgulho de ser Fluxo.
      </Caixa>
    </Container>
  );
};

export default WhoWeAreScreen;
