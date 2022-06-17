import React from "react";

import {
  Container,
  ImagemProjeto,
  TituloProjetos,
  ScrollView,
  TouchableHighlight,
} from "./styles";

import routes from "../../../routes";

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

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <TituloProjetos>Máquinas e Equipamentos</TituloProjetos>
      <ScrollView horizontal>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => {
            navigation.navigate(routes.AmendoinScreen);
          }}
        >
          <ImagemProjeto source={amendoim} />
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert("Pressed!")}
        >
          <ImagemProjeto source={hut} />
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert("Pressed!")}
        >
          <ImagemProjeto source={pmoc} />
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert("Pressed!")}
        >
          <ImagemProjeto source={secador} />
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert("Pressed!")}
        >
          <ImagemProjeto source={fluencia} />
        </TouchableHighlight>
      </ScrollView>
      <TituloProjetos>Tecnologia e Automação</TituloProjetos>
      <ScrollView horizontal>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => {
            navigation.navigate(routes.SistemaWebScreen);
          }}
        >
          <ImagemProjeto source={sistemaWEB} />
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert("Pressed!")}
        >
          <ImagemProjeto source={clinicamedica} />
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert("Pressed!")}
        >
          <ImagemProjeto source={fono} />
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert("Pressed!")}
        >
          <ImagemProjeto source={aquafluxo} />
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert("Pressed!")}
        >
          <ImagemProjeto source={terapia} />
        </TouchableHighlight>
      </ScrollView>
      <TituloProjetos>Engenharia Química e Alimentos</TituloProjetos>
      <ScrollView horizontal>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => {
            navigation.navigate(routes.GuarabolScreen);
          }}
        >
          <ImagemProjeto source={guarabol} />
        </TouchableHighlight>
        <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD">
          <ImagemProjeto source={enxaguante} />
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert("Pressed!")}
        >
          <ImagemProjeto source={cookie} />
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert("Pressed!")}
        >
          <ImagemProjeto source={brits} />
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert("Pressed!")}
        >
          <ImagemProjeto source={baradao} />
        </TouchableHighlight>
      </ScrollView>
      <TituloProjetos>Gestão e Otimização de Processos</TituloProjetos>
      <ScrollView horizontal>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert("Pressed!")}
        >
          <ImagemProjeto source={americanas} />
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert("Pressed!")}
        >
          <ImagemProjeto source={clube} />
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert("Pressed!")}
        >
          <ImagemProjeto source={gabriel} />
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert("Pressed!")}
        >
          <ImagemProjeto source={istel} />
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert("Pressed!")}
        >
          <ImagemProjeto source={ufrj} />
        </TouchableHighlight>
      </ScrollView>
      <TituloProjetos>Arquitetura, Construção Civil e Energia</TituloProjetos>
      <ScrollView horizontal>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert("Pressed!")}
        >
          <ImagemProjeto source={shirlei} />
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert("Pressed!")}
        >
          <ImagemProjeto source={rosi} />
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert("Pressed!")}
        >
          <ImagemProjeto source={cacacores} />
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert("Pressed!")}
        >
          <ImagemProjeto source={janaiana} />
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert("Pressed!")}
        >
          <ImagemProjeto source={roberto} />
        </TouchableHighlight>
      </ScrollView>
      <TituloProjetos>Gestão e Criação de Negócios</TituloProjetos>
      <ScrollView horizontal>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert("Pressed!")}
        >
          <ImagemProjeto source={cafe} />
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert("Pressed!")}
        >
          <ImagemProjeto source={colegio} />
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert("Pressed!")}
        >
          <ImagemProjeto source={economapas} />
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert("Pressed!")}
        >
          <ImagemProjeto source={moneti} />
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert("Pressed!")}
        >
          <ImagemProjeto source={vespa} />
        </TouchableHighlight>
      </ScrollView>
    </Container>
  );
};

export default HomeScreen;
