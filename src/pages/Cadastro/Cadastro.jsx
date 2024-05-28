import React, { useState } from 'react';
import styles from './Cadastro.module.css';
import { useNavigate } from 'react-router-dom';


function SignupForm() {
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    email: '',
    cnpjCpf: '',
    senha: '',
    confirmarSenha: ''
  });

  const navigate = useNavigate();

  const handleLoginClick = () =>{
    navigate('/login')
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     console.log(form);
  };

  return (
    <div className={styles.containerLogin}>

   
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>Criar uma nova conta</h2>
        <hr className={styles.hrStyle} />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={form.nome}
            onChange={handleChange}
            className={styles.inputField}
          />
          <input
            type="text"
            name="telefone"
            placeholder="Telefone"
            value={form.telefone}
            onChange={handleChange}
            className={styles.inputField}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className={styles.inputField}
          />
          <input
            type="text"
            name="cnpjCpf"
            placeholder="CNPJ/CPF"
            value={form.cnpjCpf}
            onChange={handleChange}
            className={styles.inputField}
          />
          <input
            type="password"
            name="senha"
            placeholder="Senha"
            value={form.senha}
            onChange={handleChange}
            className={styles.inputField}
          />
          <input
            type="password"
            name="confirmarSenha"
            placeholder="Confirmar senha"
            value={form.confirmarSenha}
            onChange={handleChange}
            className={styles.inputField}
          />
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.submitButton}>Cadastrar</button>
          </div>
        </form>
        <div className={styles.loginLinkContainer}>
          <a className={styles.loginLink} > 
            Já possui conta? <span className={styles.loginAzul} onClick={handleLoginClick}>Faça login</span>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SignupForm;
