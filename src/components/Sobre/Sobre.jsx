 import React from 'react'
import style from "./Sobre.module.css"
import { Link, useNavigate } from 'react-router-dom';


const Sobre = () => {
   
    return (
        <>
         <footer className={style["footer-container"]}>
            <div className={style["content-container"]}>
                <h1>Sobre nós</h1>
                <h3>Conectando o Agronégocio</h3>

               

                <ul>
                    <li>
                        <img src="../../../public/img/CONECTAR.png" alt="" />
                        O Agroconnect é seu portal para oportunidades no campo agricola. 
                        Parceiros podem anunciar ofertas, enquanto usuarios exploram soluções para 
                        suas necessidades agricolas.
                    </li>
                    <li>
                        <img src="../../../public/img/maoplanta.png" alt="" />
                        O que oferecemos: 
                        <ul className={style["lista-missao"]}>
                            <li>Divulgação Eficiente: Parceiros anunciam suas ofertas.</li>
                            <li>Exploração Simplificada: Usuarios encontram suas soluções.</li>
                        </ul>
                    </li>
                    <li>
                        <img src="../../../public/img/two-friends.png" alt="" />
                        Nossa abordagem:
                        <ul className={style["lista-missao"]}>
                            <li>Centrada no Usuario: Facilitamos interações e transações.</li>
                            <li>Transparencia e Confiança: Garantimos informações confiavéis.</li>
                        </ul>
                    </li>
                    <li>
                        <img src="../../../public/img/PLATAFORMA.png" alt="" />
                        Como funciona:
                        <ul className={style["lista-missao"]}>
                            <li>Publicações dos parceiros: Parceiros criam e compartilham conteudos.</li>
                            <li>Torne-se um Parceiro: Empresas rurais têm acesso a essas funcionalidades</li>
                        </ul>
                    </li>
                    <li>
                        <img src="../../../public/img/junte-se.png" alt="" />
                        Junte-se a nós! 
                        <p>
                            Faça parte de uma comunidade vibrante e crescente no 
                            setor agricola.
                        </p>
                    </li>
                    <p><strong>Para se tornar parceiro <a href="">Clique aqui!</a> </strong></p>
                </ul>
            </div>
            <div className={style["team-container"]}>
                <h3>EQUIPE DE DEV.</h3>
                <ul className={style["team-agroconnect"]}>
                    <li>
                        <h4>SCRUM MASTER</h4>
                        <img src="../../../public/img/vic.jpeg" alt="" />
                        <p>Victoria</p>
                    </li>
                    <li>
                        <h4>DEVELOPER</h4>
                        <img src="../../../public/img/kamy (1).jpeg" alt="" />
                        <p>Kamily</p>

                    </li>
                    
                    <li>
                        <h4>DEVELOPER</h4>
                        <img src="../../../public/img/felipe.jpg" alt="" />
                        <p>Luiz Filipe</p>
                    </li>
                </ul>
            </div>
            {/* <address>
                Av. Habib Gabriel, 1360 - Res. Olivio Benassi, Matão - SP, 15990-539
            </address> */}

        </footer>
        </>
    )
}

export default Sobre
