import React from 'react';
import './Navegador.css';
import { NavLink } from "react-router-dom";

import { useContext } from "react";
import { authContext } from "../../../App";

export function Navegador() {
  let auth = useContext(authContext);

  if (auth.token == null) {
    return (
      <div className="page">
        <div>
            <a href="#">
              Logo
            </a>
        </div>

      <NavLink className="navbutton" end to="/cadastro">Cadastro</NavLink> 
      <NavLink className="navbutton" end to="/login">Login</NavLink> 

      <div>
        <ul>
          <li>
            <a href="#">Elano N. Caitano</a>
          </li>
        </ul>
      </div>

      </div>
    )
  } else {
    return (
      <div className="page">
        <div>
            <a href="#">
              Logo
            </a>
        </div>

      <NavLink className="navbutton" end to="/login" onClick={() => auth.setToken(null)} >Logout</NavLink> 
      <NavLink className="navbutton" end to="/">Linha do Tempo</NavLink> 
      <NavLink className="navbutton" end to="/postar">Postar</NavLink> 

      <div>
        <ul>
          <li>
            <a href="#">Elano N. Caitano</a>
          </li>
        </ul>
      </div>

      </div>
    )
  }
}