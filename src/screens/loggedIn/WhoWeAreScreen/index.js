import React from "react";
import { View } from "react-native";

import {
  Container,
  TituloProjetos,
  ImagemDiretoria,
  TextToReformedPass,
  Caixa,
} from "./styles";

import diretoria from "../../../assets/diretoria.png";
import fluxoLogo from "../../../assets/fluxoLogo.png";

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
        Nossa Missão Promover acesso ao conhecimento, impactando o Brasil com
        projetos de engenharia.
      </TextToReformedPass>
      <TextToReformedPass>
        Nossa Visão Sermos a Empresa Júnior referência em entregar soluções
        aplicáveis, garantindo o sucesso dos nossos clientes através de projetos
        multidisciplinares.
      </TextToReformedPass>
      <TextToReformedPass>
        Nossos Valores Atitude de Dono, Sentimento de Time, Honestidade e
        Transparência, Humildade e Excedência, Foco no Cliente, Sede por
        Desenvolvimento e Orgulho de ser Fluxo.
      </TextToReformedPass>
    </Container>
  );
};

export default WhoWeAreScreen;
