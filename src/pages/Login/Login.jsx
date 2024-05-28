import React, { useState } from 'react';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/cadastro');
  };

  return (
   <></>
  );
}

export default Login;
