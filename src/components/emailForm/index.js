import React, { useState } from 'react';
import { FiArrowRight } from "react-icons/fi";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from "@emotion/css";
import ClipLoader from "react-spinners/ClipLoader";

import './styles.css';

const override = css`
  display: flex ;
  margin: 0 auto !important;
  

`;

function EmailForm() {

    const [email, setEmail] = useState();
    const [color, setColor] = useState("#ffffff");    
    const [loading, setLoading] = useState(false);


    

    function handleSubmit(e) {
        e.preventDefault();
        
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(!regEmail.test(email)) {
            

            toast.error('E-mail inválido!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            

        } else {

            toast.success('E-mail enviado com sucesso!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });

                setEmail('');
        }

       
    }
       
    

    function handleEmail(event) {
        
        setEmail(event.target.value)
    }

    return (
        <div className="form-container">
             <h3 className="emailTitle">Siga-nos para atualizações </h3>

             {loading ? (
                 <div className="loading">
                    <ClipLoader color={color} loading={loading} css={override} size={25} />
                </div>
             ) : (
                <form  className="form-email">
               
                    <input className="emailField" id="email" name="email" value={email} type="text" placeholder="E-mail" onChange={handleEmail} required />

                    <button onClick={handleSubmit}  className="buttonEmail" type="button">
                        <FiArrowRight size={25} />
                    </button>

                </form>
             )}
            
           
        </div>
       

        
    )
}

export default EmailForm;