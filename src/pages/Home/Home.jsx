import React, { useState, useRef } from "react"; /**useRef - Rota */
import style from "./Home.module.css";
import Gerais from "../../components/Publicacoes/Gerais";
import Maquinas from "../../components/Publicacoes/Maquinas";
import Produtos from "../../components/Publicacoes/Produtos";
import Servicos from "../../components/Publicacoes/Servicos";
import Sobre from "../../components/Sobre/Sobre"; 
import BotaoTopo from "../../components/BotaoTopo/BotaoTopo";

const Home = () => {
const sobreRef = useRef(null); /*ROTA */
const handleScrollToSobre = () => {
  sobreRef.current.scrollIntoView({ behavior: 'smooth' });
}; /*ROTA fim */

  const [categoria, setCategoria] = useState('gerais'); // Valor padrão 'gerais'

  const handleCategoriaClick = (nomeCategoria) => {
    setCategoria(nomeCategoria);
  };

  return (
    <>
      <div className={style["home-container"]}>
        <div className={style["banner-container"]}>
          {/* Conteúdo do banner */}
          <img src="/img/bannerNote.png" alt="Banner" className={style["banner-image"]} />
          <div className={style["banner-text"]}>
            <h1>Seja bem-vindos ao Agroconnect</h1>
            <h2>Conectando o mundo do agronegócio!</h2>
          </div>
          {/* Botão "Saiba Mais" */}
          <div className={style["button-container"]}>
            <button className={style["learn-more-button"]} onClick={handleScrollToSobre}>
              <span className={style["icon-container"]}>
                <span className={style["icon"]}>&#9660;</span> {/* Ícone de flecha para baixo */}
              </span>
              <span className={style["learn-more-text"]}>Saiba Mais</span>
            </button>
          </div>
        </div>

        {/* Conteúdo de cartões após o banner */}
        <div className={style.cards}>
          <center><h5 className={style["divulgacao-titulo"]}>Divulgações</h5></center>
          <div className={style["card-container"]}>
            {/* Card Maquinas */}
            <div className={style["card"]} onClick={() => handleCategoriaClick('maquinas')}>
              <img src="/img/maquinas-icone.jpg" alt="Card 3" />
              <h3 className={style["categorias-titulo"]}>Máquinas</h3>
            </div>

            {/* Card Produtos */}
            <div className={style["card"]} onClick={() => handleCategoriaClick('produtos')}>
              <img src="https://avatars.mds.yandex.net/i?id=addc79487aa87371d1915b3b1e137c6d2a99fb68-9677438-images-thumbs&n=13" alt="Card 1" />
              <h3 className={style["categorias-titulo"]}>Produtos</h3>
            </div>

            {/* Card Serviços */}
            <div className={style["card"]} onClick={() => handleCategoriaClick('servicos')}>
              <img src="https://content.assets.pressassociation.io/2017/11/09154445/0ab261b1-5654-4473-9d3c-49f667b74860.jpg" alt="Card 2" />
              <h3 className={style["categorias-titulo"]}>Serviços</h3>
            </div>

            {/* Card Gerais (Ou qualquer outra categoria padrão) */}
            <div className={style["card"]} onClick={() => handleCategoriaClick('gerais')}>
              <img src="https://lista.md/public/uploads/articles/268/tinymce_images_d7375d19bc2d1642270320055dc50807.jpg?1649411551" alt="Card 4" />
              <h3 className={style["categorias-titulo"]}>Gerais</h3>
            </div>
          </div>
        </div>

        {/* Renderizar as publicações com base na categoria */}
        {categoria === 'gerais' && <Gerais />}
        {categoria === 'maquinas' && <Maquinas />}
        {categoria === 'produtos' && <Produtos />}
        {categoria === 'servicos' && <Servicos />}

        {/* Renderizar o componente Sobre */}
        <div ref={sobreRef}>
        <Sobre />
      </div>
      </div>
           {/* Adicionar o botão "Voltar ao Topo" */}
           <BotaoTopo />
    </>
  );
};

export default Home;
