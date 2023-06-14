import React from 'react';
import './footer.css'

const Footer = () => {
    return (
    
    <footer className="footer-bg  text-center">
    <div class="footer row align-items-start col-12">


        <section className="footer-titulo col-4">

            <h3 className="font-2-l-b cor-0 contato ">CONTATO</h3>
            <img src="./src/assets/images/bird.png" alt="DrPapel" className='logo-footer'/>
        </section>

        <section className="footer-contato1">

            <ul className="font-2-m cor-5 contatos row">
                <li className="li-footer"><a href="tel:+552199999999" class="a-footer col-1">+55 48 98853-5179</a></li>
                <section className="separador"></section>
                <li className="a-footer">Servidão Reginaldo José Sagaz, 281 - Ingleses/4</li>
                <li className="li-footer a-footer">Florianópolis-SC</li>
                <section className="separador"></section>
            </ul>
        </section>
        <div className='redes'>

        <section className="footer-contato2 ">

            <div className="footer-redes">

                <a href="./">
                    <img src="https://www.origamid.com/projetos/bikcraft/img/redes/instagram-p.svg" alt="Instagram"/>
                </a>
                <a href="./">
                    <img src="https://www.origamid.com/projetos/bikcraft/img/redes/facebook-p.svg" alt="Facebook"/>
                </a>
                <a href="./">
                    <img src="https://www.origamid.com/projetos/bikcraft/img/redes/youtube-p.svg" alt="Youtube"/>
                </a>
            </div>
        </section>
        </div>
        <p className="footer-copy font-2-m cor-6">Estúdio Dr Papel © Alguns direitos reservados. </p>
    </div>
</footer>

    )
};

export default Footer;