import React, { useState } from 'react';
import style from './CriarPubli.module.css';
import Notificacao from '../../components/Notificacao/Notificacao'; // Importe o componente Notificacao

function CriarPubli() {
    const [notificacao, setNotificacao] = useState(null); // Estado para controlar a notificação

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para criar a postagem

        // Simulando uma resposta de sucesso
        setNotificacao({ tipo: 'sucesso', mensagem: 'Postagem criada com sucesso!' });

        // Simulando uma resposta de erro (descomente para testar):
        // setNotificacao({ tipo: 'erro', mensagem: 'Erro ao criar a postagem.' });
    };

    return (
        <div className={style["container-publicacao"]}>
            <div className={style["box-publicacao"]}>
                <div className={style["titulo-publicacao"]}>
                    <a href=""><img src="../../../public/img/voltar.png" alt="" /></a>
                    <h1>Criar postagem</h1>
                </div>
                <form className={style["form-publicacao"]}>
                    <label htmlFor="">Título:
                        <input className={style['publicacao-input-titulo']} type="text" placeholder="título da sua postagem"/>
                    </label>
                    <label htmlFor="">Descrição:
                        <input className={style['publicacao-input-descricacao']} type="text" placeholder='conte-nos sobre sua postagem' />
                    </label>
                    <button className={style["btn-escolha-imagem"]}>Escolha uma imagem</button> {/* Botão para escolher uma imagem */}
                    <p>Nenhum upload selecionado*</p>
                </form>
                <button type="button" onClick={handleSubmit} className={style["btn-criacao-publi"]}>Criar publicação</button> {/* Botão para criar a postagem */}
            </div>
            {notificacao && <Notificacao tipo={notificacao.tipo} mensagem={notificacao.mensagem} />} {/* Renderize a notificação se existir */}
        </div>
    )
}

export default CriarPubli;
