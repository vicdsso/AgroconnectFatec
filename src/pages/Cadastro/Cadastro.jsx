import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Notificacao from '../../components/Notificacao/Notificacao';
import styles from './Cadastro.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignupForm() {
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    email: '',
    cnpjCpf: '',
    senha: '',
    confirmarSenha: ''
  });

  const [notificacao, setNotificacao] = useState(null);

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);

    // Simulando uma resposta de sucesso
    setNotificacao({ tipo: 'sucesso', mensagem: 'Solicitação de cadastro enviada com sucesso!' });

    // Simulando uma resposta de erro (descomente para testar):
    // setNotificacao({ tipo: 'erro', mensagem: 'Erro ao enviar a solicitação de cadastro.' });
  };

  return (
    <div className={styles.containerLogin}>
      <div className={styles.container}>
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Criar uma nova conta</h2>
            <hr />
            
            {notificacao && <Notificacao tipo={notificacao.tipo} mensagem={notificacao.mensagem} />}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="nome"
                  placeholder="Nome"
                  value={form.nome}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="telefone"
                  placeholder="Telefone"
                  value={form.telefone}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="cnpjCpf"
                  placeholder="CNPJ/CPF"
                  value={form.cnpjCpf}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  name="senha"
                  placeholder="Senha"
                  value={form.senha}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  name="confirmarSenha"
                  placeholder="Confirmar senha"
                  value={form.confirmarSenha}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">
                  Cadastrar-se
                </button>
              </div>
            </form>
            <div className="mt-3">
              <a href="#" onClick={handleLoginClick}>
                Já possui conta? <span className="text-primary">Faça login</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
