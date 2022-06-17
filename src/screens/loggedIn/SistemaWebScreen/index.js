import React from "react";

import {
  Container,
  Imagem,
  Text,
  Topicos,
  ImagemDoProjeto,
  Bold,
} from "./styles";
import sistemaWEB from "../../../assets/sistemaWEB.png";
import falciforme from "../../../assets/falciforme.png";

const SistemaWebScreen = () => {
  return (
    <Container>
      <Imagem source={sistemaWEB} />
      <Text>
        {"\n"} <Topicos>A dor da cliente</Topicos> {"\n"} {"\n"} A professora
        Márcia Alves da UFRJ vem, há alguns anos, pesquisando sobre interações
        medicamentosas usados para o tratamento de doenças falciformes e queria
        desenvolver uma <Bold>aplicação prática</Bold> da sua pesquisa. Assim,
        ela procurou a Fluxo para construirmos juntos um{" "}
        <Bold>
          {" "}
          Sistema Web que facilitasse a interação da sua pesquisa com pessoas
          interessadas.
        </Bold>{" "}
        {"\n"} {"\n"} <Topicos>O projeto </Topicos> {"\n"} {"\n"}O Sistema Web
        Interações foi um projeto para a faculdade de Odontologia da UFRJ,
        coordenado pela professora Márcia Alves, e que contou com a parceria da
        Faculdade de Farmácia da UFRJ, por meio da professora Luciana Serrão e
        dos alunos Paulo Martins e Fabia Michelle, alunos da graduação da
        farmácia e bolsistas do projeto. A professora Márcia coordena um projeto
        sobre doenças hematológicas e pensava na possibilidade de uma aplicação
        prática de sua pesquisa, com essa ideia em mente ela procurou a Fluxo
        Consultoria. Ela já tinha consigo uma planilha com todos os dados e
        informações da pesquisa que ela gostaria que fossem utilizados na
        plataforma. Então coube a Fluxo o trabalho de desenvolver uma identidade
        visual e a experiência com o usuário, além de conectar o Sistema Web a
        sua planilha de dados. Assim, um design desenvolveu a logo e junto com a
        cliente pensamos na melhor forma de exibir os dados e construir a
        identidade visual do site de acordo com os gostos da mesma. Ela nos
        contou como seria o SW dos seus sonhos, cores, imagem de fundo, menu,
        idiomas, todas as funcionalidades foram mapeadas e validadas.{"\n"}{" "}
        {"\n"}
        <Topicos>Os resultados</Topicos>
        {"\n"} {"\n"} Com isso chegamos no resultado abaixo. Dessa forma,
        realizamos o sonho da nossa cliente que ficou encantada com seu projeto.
        Recebendo como feedback que adorou ter essa experiência com uma empresa
        de alunos na UFRJ, tudo foi como o esperado, e que o último gerente foi
        perfeito em todos os detalhes. {"\n"}
      </Text>
      <ImagemDoProjeto source={falciforme} />
    </Container>
  );
};

export default SistemaWebScreen;
