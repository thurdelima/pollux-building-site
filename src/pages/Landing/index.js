import React from 'react';

import logoImg from '../../assets/images/pollux.png';
import landEmail from '../../assets/images/building.png';

import EmailForm from '../../components/emailForm';

import './styles.css';

function Landing() {

    return (
       
        <div id="page-landing">
             
             <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Pollux"/>
                    {/* <h2>Sua plataforma de estudos online</h2> */}
                    <h1><b className="wLetter">Nosso site está em</b> <b className="yLetter">Construção</b></h1>

                    <span>
                        <p className="textDisplay">Deixe seu e-mail para avisarmos quando o site ficar pronto! Enquanto isso, entre em contato pelo email: <strong>getin@pollu-xtechnology.com</strong>, ou telefone <strong>(48) 9144-1791</strong></p>
                    </span>

                    {/* <EmailForm />  */}

                </div>
                <div className="logo-img">
                    <img src={landEmail} alt="Email pollux" className="land-email-image" />
                </div>
                

             </div>
        </div>
    )
}

export default Landing;