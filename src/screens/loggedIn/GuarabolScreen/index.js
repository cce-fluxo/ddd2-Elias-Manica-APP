import React from "react";

import { Container, Imagem, Text, Topicos, Bold, CorFluxo } from "./styles";
import guarabol from "../../../assets/guarabol.png";

const GuarabolScreen = () => {
  return (
    <Container>
      <Imagem source={guarabol} />
      <Text>
        {"\n"} {"\n"}
        <Topicos>Entendendo a dor do cliente</Topicos> {"\n"} {"\n"} O cliente,
        Seu Fagundes, recém aposentado, buscou a Fluxo Consultoria porque desde
        mais jovem possui o sonho de criar a <Bold>própria marca</Bold>. Ele
        encontrou a possibilidade de desenvolver conosco um guaraná natural,
        onde, a partir dos lucros obtidos desse empreendimento, ele pudesse
        custear ONGs que auxiliassem jovens ligados ao esporte, principalmente
        com o futebol, enxergando uma oportunidade de alterar realidades. {"\n"}
        {"\n"}Assim sendo, ele entrou em contato e optou por nosso serviço de
        <CorFluxo> Estudo de Viabilidade e Desenvolvimento de Fórmula</CorFluxo>
        , uma vez que possuía uma ideia basal de como gostaria que sua bebida
        fosse. Nesse sentido, teríamos o desafio de desenvolver um guaraná
        natural que, à diferença dos que já existem no mercado, combinasse dois
        fatores: <Bold>sabor e preço acessível</Bold>. {"\n"}
        {"\n"}
        <Topicos>Solucionando o problema</Topicos> {"\n"}
        {"\n"}Inicialmente, a equipe do projeto levantou todas as possibilidades
        de ingredientes que poderiam ser utilizados e, somado a isso, procurou
        no mercado qual o diferencial que buscávamos na nossa bebida – uma vez
        que existem diversos tipos de guaranás naturais. Logo, ao final desta
        etapa definimos que era necessário desenvolver um{" "}
        <Bold>refresco de guaraná</Bold> e também um{" "}
        <Bold> guaraná concentrado</Bold> que utilizasse o mínimo de produtos
        sintéticos. {"\n"} {"\n"}Em seguida, após realizarmos o mapeamento de
        fornecedores e o estudo de interações, foi possível definir uma série de
        formulações teóricas que posteriormente seriam testadas na prática.
        Nesse ponto, é interessante ressaltar que a equipe passou também pelo
        desafio de testar as interações dos componentes e garantir que não
        houvesse uma ação indesejada. Isso porque nosso cliente, além de
        aposentado, é representante da organização que auxilia na prevenção de
        doenças renais: o instituto IBRA-Renal. {"\n"} {"\n"}Subsequente a etapa
        teórica, realizamos de forma remota os testes para podermos avaliar qual
        dos refrescos melhor atendia à demanda do cliente. Por isso, realizamos{" "}
        <Bold>mais de 30 testes</Bold> e, ao final, selecionamos os melhores{" "}
        <Bold>6 sabores </Bold> tanto para refresco quanto para guaraná
        concentrado. Após essa seleção, enviamos a bebida ao cliente para que
        recebêssemos feedbacks sobre as amostras.
        {"\n"}
        {"\n"}
        <Topicos> Resultados</Topicos>
        {"\n"}
        {"\n"}
        Foi possível definir quais eram as formulações favoritas do cliente e a
        partir disso, a equipe pôde realizar o processo de emissão da rotulagem
        nutricional das bebidas. Além disso, para garantir a implementação do
        sonho do cliente, pesquisamos o contato de possíveis produtoras de
        refrescos na cidade do Rio de Janeiro e, hoje, nosso cliente já está em
        processo de início de produção de seu produto.
      </Text>
    </Container>
  );
};

export default GuarabolScreen;
