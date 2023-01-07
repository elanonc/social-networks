import React from 'react';
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { login } from "../../../api/usuarios.api";
import { authContext } from "../../../App";
import { NavLink } from "react-router-dom";

import "./PaginaLogin.css";

export function PaginaLogin() {
    let { register, handleSubmit } = useForm();
    let navigate = useNavigate();
    let auth = useContext(authContext);

    const tratarSubmit = (data) => {
        login(data.email, data.senha)
        .then((response) => {
            auth.setToken(response.data.token);
            navigate("/");
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <div className="loginin">
            <form onSubmit={handleSubmit(tratarSubmit)}>
                <div className="container-form">
                    <label>Email</label>
                    <input {...register("email")} type="text" placeholder="Ex: johndoe@email.com" />
                </div>
                <div className="container-form">
                    <label>Senha</label>
                    <input type="password" {...register("senha")} placeholder="Ex: johndoe123" />
                </div>
                <div className="container-submit">
                    <button type="submit">Enviar</button>
                </div>
            </form>
            <div className="text-container">
                    <p className='message-login'> 
                        Não tem uma conta? 
                        <NavLink className='navlink-a' end to='/cadastro'>Cadastre-se</NavLink>    
                    </p>
                    
            </div>
        </div>
    );
}