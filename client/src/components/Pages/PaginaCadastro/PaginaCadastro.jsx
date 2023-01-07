import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { criarUsuario } from "../../../api/usuarios.api";
import { NavLink } from "react-router-dom";

import "./PaginaCadastro.css";

export function PaginaCadastro() {

    let { register, handleSubmit } = useForm();
    let navigate = useNavigate();
    
    const tratarSubmit = (data) => {
        criarUsuario(data.nome, data.email, data.senha)
            .then((usuario) => {
                console.log(usuario);
                navigate("/login");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    
    return (
        <div className="signup">
            <form onSubmit={handleSubmit(tratarSubmit)}>
                <div className="container-form">
                    <label>Nome:</label>
                    <input {...register("nome")} type="text" placeholder="Ex: John Doe" />
                </div>
                <div className="container-form">
                    <label>Email:</label>
                    <input {...register("email")} type="text" placeholder="Ex: johndoe@email.com" />
                </div>
                <div className="container-form">
                    <label>Senha:</label>
                    <input type="password" {...register("senha")} placeholder="Ex: johndoe2023" />
                </div>
                <div className="container-submit">
                    <button type="submit">Enviar</button>
                </div>
            </form>
            <div className="text-container">
                <p className='message-login'> 
                    Já possui cadastro? 
                    <NavLink className='navlink-a' end to='/login'>Entrar</NavLink>    
                </p>
                
            </div>
        </div>
      );
}