import React, { useState } from 'react'
import style from './CriarPubli.module.css'

function CriarPubli() {
    
    


    // https://www.flaticon.com/br/icone-gratis/voltar_3585896?term=voltar&page=1&position=1&origin=tag&related_id=3585896
    return (
        <div className={style["container-publicacao"]}>
            <div className={style["box-publicacao"]}>
                <div className={style["titulo-publicacao"]}>
                    <a href=""><img src="../../../public/img/voltar.png" alt="" /></a>
                    <h1>Criar postagem</h1>
                </div>
                <form action="" className={style["form-publicacao"]}>
                    <label htmlFor="" >Título:
                        <input className={style['publicacao-input-titulo']} type="text" placeholder="título da sua postagem"/>
                    </label>
                    <label htmlFor="">Descrição:
                        <input className={style['publicacao-input-descricacao']} type="text" placeholder='conte-nos sobre sua postagem' />
                        
                    </label>
                    <button>Escolha uma imagem:</button>
                    <p>Nenhum upload selecionado*</p>

                </form>
                <button className={style["btn-criacao-publi"]}>Criar publicação</button>
            </div>
        </div>
    )
}

export default CriarPubli