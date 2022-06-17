import React from "react";
import { View } from "react-native";

import { Container, Imagem, Text, Bold, Topicos } from "./styles";
import amendoim from "../../../assets/amendoim.png";

const AmendoinScreen = () => {
  return (
    <Container>
      <Imagem source={amendoim} />
      <Text>
        {"\n"} {"\n"}
        <Topicos>Entendendo a dor da cliente</Topicos> {"\n"} {"\n"} A cliente
        Maria Eduarda Barros sempre gostou de cozinhar receitas com amendoim,
        porém, manusear esse alimento dá certo trabalho, por conta das etapas do
        descascamento. Com essa percepção, ela teve a ideia de desenvolver um
        equipamento para mercado consumidor das Classes Média e Baixa para
        facilitar a vida de pequenos empreendedores e consumidores domésticos.
        {"\n"} {"\n"}
        Em virtude disso, ela entrou em contato com a Fluxo para fazer um
        projeto personalizado de desenvolvimento de equipamento com as
        características escolhidas.
        {"\n"} {"\n"}
        <Topicos>Entregando a Solução</Topicos>
        {"\n"} {"\n"}
        Levando essa ideia pra frente, a Fluxo Consultoria
        <Bold> desenvolveu o projeto</Bold> desse equipamento para descascar o
        amendoim. {"\n"} {"\n"}Ao final, foi entregue; além dos desenhos
        técnicos e análises computacionais,{" "}
        <Bold>manuais de fabricação e de montagem </Bold>
        para o maior entendimento do projeto e uma planilha com informações de
        mercado e alternativas de compra de cada peça, levando em conta custo,
        localização e disponibilidade.
        {"\n"} {"\n"}
        <Topicos>Resultados</Topicos>
        {"\n"} {"\n"}
        Ao final do projeto, Maria ficou muito satisfeita com as entregas e com
        o atendimento, tecendo elogios como “Só tenho elogios, de verdade. Foi o
        primeiro projeto. Ouvi muitos ‘nãos’ de outras empresas, mas a Fluxo
        sempre foi aberta, sempre esteve disposta a ajudar” e “Estou realizando
        um sonho, graças a Fluxo.”
      </Text>
    </Container>
  );
};

export default AmendoinScreen;
