import React, { useState, useRef } from "react"; /**useRef - Rota */
import style from "./Home.module.css";
import Gerais from "../../components/Publicacoes/Gerais";
import Maquinas from "../../components/Publicacoes/Maquinas";
import Produtos from "../../components/Publicacoes/Produtos";
import Servicos from "../../components/Publicacoes/Servicos";
import Sobre from "../../components/Sobre/Sobre"; 
import BotaoTopo from "../../components/BotaoTopo/BotaoTopo";

const Home = () => {
const sobreRef = useRef(null);
const handleScrollToSobre = () => {
  sobreRef.current.scrollIntoView({ behavior: 'smooth' });
}; 


  return (
    <>
<div>home</div>
    </>
  );
};

export default Home;
