import React, { useState } from 'react';
import style from './CriarPubli.module.css';
import Notificacao from '../../components/Notificacao/Notificacao'; // Importe o componente Notificacao
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'; // Importe os ícones do FontAwesome

function CriarPubli() {
    const [notificacao, setNotificacao] = useState(null); // Estado para controlar a notificação
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleChangeTitulo = (e) => {
        setTitulo(e.target.value);
    };

    const handleChangeDescricao = (e) => {
        setDescricao(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Verifica se o formulário é válido antes de prosseguir
        if (e.target.checkValidity()) {
            // Lógica para criar a postagem
            setNotificacao({ tipo: 'sucesso', mensagem: 'Postagem criada com sucesso!' });
        } else {
            setNotificacao({ tipo: 'erro', mensagem: 'Por favor, preencha todos os campos corretamente.' });
        }
    };

    return (
        <div className={style["container-publicacao"]}>
            <div className={style["box-publicacao"]}>
                <div className={style["titulo-publicacao"]}>
                    <a href=""><img src="../../../public/img/voltar.png" alt="" /></a>
                    <h1>Criar postagem</h1>
                </div>
                <form className={style["form-publicacao"]} onSubmit={handleSubmit}>
                    <label htmlFor="">Título:
                        <input
                            className={`${style['publicacao-input-titulo']} ${titulo ? style['input-valid'] : style['input-invalid']}`}
                            type="text"
                            placeholder="Título da sua postagem"
                            value={titulo}
                            onChange={handleChangeTitulo}
                            required
                        />
                        {titulo && <FontAwesomeIcon icon={faCheckCircle} className={style["icon-valid"]} />}
                        {!titulo && <FontAwesomeIcon icon={faExclamationCircle} className={style["icon-invalid"]} />}
                    </label>
                    <label htmlFor="">Descrição:
                        <input
                            className={`${style['publicacao-input-descricacao']} ${descricao ? style['input-valid'] : style['input-invalid']}`}
                            type="text"
                            placeholder="Conte-nos sobre sua postagem"
                            value={descricao}
                            onChange={handleChangeDescricao}
                            required
                        />
                        {descricao && <FontAwesomeIcon icon={faCheckCircle} className={style["icon-valid"]} />}
                        {!descricao && <FontAwesomeIcon icon={faExclamationCircle} className={style["icon-invalid"]} />}
                    </label>
                    <button type="submit" className={style["btn-criacao-publi"]}>Criar publicação</button>
                </form>
            </div>
            {notificacao && <Notificacao tipo={notificacao.tipo} mensagem={notificacao.mensagem} />}
        </div>
    );
}

export default CriarPubli;
