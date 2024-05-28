import React, { useState } from "react";
import style from "./Perfil.module.css";
import BotaoTopo from "../../components/BotaoTopo/BotaoTopo";
import { useNavigate } from 'react-router-dom';

const Perfil = () => {
  const navigate = useNavigate();

  const handleCriarClick = () =>{
    navigate('/criar')
  }
  
  return (
    <>
  
    </>
  );
};

export default Perfil;
