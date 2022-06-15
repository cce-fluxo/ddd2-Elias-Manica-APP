import React from "react";

import {
  Container,
  TituloProjetos,
  Etapas,
  Contac,
  Negrito,
  TextoNormal,
} from "./styles";

import { screenHeight, screenWidth } from "../../../constants/dimensions";
import ButtonContact from "../../../components/ButtonContact";
import InputContact from "../../../components/InputContact";

import { FontAwesome, Ionicons } from "@expo/vector-icons";
import colors from "../../../constants/colors";

const ContactScreen = () => {
  return (
    <Container>
      <TituloProjetos>Etapas do Processo de Consultoria</TituloProjetos>
      <Etapas>
        <FontAwesome
          name="circle"
          size={9}
          color="black"
          style={{ marginTop: 7 }}
        />
        {/* nao sei fazer tópicos, to usando icones */}
        <Contac>
          <Negrito>Contato:</Negrito> fale conosco para solicitar o seu projeto;
        </Contac>
      </Etapas>
      <Etapas>
        <FontAwesome
          name="circle"
          size={9}
          color="black"
          style={{ marginTop: 7 }}
        />
        <Contac>
          <Negrito>Diagnóstico:</Negrito> ao conversar com você, vamos entender
          melhor o seu problema e apresentar uma proposta de solução
          personalizada;
        </Contac>
      </Etapas>
      <Etapas>
        <FontAwesome
          name="circle"
          size={9}
          color="black"
          style={{ marginTop: 7 }}
        />
        <Contac>
          <Negrito>Desenvolvimento:</Negrito> nossos consultores trabalham para
          executar o projeto, sempre validando com você;
        </Contac>
      </Etapas>
      <Etapas>
        <FontAwesome
          name="circle"
          size={9}
          color="black"
          style={{ marginTop: 7 }}
        />
        <Contac>
          <Negrito>Entrega da Solução:</Negrito> ao fim do projeto, fazemos as
          entregas acordadas e te orientamos em como prosseguir.
        </Contac>
      </Etapas>
      <Ionicons
        name="ellipsis-horizontal"
        size={30}
        color="#FA7D21"
        style={{ marginLeft: "auto", marginRight: "auto", marginBottom: -10 }}
      />
      <TituloProjetos>Entre em contato!</TituloProjetos>
      <InputContact
        marginLeft={0}
        marginTop={screenHeight * -0.001}
        text="Nome*"
        placeholder=""
        selectionColor={colors.preto}
      />
      <InputContact
        marginLeft={0}
        marginTop={screenHeight * 0.01}
        text="Email*"
        placeholder=""
        selectionColor={colors.preto}
      />
      <InputContact
        marginLeft={0}
        marginTop={screenHeight * 0.01}
        text="Celular*"
        placeholder=""
        selectionColor={colors.preto}
        keyboardType="phone-pad"
      />
      <InputContact
        marginLeft={0}
        marginTop={screenHeight * 0.01}
        text="Empresa"
        placeholder=""
        selectionColor={colors.preto}
      />
      <InputContact
        marginLeft={0}
        marginTop={screenHeight * 0.01}
        text="Qual a sua dúvida ou necessidade?*"
        placeholder=""
        selectionColor={colors.preto}
      />
      <ButtonContact
        marginLeft={0}
        marginTop={screenHeight * 0.03}
        text="Entrar em contato"
        width={screenHeight * 0.4}
        height={screenHeight * 0.06}
      />
      <Ionicons
        name="ellipsis-horizontal"
        size={30}
        color="#FA7D21"
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: -10,
          marginTop: 20,
        }}
      />
      <TituloProjetos>Contato por Telefone</TituloProjetos>
      <TextoNormal>(21) 96986-5927</TextoNormal>
      <Ionicons
        name="ellipsis-horizontal"
        size={30}
        color="#FA7D21"
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: -10,
          marginTop: 20,
        }}
      />
      <TituloProjetos>Conheça nossa sede!</TituloProjetos>
      <TextoNormal>
        Av. Athos da Silveira Ramos, 149, sala 13 – Cidade Universitária, Ilha
        do Fundão, Rio de Janeiro
      </TextoNormal>
    </Container>
  );
};

export default ContactScreen;
