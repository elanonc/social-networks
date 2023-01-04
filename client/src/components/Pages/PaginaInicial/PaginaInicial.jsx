import React from 'react';
import './PaginaInicial.css';
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export function PaginaInicial() {

  const navigate = useNavigate();

  return (
    <div className='home'>
      <div className='painel-login'>
        <div className='container-login'>
          <button className='button-cadastro' onClick={() => navigate('/cadastro')}>Cadastrar</button>
          <div className=""> <p className='message-login'> Já possui cadastro? </p> </div>
          <NavLink className='navbutton' end to='/login'>Entrar</NavLink>
          {/* <div className='container-buttons'>
            <p>
              Já possui cadastro? 
            </p>
          </div>
          <div className='container-navlink'>
            <NavLink className='navbutton' end to='/login'>Login</NavLink>
          </div> */}
        </div>
      </div>
      <div className='container-ilustration'>
        <img className='ilustration' src='https://docs.google.com/uc?id=1E5PLwCQjgO_dIML3SKo3NWyklZqIgyN6'/>
      </div>
    </div>
  )
}