import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Notificacao from '../../components/Notificacao/Notificacao'; // Importe o componente de notificação
import styles from './Login.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [form, setForm] = useState({
    email: '',
    senha: '',
    lembrarMe: false // Novo estado para lembrar-me
  });

  const [notificacao, setNotificacao] = useState(null); // Estado de notificação

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

    // Simulando uma resposta de sucesso (descomente para testar):
     setNotificacao({ tipo: 'sucesso', mensagem: 'Login realizado com sucesso!' });

    // Simulando uma resposta de erro (descomente para testar):
    //setNotificacao({ tipo: 'erro', mensagem: 'Email ou senha incorretos. Por favor, tente novamente.' });

    setTimeout(() => {
      setNotificacao(null); // Limpa a notificação após um período de tempo
    }, 5000); // Tempo em milissegundos (3 segundos neste exemplo)

    // Redireciona para o perfil após 3 segundos (para visualizar a notificação)
    setTimeout(() => {
      navigate('/perfil');
    }, 2000);
  };

  const handleRegisterClick = () => {
    navigate('/cadastro');
  };

  return (
    <div className={styles.containerLogin}>
      <div className={`card ${styles.card}`}>
        <div className={`card-body ${styles.cardBody}`}>
          <h2 className={styles.formTitle}>Use uma conta para entrar.</h2>
          <hr className={styles.hrStyle} />
          {notificacao && <Notificacao tipo={notificacao.tipo} mensagem={notificacao.mensagem} />} {/* Exibição da notificação */}
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
              <button type="submit" className={`btn ${styles.submitButton}`}>
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
