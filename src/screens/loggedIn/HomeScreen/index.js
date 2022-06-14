import React from "react";
import { VirtualizedList } from "react-native";

import {
  Container,
  ImagemProjeto,
  TituloProjetos,
  TextoDentro,
  ArmazenaFoto,
  ScrollView,
} from "./styles";

import aquafluxo from "../../../assets/aquafluxo.png";
import clinicamedica from "../../../assets/clinicamedica.png";
import fono from "../../../assets/fono.png";
import sistemaWEB from "../../../assets/sistemaWEB.png";
import terapia from "../../../assets/terapia.png";
import secador from "../../../assets/secador.png";
import fluencia from "../../../assets/fluencia.png";
import amendoim from "../../../assets/amendoim.png";
import pmoc from "../../../assets/pmoc.png";
import hut from "../../../assets/hut.png";
import baradao from "../../../assets/baradao.png";
import brits from "../../../assets/brits.png";
import cookie from "../../../assets/cookie.png";
import enxaguante from "../../../assets/enxaguante.png";
import guarabol from "../../../assets/guarabol.png";
import americanas from "../../../assets/americanas.png";
import clube from "../../../assets/clube.png";
import gabriel from "../../../assets/gabriel.png";
import istel from "../../../assets/istel.png";
import ufrj from "../../../assets/ufrj.png";
import janaiana from "../../../assets/janaiana.png";
import cacacores from "../../../assets/cacacores.png";
import rosi from "../../../assets/rosi.png";
import shirlei from "../../../assets/shirlei.png";
import roberto from "../../../assets/roberto.png";
import cafe from "../../../assets/cafe.png";
import colegio from "../../../assets/colegio.png";
import economapas from "../../../assets/economapas.png";
import moneti from "../../../assets/moneti.png";
import vespa from "../../../assets/vespa.png";

const HomeScreen = () => {
  return (
    <Container>
      <TituloProjetos>Máquinas e Equipamentos</TituloProjetos>
      <ScrollView horizontal>
        <ImagemProjeto source={amendoim} />
        <ImagemProjeto source={hut} />
        <ImagemProjeto source={pmoc} />
        <ImagemProjeto source={secador} />
        <ImagemProjeto source={fluencia} />
      </ScrollView>
      <TituloProjetos>Tecnologia e Automação</TituloProjetos>
      <ScrollView horizontal>
        <ImagemProjeto source={aquafluxo} />
        <ImagemProjeto source={clinicamedica} />
        <ImagemProjeto source={fono} />
        <ImagemProjeto source={sistemaWEB} />
        <ImagemProjeto source={terapia} />
      </ScrollView>
      <TituloProjetos>Engenharia Química e Alimentos</TituloProjetos>
      <ScrollView horizontal>
        <ImagemProjeto source={guarabol} />
        <ImagemProjeto source={enxaguante} />
        <ImagemProjeto source={cookie} />
        <ImagemProjeto source={brits} />
        <ImagemProjeto source={baradao} />
      </ScrollView>
      <TituloProjetos>Gestão e Otimização de Processos</TituloProjetos>
      <ScrollView horizontal>
        <ImagemProjeto source={americanas} />
        <ImagemProjeto source={clube} />
        <ImagemProjeto source={gabriel} />
        <ImagemProjeto source={istel} />
        <ImagemProjeto source={ufrj} />
      </ScrollView>
      <TituloProjetos>Arquitetura, Construção Civil e Energia</TituloProjetos>
      <ScrollView horizontal>
        <ImagemProjeto source={shirlei} />
        <ImagemProjeto source={rosi} />
        <ImagemProjeto source={cacacores} />
        <ImagemProjeto source={janaiana} />
        <ImagemProjeto source={roberto} />
      </ScrollView>
      <TituloProjetos>Gestão e Criação de Negócios</TituloProjetos>
      <ScrollView horizontal>
        <ImagemProjeto source={cafe} />
        <ImagemProjeto source={colegio} />
        <ImagemProjeto source={economapas} />
        <ImagemProjeto source={moneti} />
        <ImagemProjeto source={vespa} />
      </ScrollView>
    </Container>
  );
};

export default HomeScreen;
