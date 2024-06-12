import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [form, setForm] = useState({
    email: '',
    senha: '',
    lembrarMe: false // Novo estado para lembrar-me
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setForm({ ...form, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para lidar com a submissão do formulário
    console.log(form);
  };

  const handleRegisterClick = () => {
    navigate('/cadastro');
  };

  const handlePerfilrClick = () => {
    navigate('/perfil');
  };
  const handleCategoriaClick = (home) => {
    setCategoria(home);
  };

  return (
    <div className={styles.containerLogin}>
      <div className={`card ${styles.card}`}>
        <div className={`card-body ${styles.cardBody}`}>
          <h2 className={styles.formTitle}>Use uma conta para entrar.</h2>
          <hr className={styles.hrStyle} />
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className={`form-control ${styles.inputField}`}
            />
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              value={form.senha}
              onChange={handleChange}
              className={`form-control ${styles.inputField}`}
            />
            <div className="form-check mb-3">
              <input
                type="checkbox"
                id="lembrarMe"
                name="lembrarMe"
                checked={form.lembrarMe}
                onChange={handleChange}
                className="form-check-input"
              />
              <label className="form-check-label" htmlFor="lembrarMe">
                Lembrar-me
              </label>
            </div>
            <div className={styles.buttonContainer}>
              <button type="submit" onClick={handlePerfilrClick} className={`btn ${styles.submitButton}`}
              >
                Log in
              </button>
            </div>
          </form>
          <div className={styles.loginLinkContainer}>
            <a href="#" className={styles.loginLink}>
              <span>Esqueceu sua senha?</span>
            </a>
            <a href="#" className={styles.loginLink} onClick={handleRegisterClick}>
              <span>Cadastrar-se</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
