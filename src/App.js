import React from "react";
import "./styles.css";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Cabeçalho from "../src/fotos/download.jpg";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 1.5vw;
    padding:0;
    background-color: orangered;
    color: black;
  }`;

const P = styled.p`
  display: flex;
  margin-left: -87%;
  background-color: transparent;
  margin-top: 25%;
  width: 25%;
  height: 10%;
  font-size: 1.5vw;
  font-weight: bold;
`;
const Buttom = styled.div`
  display: flex;
  height: 15vh;
  width: 30vw;
  margin-top: 60%;
  margin-left: -170%;
  background: #b9dfff;
  color: black;
  border: 1px solid #eee;
  border-radius: 20px;
  box-shadow: 2.5px 2.5px 2.5px #eee;
  text-shadow: none;
`;
const H1 = styled.h1`
  width: 50vw;
  font-size: 5vw;
`;
const ImgCabeçalho = styled.img`
  position: absolute;
  margin-top: 0%;
  border-radius: 10%;
  width: 30%;
  margin-left: 40%;
`;

export default function Portifolio() {
  return (
    <div className="caixa-geral">
      <GlobalStyle />
      <H1>Blog da Camila</H1>
      <ImgCabeçalho src={Cabeçalho} alt="" />
      <a href="https://h8crv5.csb.app/">
        <Buttom className="botão"></Buttom>
      </a>
      <P>Tenha acesso ao meu conteúdo!</P>
    </div>
  );
}
