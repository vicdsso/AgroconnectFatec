// import React from 'react'
import style from './Footer.module.css'

function Footer(){
    return(
        <footer className={style["footer-container"]}>
            <div className={style["content-container"]}>
                <h1>Sobre nós</h1>
                <h3>Conectando o Agronégocio</h3>
                <ul>
                    <li>
                        <img src="" alt="" />
                        O Agroconnect é seu portal para oportunidades no campo agricola. Parceiros 
                        podem anunciar ofertas, enquanto usuarios exploram soluções para 
                        suas necessidades agricolas.
                    </li>
                    <li>
                        <img src="" alt="" />
                        O que oferecemos: 
                        <ul>
                            <li>Divulgação Eficiente: Parceiros anunciam suas ofertas.</li>
                            <li>Exploração Simplificada: Usuarios encontram suas soluções</li>
                        </ul>
                    </li>
                    <li>
                        <img src="" alt="" />
                        Nossa abordagem:
                        <ul>
                            <li>Centra no Usuario: Facilitamos interações e transações.</li>
                            <li>Transparencia e Confiança: Garantimos informações confiavéis.</li>
                        </ul>
                    </li>
                    <li>
                        <img src="" alt="" />
                        Como funciona:
                        <ul>
                            <li>Publicações dos parceiros: Parceiros criam e compartilham conteudos.</li>
                            <li>Torne-se um Parceiro: Empresas rurais têm acesso a essas funcionalidades</li>
                        </ul>
                    </li>
                    <li>
                        <img src="" alt="" />
                        junte-se a nós! 
                        <p>
                            Faça parte de uma comunidade vibrante e crescente no 
                            setor agricola.
                        </p>
                    </li>
                    <p><strong>Para se tornar parceiro <a href="">Clique aqui!</a> </strong></p>
                </ul>
            </div>
            <div className={style["team-container"]}>
                <h3>Equipe de desenvolvedores:</h3>
                <ul>
                    <li>
                        <h4>Scrum Master</h4>
                        <img src="" alt="" />
                        <p>Victoria</p>
                    </li>
                    <li>
                        <h4>Developer</h4>
                        <img src="" alt="" />
                        <p>Kamily</p>
                    </li>
                    
                    <li>
                        <h4>Developer</h4>
                        <img src="" alt="" />
                        <p>Luiz Filipe</p>
                    </li>
                </ul>
            </div>
            {/* <address>
                Av. Habib Gabriel, 1360 - Res. Olivio Benassi, Matão - SP, 15990-539
            </address> */}

        </footer>
    )
}

export default Footer