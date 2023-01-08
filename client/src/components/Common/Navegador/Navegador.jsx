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
{/* 
      <NavLink className="navbutton" end to="/cadastro">Cadastro</NavLink> 
      <NavLink className="navbutton" end to="/login">Login</NavLink>  */}

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
      <div className="navbar">
        <div className="users-logo">
            <a href="#">
              Users-App
            </a>
        </div>

        <div>
          <ul>
            <li>
              <NavLink id="nav-linhadotempo" end to="/">Linha do Tempo</NavLink> 
            </li>
            <li>
              <NavLink className="navbutton" end to="/postar">Postar</NavLink> 
            </li>
            <li>
              <NavLink className="navbutton" end to="/login" onClick={() => auth.setToken(null)} >Logout</NavLink> 
            </li>
          </ul>
        </div>
      
      </div>
    )
  }
}