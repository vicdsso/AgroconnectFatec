
import React, { useState } from "react";
import style from "./Perfil.module.css";
import BotaoTopo from "../../components/BotaoTopo/BotaoTopo";
import { useNavigate } from 'react-router-dom';
import Footer from "../../components/Footer/Footer";
import Botaogeral from '../Botaogeral.module.css'

const Perfil = () => {
  const navigate = useNavigate();

  const handleCriarClick = () =>{
    navigate('/criar')
  }
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  const fullText = (
    <p>
      A Fazenda Sol Poente é um exemplo de agricultura sustentável e compromisso com a qualidade.
      Produzimos alimentos de alta qualidade, como milho orgânico cultivado com técnicas sustentáveis,
      soja não transgênica para preservar o meio ambiente e frutas regionais frescas e saborosas.
      Valorizamos o respeito ao meio ambiente e a comunidade local em todas as nossas atividades.
    </p>
  );

  const briefText = (
    <p>
 A Fazenda Sol Poente é um exemplo de agricultura sustentável e compromisso com a qualidade.
      Produzimos alimentos de alta qualidade...
    </p>
  );
  return (
    <>
    <div className={style["container"]}>
      <div className={style["banner"]}>
        <div className={style["Fundo-foto"]}>
          <div>
            <img
              className={style["foto"]}
              src="/img/logo-solPoente.jpg"
              alt="logo"
            />
          </div>
        </div>
        <div className={style["icones"]}>
          <img
            className={style["icone"]}
            src="img/whatsapp.png"
            alt="whatsapp"
          />
          <img
            className={style["icone"]}
            src="img/instagram.png"
            alt="instagram"
          />
          <img
            className={style["icone"]}
            src="img/facebook.png"
            alt="facebook"
          />
          <img className={style["icone"]} src="img/email.png" alt="email" />
          <img
            className={style["icone"]}
            src="img/telefone.png"
            alt="telefone"
          />
        </div>
        <img
          className={style["icone-editar"]}
          src="img/editar.png"
          alt="editar-perfil"
        />
        <div className={style["fundo-banner"]}>
          <h1 className={style["nome-parceiroSobre"]}>Sol Poente</h1>
          <div className={style["sobre-parceiro"]}>
          {isExpanded ? fullText : briefText}
          <button onClick={toggleText} className={style["ler-maisSobre"]}>
            {isExpanded ? 'Ler menos' : 'Ler mais'}
          </button>
          </div>
        </div>
      </div>

      <div className={style["container-disponivel"]}>
        <div className={style["two-container"]}>
          <div className={style["titulo-container"]}>
            <h3 className={style["titulo"]}>Principais produtos</h3>
            <div className={style["produto-container"]}>
              <div
                onMouseEnter={() =>
                  (document.getElementById("milho-nome").style.display =
                    "block")
                }
                onMouseLeave={() =>
                  (document.getElementById("milho-nome").style.display = "none")
                }
              >
                <img
                  className={style["produto"]}
                  src="img/milho.png"
                  alt="milho"
                />
                <div id="milho-nome" className={style["produto-nome"]}>
                  Milho
                </div>
              </div>
              <div
                onMouseEnter={() =>
                  (document.getElementById("soja-nome").style.display = "block")
                }
                onMouseLeave={() =>
                  (document.getElementById("soja-nome").style.display = "none")
                }
              >
                <img
                  className={style["produto"]}
                  src="img/soja.webp"
                  alt="soja"
                />
                <div id="soja-nome" className={style["produto-nome"]}>
                  Soja
                </div>
              </div>
              <div
                onMouseEnter={() =>
                  (document.getElementById("laranja-nome").style.display =
                    "block")
                }
                onMouseLeave={() =>
                  (document.getElementById("laranja-nome").style.display =
                    "none")
                }
              >
                <img
                  className={style["produto"]}
                  src="img/laranja.png"
                  alt="laranja"
                />
                <div id="laranja-nome" className={style["produto-nome"]}>
                  Laranja
                </div>
              </div>
            </div>
          </div>
          <div className={style["titulo-container"]}>
            <h3 className={style["titulo"]}>Produtos disponíveis</h3>
            <div className={style["produto-container"]}>
              <div
                onMouseEnter={() =>
                  (document.getElementById(
                    "milho-disponivel-nome"
                  ).style.display = "block")
                }
                onMouseLeave={() =>
                  (document.getElementById(
                    "milho-disponivel-nome"
                  ).style.display = "none")
                }
              >
                <img
                  className={style["produto"]}
                  src="img/milho.png"
                  alt="milho disponível"
                />
                <div
                  id="milho-disponivel-nome"
                  className={style["produto-nome"]}
                >
                  Milho Disponível
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
    <hr/>
    <button onClick={handleCriarClick} className={Botaogeral['btn-primary']}>Criar publicação</button>
    <section>
        <div className={style.estrutura}>
          <div className={style.row}>
            <div className={style.col}>
              <img
                className={style["logo-parceiros"]}
                src="/img/logo-solPoente.jpg"
                alt="Logo Parceiros"
              />

              <div className={style["post-textos"]}>
                <p className={style["nome-parceiro"]}>Sol Poente</p>
                <p className={style["tipo-parceiro"]}>
                  Agricultor|Produto|
                  <img
                    className={style.pontinhos}
                    src="/img/pontos.png"
                    alt="pontinhos"
                  />
                </p>
              </div>
            </div>
            <hr></hr>
            <center>
              <h5>Oferta de Safra de Milho</h5>
            </center>

            {}
            <p className={style["texto-parceiros"]}>
              É com grande satisfação que anunciamos a disponibilidade de nossa
              safra de milho de alta qualidade, diretamente da Fazenda
              Florescer. Nosso milho é cultivado com cuidado e dedicação,
              garantindo grãos de excelência. Cada tonelada... está disponível por
              um preço competitivo de R$ 450. Disponível: 3 tonelada (1000 kg)
              Preço: R$ 450 por tonelada Contato: Se você deseja adquirir nosso
              milho, entre em contato conosco através do e-mail:
              fazendaflorescer@email.com ou pelo telefone: (11) 9876-5432.
              {}
            </p>
            <p className={style["ler-mais"]}>Ler mais</p>

            <div>
              <img
                className={style["imagem-parceiros"]}
                src="https://blog.syngentadigital.ag/wp-content/uploads/2021/07/19-07_colheita-milho_3.jpg"
                alt=""
              />
            </div>

            <div className={style["botoes-container"]}>
              <img
                className={style["curtirFavoritar"]}
                src="/img/coracao.png"
                alt="Curtir"
              />
              <button className={style["btn-saibamais"]} type="button">
                Entrar na publicação
              </button>
              <img
                className={style["curtirFavoritar"]}
                src="/img/favorito.png"
                alt="Favoritar"
              />
            </div>
          </div>
        </div>
      </section>
      <BotaoTopo />
           <Footer/>
    </>
  );
};

export default Perfil;
 